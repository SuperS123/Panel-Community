const helper = require('../../helper');

module.exports = {
    name: "ping",
    description: "Shows latency",
    dm: true,
    aliases: ["p"],
    run: function(client, message, args) {

        helper.sendEmbed(message.channel, "Pinging", "").then(m => {
            helper.editEmbed(message.channel, m.id, "Pong!", "", [
                {
                    name: "Discord API",
                    value: client.ws.ping + "ms"
                },
                {
                    name: "Roundtrip",
                    value: Math.floor(m.createdAt-message.createdAt) + "ms"
                }
            ])
        })

        return;
    }
}
