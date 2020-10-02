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

router.get("/:id", (req, res) => {
  const id = req.params.id;

  try {
    // retrieve the lyrics from the "database" - try / catch will catch this if there's a failure
    const found = Lyrics.find((lyrics) => lyrics.id === id);

    if (found) {
      res.status(200).json({ data: found });
      return;
    }
    res.status(404).json({ message: "Could not find the request lyrics." });
  } catch (e) {
    res
      .status(500)
      .json({ errorMessage: "The lyrics could not be retrieved." });
  }
});

module.exports = router;
