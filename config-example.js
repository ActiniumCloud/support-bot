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
            content: `You can ask our clients here or visit our trustpilot page, and if you still feel untrusted, feel free to add some credits and test it out quickly within a few clicks. You might check #why-actiniumcloud as well.`
        },
    ]
}
