const express = require("express");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  console.log(`this is a ${req.method} request`);
  res.json({ message: "Hello World!" });
});

server.post("/hook", (req, res) => {
  res.status(200).json({
    message: "let's set up this webhook!",
  });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
