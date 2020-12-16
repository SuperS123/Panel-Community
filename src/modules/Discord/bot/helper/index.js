module.exports = {

    sendEmbed(channel, title, description, fields, footer, color, thumbnail) {
        return new Promise((resolve, reject) => {
            channel.send({
                embed: {
                    title: title,
                    description: description,
                    fields: fields,
                    thumbnail: { url: thumbnail || "" },
                    color: color || global.config.get("discord.embed.color"),
                    footer: { text: footer || global.config.get("discord.embed.footer") }
                }
            }).then(message => {
                resolve(message);
                return message;
            }).catch(err => {
                reject(err);
            });
        });
    },

    sendErrorEmbed(channel, error) {
        return new Promise((resolve, reject) => {
            channel.send({
                embed: {
                    title: ":x: ERROR",
                    description: `\`\`\`${error}\`\`\``,
                    color: global.config.get("discord.embed.color"),
                }
            }).then(message => {
                resolve(message);
            }).catch(err => {
                reject(err);
            });
        });
    },

    editEmbed(channel, message, title, description, fields, footer, color, thumbnail) {
        return new Promise(async (resolve, reject) => {
            let m = await channel.messages.fetch(message);
            m.edit({
                embed: {
                    title: title,
                    description: description,
                    fields: fields,
                    thumbnail: { url: thumbnail || "" },
                    color: color || global.config.get("discord.embed.color"),
                    footer: { text: footer || global.config.get("discord.embed.footer") }
                }
            }).then(message => {
                resolve(message);
            }).catch(err => {
                reject(err);
            });
        });
    }


}
