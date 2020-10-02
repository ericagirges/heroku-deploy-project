const express = require("express");
const Lyrics = require("../data/lyricsData");

const router = express.Router();

// GET all Lyrics data
router.get("/", (req, res) => {
  if (Lyrics) {
    res.status(200).json({ data: Lyrics });
  } else {
    res.status(500).json({ errorMessage: "Unable to retrieve lyrics" });
  }
});

module.exports = router;
