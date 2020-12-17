const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Discord.Client({
    ws: {
        intents: [
            'GUILD_MESSAGES',
            'GUILDS',
            'GUILD_MEMBERS',
            'DIRECT_MESSAGES'
        ]
    }
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.modules = ["general", "owner"]

const dir = process.cwd() + "/src/modules/Discord/bot";

// Load events
fs.readdir(path.join(dir, "/events/"), (err, files) => {
    if (err) throw err
    for (const file of files) {
        if (!file.endsWith(".js")) continue;
        let event = require(path.join(dir, "/events/", file));
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(path.join(dir, "/events/", file))];
    }
});

// Load commands
client.modules.forEach(cmd => {
    fs.readdir(path.join(dir, "/commands/", cmd), (err, files) => {
        if (err) throw err
        files.forEach(f => {
            let commandName = f.split(".")[0];
            const props = require(path.join(dir, "/commands/", cmd, f));
            client.commands.set(commandName, props);
            props.aliases.forEach(a => {
                client.aliases.set(a, props.name)
            });
        });
    });
});

try {
    client.login(global.config.get("discord.token"));
} catch (e) {
    console.error(e);
}

module.exports = client;
