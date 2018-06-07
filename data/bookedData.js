// ===============================================================================
// DATA
// dummy data for customer's who have a booked appointment
// ===============================================================================

var BookedArray = [
  {
    customerName: "Saima",
    customerEmail: "saima@example.com",
    phoneNumber: "000-000-0000",
    customerID: "saimaCool",
    bookDate: "07/14/1993",
    bookTime: "1400",
    bookBarberId: "afhaque89"
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = BookedArray;
