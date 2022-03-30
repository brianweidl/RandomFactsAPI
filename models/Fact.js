const mongoose = require("mongoose");

const factSchema = new mongoose.Schema({
	description: { type: String, required: true },
	topic: { type: String, required: true },
	subtopic: { type: String, required: true },
});

factSchema.statics.deleteById = function (_id) {
	return this.deleteOne({ _id: _id });
};

module.exports = mongoose.model("Fact", factSchema);
