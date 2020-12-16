class Discord {

    constructor() {
        this.bot = require('./bot');
    }

    getBot() {
        return this.bot;
    }

}

module.exports = Discord;
