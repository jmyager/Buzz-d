// // ===============================================================================
// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // These data sources hold arrays of information on barber data and booked customer data etc.
// // ===============================================================================

// var barberData = require("../data/barberData");
// var bookedData = require("../data/bookedData");

var db = require("../models");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  
  app.get("/api/barbers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Barber.findAll({}).then(function(dbBarbers) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbBarbers);
    });
  });

  // POST route for saving a new todo
  app.post("/api/clients", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Client.create({
      client_name: req.body.client_name,
      client_email: req.body.client_email,
      client_phone: req.body.client_phone
    }).then(function(dbClient) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbClient);
    });
  });

  app.post("/api/bookings", function(req, res) {

    db.Booking.create({
      client_id: req.body.client_id,
      barber_id: req.body.barber_id,
      booking_date: req.body.booking_date,
      booking_time: req.body.booking_time
    }).then(function(dbBooking) {
      res.json(dbBooking);
    });
  });

};

// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

// app.get("/api/barbers", function(req, res) {
//     res.json(barberData);
//   });

//   app.get("/api/booked", function(req, res) {
//     res.json(bookedData);
//   });

//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // (ex. User fills out a reservation request... this data is then sent to the server...
//   // Then the server saves the data to the tableData array)
//   // ---------------------------------------------------------------------------

//   app.post("/api/book", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body-parser middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     barberData = [];
//     bookedData = [];

//     console.log(tableData);
//   });
// };
