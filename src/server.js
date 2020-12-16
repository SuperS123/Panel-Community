const Config = require('./modules/Config');
const Hardware = require('./modules/Hardware');
const Discord = require('./modules/Discord');

global.config = new Config();
global.hardware = new Hardware();
global.discord = new Discord();

async function tests() {
    // console.log(global.config.get("web"));
    // console.log(await global.hardware.getStats(false));
    // console.log(global.discord.getBot())
}

tests();
