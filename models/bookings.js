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
        booking_date: {
          type: Sequelize.INTEGER
        },
        booking_time: {
          type: Sequelize.INTEGER
        }
      }, {
        timestamps: false
    });
    return Booking;
};
  