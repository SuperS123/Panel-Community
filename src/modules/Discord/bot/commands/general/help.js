const helper = require('../../helper');

module.exports = {
    name: "help",
    description: "Shows you all the commands",
    dm: true,
    aliases: ["h"],
    run: function(client, message, args) {

        // Search for command
        if (args[0]) {
            const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
            if (cmd) {
                helper.sendEmbed(message.channel, `Help`, `**Name**: ${cmd.help.name}\n**Description**: ${cmd.help.description}\n**DM**: ${cmd.help.dm}\n**Cooldown**: ${cmd.help.cooldown ? cmd.help.cooldown + " Seconds" : "None"}\n**Aliases**: ${cmd.help.aliases}`);
                return;
            }
            helper.sendErrorEmbed(message.channel, "That is not a valid command or alias")
            return;
        }

        // Help mnu
        helper.sendEmbed(message.channel, "Help Menu", "", [
            {
                name: "General",
                value: "help, ping"
            }
        ]);

        return;
    }
}
