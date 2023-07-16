const { getAllSongs } = require("../models/playlists.model");

const updateTotalPlaySong = (song_id) => {
  const song = getAllSongs().find((song) => song.id === song_id);
  if (!song) throw "song not found!";

  song.total_played += 1;
  return song;
};

const mostPlayedSongList = () => {
  return getAllSongs().sort((a, b) => b.total_played - a.total_played);
};

module.exports = {
  updateTotalPlaySong,
  mostPlayedSongList,
};
