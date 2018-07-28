// SEQUELIZE VERSION //
var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var Barber = sequelize.define("Barber", {
        barber_name: {
          type: Sequelize.STRING
        },
        barber_photo: {
          type: Sequelize.STRING
        },
        specialty: {
          type: Sequelize.STRING
        },
        barber_email: {
          type: Sequelize.STRING
        },
        barber_phone: {
          type: Sequelize.STRING
        }
      }, {
        timestamps: false
    });

    return Barber;
};
  


// // Dependencies
// // =============================================================

// // Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");

// // Creates a "Book" model that matches up with DB
// var Barber = sequelize.define("barber", {
//   barber_name: {
//     type: Sequelize.STRING
//   },
//   specialty: {
//     type: Sequelize.STRING
//   },
//   barber_email: {
//     type: Sequelize.STRING
//   },
//   barber_phone: {
//     type: Sequelize.INTEGER
//   }
// }, {
//   timestamps: false
// });

// // Syncs with DB
// Barber.sync();

// // Makes the Book Model available for other files (will also create a table)
// module.exports = Barber;
