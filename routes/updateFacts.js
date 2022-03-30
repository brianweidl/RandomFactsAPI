const { Router } = require("express");
const Fact = require("../models/Fact");

const router = Router();

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { description, topic, subtopic } = req.body;
	try {
		const updatedFact = await Fact.updateOne(
			{ _id: id },
			{ description, topic, subtopic }
		);
		res.json(updatedFact);
	} catch (e) {
		console.error(e);
		res.json({ status: 400, message: e.message });
	}
});

module.exports = router;
