/*Assignment - Trips (Registration and Login)
You are in charge of creating a website for tracking trips. 
    You will use server side pages using Mustache or any other 
    server side template framework for this assignment. 
Your app should allow users to do the following: 
- Ability to add a new trip. A new trip consists of title, image, date 
    of departure, date of return 
- Ability to view all the trips (A sample screenshot is shown below) 
- Ability to delete a trip 
- Add the ability to allow user to register for the website 
- Allow the user to login to the website 
- Allow the user to signout from the website 
- Allow the user to only see their trips after they login successfully
* Your app should work on mobile devices 
* Google Trips is a good app for inspiration and ideas! (Available on the App Store)  
*/

const express = require("express");
const app = express();
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const tripsRouter = require("./routes/trips");
const mustacheExpress = require("mustache-express");
var session = require("express-session");
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");
app.use(express.urlencoded());
// session
app.use(
  session({
    secret: "Big Head",
    resave: false,
    saveUninitialized: true,
  })
);
// authentication function
function auth(req, res, next) {
  if (req.session) {
    if (req.session.userAuth) {
      next();
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
}
global.users = [];
global.trips = [];
// localhost:3000/trips/styles.css
app.use("/trips", express.static("css"));
// Routes
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/trips", auth, tripsRouter);

app.listen(3000, () => {
  console.log("Server has started");
});
