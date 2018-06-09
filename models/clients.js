// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Client = sequelize.define("client", {
  client_name: {
    type: Sequelize.STRING
  },
  client_email: {
    type: Sequelize.STRING
  },
  client_phone: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});

// Syncs with DB
Client.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Client;
