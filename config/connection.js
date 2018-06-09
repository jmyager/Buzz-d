// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize;

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize('groove_db', 'root', '', {
        host: "127.0.0.1",
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    });
};

// Exports the connection for other files to use
module.exports = sequelize;
