const express = require("express");
const router = express.Router();

const {
  songPlaying,
  getPlayList,
  getMostPlayedList,
} = require("../controllers/playlists.controller");

router.get("/", getPlayList);
router.get("/most-played", getMostPlayedList);
router.put("/song/:id", songPlaying);

module.exports = router;
