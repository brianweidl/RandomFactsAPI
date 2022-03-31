const express = require("express");
const getRoutes = require("./routes/getFacts");
const postRoutes = require("./routes/postFacts");
const deleteRoutes = require("./routes/deleteFacts");
const updateRoutes = require("./routes/updateFacts");

const bodyParser = require("body-parser");

const server = express();
server.use(bodyParser.json());

server.get("/", (req, res) => {
	res.send("Welcome to the Random Facts API");
});
server.use("/get", getRoutes);
server.use("/post", postRoutes);
server.use("/update", updateRoutes);
server.use("/delete", deleteRoutes);

module.exports = server;
