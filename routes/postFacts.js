const { Router } = require("express");
const Fact = require("../models/Fact");

const router = Router();

router.post("/", async (req, res) => {
	const facts = req.body;
	if (facts.length) {
		try {
			const createdFacts = await Fact.insertMany(facts);
			return res.json(createdFacts);
		} catch (e) {
			console.error(e);
			res.json({ status: 400, message: e.message });
		}
	}
	try {
		const createdFacts = await Fact.create(facts);
		res.json(createdFacts);
	} catch (e) {
		console.error(e);
		res.json({ status: 400, message: e.message });
	}
});

module.exports = router;
