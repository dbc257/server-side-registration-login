let express = require("express");
let router = express.Router();
// * localhost:3000/movies/login - POST - login user
router.get("/", (req, res) => {
  res.render("login");
});
// * localhost:3000/movies/register - POST - Add a new user
router.post("/", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let loginUser = users.find((user) => {
    return user.username == username && user.password == password;
  });
  if (loginUser) {
    if (req.session) {
      req.session.userAuth = true;
      req.session.username = username;
    }
    res.redirect("trips");
  } else {
    res.render("login", {
      messageError: "Username and/or password is incorrect.",
    });
  }
});

router.post("/signout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
