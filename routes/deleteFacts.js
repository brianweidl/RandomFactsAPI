const { Router } = require("express");
const Fact = require("../models/Fact");

const router = Router();

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deletedFact = await Fact.deleteById(id);
		return res.json(deletedFact);
	} catch (e) {
		console.error(e);
		res.json({ status: 400, message: e.message });
	}
});

router.delete("/topic/:topic", async (req, res) => {
	const { topic } = req.params;
	try {
		const deletedTopic = await Fact.deleteMany({ topic });

		return res.send(`Deleted Documents: ${deletedTopic.deletedCount}`);
	} catch (e) {
		console.error(e);
		res.json({ status: 400, message: e.message });
	}
});

router.delete("/subtopic/:subtopic", async (req, res) => {
	const { subtopic } = req.params;
	try {
		const deletedSubtopic = await Fact.deleteMany({ subtopic });
		return res.send(`Deleted Documents: ${deletedSubtopic.deletedCount}`);
	} catch (e) {
		console.error(e);
		res.json({ status: 400, message: e.message });
	}
});

module.exports = router;
