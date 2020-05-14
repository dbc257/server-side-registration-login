let express = require("express");
let router = express.Router();

// * localhost:3000/movies/register - POST - Add a new user
router.get("/", (req, res) => {
  res.render("register");
});
// * localhost:3000/movies/register - POST - Add a new user
router.post("/", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let user = { username: username, password: password };
  users.push(user);
  console.log(users);
  res.redirect("login");
});

module.exports = router;
