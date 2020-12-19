const Config = require('./modules/Config');
const Hardware = require('./modules/Hardware');
const Database = require('./modules/Database');

global.config = new Config();
global.hardware = new Hardware();
global.database = new Database(global.config.get('mysql'));