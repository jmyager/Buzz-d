// SEQUELIZE VERSION //
var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var Booking = sequelize.define("Booking", {
        client_id: {
          type: Sequelize.SMALLINT
        },
        barber_id: {
          type: Sequelize.SMALLINT
        },
        booking_time: {
          type: Sequelize.STRING
        }
      }, {
        timestamps: false
    });
    return Booking;
};
  