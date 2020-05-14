let express = require("express");
let router = express.Router();
// const uuid1 = require("uuid/v1");
// * localhost:3000/trips - View all trips
router.get("/", (req, res) => {
  let myTrips = trips.filter((trip) => {
    return trip.username == req.session.username;
  });
  res.render("trips", { listOfTrips: myTrips });
});
// display add-trip.mustache page
router.get("/add-trip", (req, res) => {
  res.render("add-trip");
});
// * localhost:3000/trips/add-trip - POST - Add a new trip
router.post("/add-trip", (req, res) => {
  // let id = uuidv1();
  let title = req.body.title;
  let departureDate = req.body.departureDate;
  let returnDate = req.body.returnDate;
  let image = req.body.image;
  let username = req.session.username;
  let trip = {
    title: title,
    departureDate: departureDate,
    returnDate: returnDate,
    image: image,
    username: username,
    // id: id,
  };
  trips.push(trip);
  res.render("add-trip", { title: title });
});
// * localhost:3000/trips/delete - POST - Deletes a trip
router.post("/delete", (req, res) => {
  let title = req.body.title;
  trips = trips.filter((trip) => trip.title != title);
  res.redirect("/trips");
});
// Exposes all trips by creating a Web API route at /api/trips which
//     returns all of the user's trips in JSON format
router.get("/api/trips", (req, res) => {
  res.json(trips);
});
module.exports = router;
