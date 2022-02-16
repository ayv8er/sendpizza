const {
  checkForPizza,
  checkForNY,
  checkContactInfoExist,
} = require("./middleware");
const { orderPizza } = require("./axios");

const express = require("express");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

server.post(
  "/hook",
  checkForNY,
  checkForPizza,
  checkContactInfoExist,
  orderPizza,
  (req, res) => {
    res.status(200);
  }
);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
