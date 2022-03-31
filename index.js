const server = require("./server");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
require("dotenv/config");
const { DB_CONNECTION } = process.env;

mongoose.connect(DB_CONNECTION, () => {
	console.log("connected");
	server.listen(PORT, () => console.log("listening"));
});
