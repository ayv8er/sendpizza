const express = require("express");
const cors = require("cors");

const server = express();
const bodyParser = require("body-parser");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

const {
  checkForBody,
  checkForNYC,
  checkContactInfoExist,
  checkForPizza,
} = require("./middleware");

const { orderPizza } = require("./axios");

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Ben's Bike Shop Pizza Delivery Webhook",
  });
});

server.post(
  "/hook",
  checkForBody,
  checkForNYC,
  checkContactInfoExist,
  checkForPizza,
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
