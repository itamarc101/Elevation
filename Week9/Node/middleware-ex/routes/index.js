const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome!",
    requestCount: req.requestCount,
  });
});

// GET /about
router.get("/about", (req, res) => {
  res.json({
    message: "About this project",
    requestCount: req.requestCount,
  });
});

module.exports = router;
