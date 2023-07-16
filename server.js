const express = require("express");
const app = express();
const PORT = 3000;

const playlistRoute = require("./routes/playlists.route");

app.use(express.json());
app.use("/playlist", playlistRoute);
app.all("*", (req, res) => {
  res.status(404);
  res.send({ message: "404 - Not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
