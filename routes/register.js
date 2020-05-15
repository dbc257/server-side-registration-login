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
  // check is username has already been taken
  let persistedUser = users.find((u) => u.username == user.username);
  if (persistedUser) {
    res.render("register", { message: "Username is already registered." });
  } else {
    users.push(user);
    res.redirect("login");
  }
});

module.exports = router;
