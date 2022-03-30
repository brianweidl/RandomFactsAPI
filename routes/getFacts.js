const { Router } = require("express");
const Fact = require("../models/Fact");

const router = Router();

router.get("/facts/", async (req, res) => {
	const facts = await Fact.aggregate([{ $sample: { size: 2 } }]);

	res.json(facts);
});

module.exports = router;
