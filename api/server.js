const express = require("express");
const lyricsRouter = require("../lyrics/lyricsRouter");

const server = express();

// logger middleware
function logger(req, res, next) {
  const timestamp = new Date(Date.now()).toLocaleString();
  console.log(`${req.method} ${req.url} ${timestamp}`);
  next();
}

server.use(logger);

server.get("/", (req, res) => {
  res
    .status(200)
    .json({ Welcome: "to the jungle", environment: process.env.NODE_ENV });
});

server.use("/api/lyrics", lyricsRouter);

module.exports = server;
