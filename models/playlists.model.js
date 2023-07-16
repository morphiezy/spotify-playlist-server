const playlists = [
  {
    id: "1",
    title: "Safe and Sound",
    artist: "Capital Cities",
    url: "https://open.spotify.com/track/6Z8R6UsFuGXGtiIxiD8ISb?si=7d9c4cbb870c4feb",
    total_played: 3143500,
  },
  {
    id: "2",
    title: "Take Me to Church",
    artist: "Hozier",
    url: "https://open.spotify.com/track/3dYD57lRAUcMHufyqn9GcI?si=2e40108a82d64038",
    total_played: 8249542,
  },
  {
    id: "3",
    title: "Bad Liar",
    artist: "Imagine Dragon",
    url: "https://open.spotify.com/track/2RSHsoi04658QL5xgQVov3?si=5f764cca4c514bdb",
    total_played: 1241568315,
  },
  {
    id: "4",
    title: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    url: "https://open.spotify.com/track/2qxmye6gAegTMjLKEBoR3d?si=950e1ce64b904187",
    total_played: 78249542,
  },
];

const getAllSongs = () => {
  return playlists;
};

module.exports = {
  getAllSongs,
};
