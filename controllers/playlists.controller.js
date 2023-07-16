const { getAllSongs } = require("../models/playlists.model");

const {
  responseSuccess,
  responseFailed,
} = require("../utils/response-handler");

const {
  updateTotalPlaySong,
  mostPlayedSongList,
} = require("../services/playlists.service");

const songPlaying = (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw "failed to play song";

    const updatedSong = updateTotalPlaySong(id);
    responseSuccess(res, 200, { title: updatedSong.title, status: "playing" });
  } catch (error) {
    responseFailed(res, 400, error);
  }
};

const getPlayList = (req, res) => {
    responseSuccess(res, 200, getAllSongs());
};

const getMostPlayedList = (req, res) => {
  responseSuccess(res, 200, mostPlayedSongList());
};

module.exports = {
  songPlaying,
  getPlayList,
  getMostPlayedList,
};
