const mysql = require('mysql');

class Database {
    
    constructor(options) {
        this.options = options;
        this.createConnection();
        this.connect();
    }

    createConnection() {
        this.connection = mysql.createConnection(this.options);
    }

    connect() {
        this.connection.connect(function(err) {
            if (err) throw err
            this.connected = true;
        });
    }

    end() {
        this.connection.end();
    }

    query(query, callback = function() {}) {
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, rows) => {
                if (err) {
                    reject(err);
                    return callback(err);
                }
                resolve(rows);
                return callback(null, rows);
            });
        });
    }

    getTable(table, callback = function() {}) {
        if (typeof table !== 'string') throw new Error("Table is required to be a string");
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM ${table}`, (err, result) => {
                if (err) {
                    reject(err);
                    return callback(err);
                }
                resolve(result);
                return callback(null, result);
            });
        });
    }

    select(target, table, callback = function() {}) {
        if (typeof target !== 'string') throw new Error("Target is required to be a string");
        if (typeof table !== 'string') throw new Error("Table is required to be a string");
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT ${target} FROM ${table}`, (err, result) => {
                if (err) {
                    reject(err);
                    return callback(err);
                }
                resolve(result);
                return callback(null, result);
            });
        });
    }
}

module.exports = Database;