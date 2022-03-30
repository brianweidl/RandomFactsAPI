const mongoose = require("mongoose");

const factSchema = new mongoose.Schema({
	description: String,
	topic: String,
	subtopic: String,
});

module.exports = mongoose.model("Fact", factSchema);
