// SEQUELIZE VERSION //
var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var Booking = sequelize.define("Booking", {
        client_id: {
          type: Sequelize.TINYINT
        },
        barber_id: {
          type: Sequelize.TINYINT
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
    return Barber;
};
  

client_id SMALLINT NOT NULL REFERENCES clients(id),
    barber_id SMALLINT NOT NULL REFERENCES barbers(id),
    booking_date INT NOT NULL,
    booking_time INT NOT NULL,