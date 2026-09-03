const express = require("express");
const router = express.Router();
const path = require("path");
let user = [];

// singup end point

router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  // we will check here does it contain username and pss
  if (!username || !password) {
    return res.status(400).json({
      message: "username and password are req",
    });
  }
  const existingUser = user.find((u) => {
    u.username === username;
  });
  if (existingUser) {
    return res.status(409).json({
      message: "User already exists",
    });
  }
  user.push({ username, password });
  res.status(201).json({
    message: "Signup successful",
  });
});
// singin endpoint
router.post("/signin", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message: "username and password are req",
    });
  }
  const existingUser = user.find((u) => u.username === username);
  if (!existingUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  if (existingUser.password !== password) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }
  res.status(200).json({
    message: "signin successful",
  });
});

router.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/chem.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/chem.html"));
});

// simple get req of css file
router.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/style.css"));
});
// router.get("/", (req, res) => {
//   res.send("this is home route");
//   console.log("this is home page");
// });

module.exports = router;
