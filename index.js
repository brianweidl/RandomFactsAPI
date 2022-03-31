const server = require("./server");
const mongoose = require("mongoose");

require("dotenv/config");
const PORT = process.env.PORT || 4000;
const DB_CONNECTION =
	process.env.DB_CONNECTION || "mongodb://localhost/RandomFacts";
const HOST = process.env.HOST || "0.0.0.0";

mongoose.connect(DB_CONNECTION, () => {
	console.log("connected");
	server.listen(PORT, HOST, () => console.log("listening"));
});

//mongodb://localhost/RandomFacts
