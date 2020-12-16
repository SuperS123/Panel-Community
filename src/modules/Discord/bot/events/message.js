const helper = require('../helper');

module.exports = async (client, message) => {

    if (message.author.bot) return;

    let prefix = global.config.get("discord.prefix");

    if (message.content.indexOf(prefix) !== 0) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!cmd) return;

    if (!message.guild && !cmd.help.dm) return client.sendEmbed(message.channel, "You may only use that command in servers!");

    try {
        cmd.run(client, message, args);
    } catch (e) {
        await helper.sendErrorEmbed(message.channel, "An unknown error has occurred.");
        return;
    }

    return;

};
