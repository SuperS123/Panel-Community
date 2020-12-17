const Config = require('./modules/Config');
const Hardware = require('./modules/Hardware');

global.config = new Config();
global.hardware = new Hardware();
