module.exports = {
    token: 'Nope',

    bot: { // https://discordjs.guide/popular-topics/faq.html#how-do-i-check-if-a-guild-member-has-a-specific-role
        activity: 'PLAYING',
        activity_message: 'with humans',
        activity_status: 'online',
    },

    //the channels the bot is allowed to use
    support_channels: [ //channel ids
        '892818008915972176'
    ],

    //configured allowed urls
    urls: {
        allowed_urls: [
            'https://pastebin.com'
        ],
        max_content_size_in_bytes: 314572, //0.3mb
    },

    //configure image parsing
    images: {
        max_size_in_bytes: 314572, //0.3mb
        parse_language: 'eng',
        message_reaction: '👀'
    },

    //all keys have to be valid regex
    responses: [
        {
            key: /^(?=.*stopped)(?=.*server).*$/mgi,
            content: `Stopped servers continue to use dedicated system resources and therefore incur charges until you delete the server.`
        },
        {
            key: /^(?=.*billed).*$/mgi,
            content: `All servers on your account are billed hourly. The hourly rate is determined by dividing the monthly rate by 720.`
        },
        {
            key: /^(?=.*as)(?=.*pay)(?=.*you).*$/mgi,
            content: `All servers on your account are billed hourly. The hourly rate is determined by dividing the monthly rate by 720.`
        },
        {
            key: /^(?=.*billing).*$/mgi,
            content: `All servers on your account are billed hourly. The hourly rate is determined by dividing the monthly rate by 720.`
        },
        {
            key: /^(?=.*specs).*$/mgi,
            content: `We use Intel Xeon and AMD Epyc processors, DDR4-3200 Mhz RAM and PCIe 4.0 NVMe SSDs in our data centres.`
        },
        {
            key: /^(?=.*hardware).*$/mgi,
            content: `We use Intel Xeon and AMD Epyc processors, DDR4-3200 Mhz RAM and PCIe 4.0 NVMe SSDs in our data centres.`
        },
        {
            key: /^(?=.*trust).*$/mgi,
            content: `Feeling skeptical? Feel free to ask our clients or visit our Trustpilot page here; https://www.trustpilot.com/review/actiniumcloud.com. You may also check <#922041919134105660> or use the code **5USD4FREE** in the billing panel for a $5 free trial .`
        },
        {
            key: /^(?=.*scam).*$/mgi,
            content: `Feeling skeptical? Feel free to ask our clients or visit our Trustpilot page here; https://www.trustpilot.com/review/actiniumcloud.com. You may also check <#922041919134105660> or use the code **5USD4FREE** in the billing panel for a $5 free trial .`
        },
        {
            key: /^(?=.*high)(?=.*ram).*$/mgi,
            content: `If you are hosting a Minecraft Java Server, peaking RAM near the limit is normal. This is due to JVM (Java) taking all of the available RAM initially because of its garbage collection technology.`
        },
        {
            key: /^(?=.*peak)(?=.*ram).*$/mgi,
            content: `If you are hosting a Minecraft Java Server, peaking RAM near the limit is normal. This is due to JVM (Java) taking all of the available RAM initially because of its garbage collection technology.`
        },
        {
            key: /^(?=.*free)(?=.*trial).*$/mgi,
            content: `The code for a $1 free trial is **1USD4FREE**. To redeem it, go to https://my.actiniumcloud.com/ and click on your available credits which will give you a button to redeem the code.`
        },
    ]
}
