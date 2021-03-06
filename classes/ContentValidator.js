const {Message, MessageAttachment} = require('discord.js')
const Tesseract = require('tesseract.js')
const axios = require('axios');
const {responses, urls, images} = require('../config')
const urlExpresion = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/mg
const findUrlsExpression = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/gm

class ContentValidator {
    /**
     * @param {Message} message
     * @return {Promise<{key: RegExp, content: string}|null>}
     */
    validateContent(message) {
        return new Promise(async (resolve, reject) => {
            //check if content is pastebin url (or something like that)
            if (urls.allowed_urls.findIndex(url => message.content.startsWith(url)) !== -1) {
                if (message.content.match(urlExpresion)) {
                    let text = await this.parseUrl(message).catch(reject);
                    return resolve(this.parseMessage(text));
                }
            }

            //check if content has image
            if (message.attachments.size > 0) {
                let attachment = message.attachments.first()
                if (attachment.size < images.max_size_in_bytes && this.attachIsImage(attachment)) {
                    let text = await this.parseImage(message).catch(reject)
                    return resolve(this.parseMessage(text));
                }
            }

            return resolve(this.parseMessage(message.content))
        })


    }

    /**
     * @description check if attachment is image
     * @param {MessageAttachment} msgAttach
     */
    attachIsImage(msgAttach) {
        return msgAttach.url.match(/(png|jpg|jpeg)$/gmi)
    }

    /**
     * @param {Message} message
     * @return {Promise<string>}
     */
    parseImage(message) {
        let attachment = message.attachments.first()

        return new Promise(async (resolve, reject) => {
            await message.react(images.message_reaction)

            Tesseract.recognize(attachment.url, images.parse_language)
                .then(async ({data: {text}}) => {
                    await message.reactions.removeAll()
                    return resolve(text)
                })
                .catch(reject)


        })

    }

    /**
     * @param {Message} message
     * @return {Promise<string>}
     */
    parseUrl(message) {
        return new Promise(async (resolve, reject) => {
            let response = await axios.get(message.content, {
                maxContentLength: urls.max_content_size_in_bytes
            }).catch(reject)

            typeof response.data == 'string'
                ? resolve(response.data)
                : reject(new Error('response data is not a string'))
        })
    }

    /**
     * @description search for a match, return the response or null
     * @note the text is filtered from urls, to prevent the bot on reaction to urls that contain keys
     * @param {string} text
     * @return {{key: RegExp, content: string}|null}
     */
    parseMessage(text) {
        let textToCheck = text.replaceAll(findUrlsExpression, '')
        let index = responses.findIndex(response => textToCheck.match(response.key))
        return index !== -1 ? responses[index] : null;
    }
}


module.exports = new ContentValidator()
