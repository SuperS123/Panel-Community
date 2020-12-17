const rfr = require('rfr');

module.exports = async (client) => {

    let prefix = global.config.get("discord.prefix");
    let version = rfr('package.json').version;

    // Set Status
    await client.user.setActivity(`${prefix}help || v${version}`, { type: 'WATCHING' });

		// Logging Login
		console.log(`Bot logined as ${client.user.tag}`)
};
