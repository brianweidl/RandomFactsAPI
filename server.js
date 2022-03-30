const express = require("express");
const routes = require("./routes/getFacts");
const bodyParser = require("body-parser");

const server = express();
server.use(bodyParser.json());

server.use("/", routes);

module.exports = server;
