const { Router } = require("express");
const Fact = require("../models/Fact");

const router = Router();

router.get("/", async (req, res) => {
	if (!Object.keys(req.query).length) {
		try {
			const fact = await Fact.aggregate([
				{ $sample: { size: 1 } },
				{
					$project: {
						_id: 0,
						__v: 0,
					},
				},
			]);
			return res.json(fact);
		} catch (e) {
			console.error(e);
			res.json({ status: 400, message: e.message });
		}
	}
	let { count } = req.query;
	count = parseInt(count);

	if (!count || count < 1) {
		return res.status(400).send("Count must be an integer greater than 0");
	}
	try {
		const facts = await Fact.aggregate([
			{ $sample: { size: count } },
			{
				$project: {
					_id: 0,
					__v: 0,
				},
			},
		]);
		return res.json(facts);
	} catch (e) {
		console.error(e);
		res.json({ status: 400, message: e.message });
	}
});

router.get("/topic/:topic", async (req, res) => {
	const { topic } = req.params;
	if (!Object.keys(req.query).length) {
		try {
			const fact = await Fact.aggregate([
				{
					$match: { topic: topic },
				},
				{
					$project: {
						_id: 0,
						__v: 0,
					},
				},
			]);
			return res.json(fact);
		} catch (e) {
			console.error(e);
			res.json({ status: 400, message: e.message });
		}
	}
	let { count } = req.query;
	count = parseInt(count);
	if (!count || count < 1) {
		return res.status(400).send("Count must be an integer greater than 0");
	}
	try {
		const facts = await Fact.aggregate([
			{
				$match: { topic: topic },
			},
			{ $sample: { size: count } },
			{
				$project: {
					_id: 0,
					__v: 0,
				},
			},
		]);

		res.json(facts);
	} catch (e) {
		console.error(e);
		res.json({ status: 400, message: e.message });
	}
});

router.get("/subtopic/:subtopic", async (req, res) => {
	const { subTopic } = req.params;
	if (!Object.keys(req.query).length) {
		try {
			const fact = await Fact.aggregate([
				{
					$match: { subTopic: subTopic },
				},
				{
					$project: {
						_id: 0,
						__v: 0,
					},
				},
			]);
			return res.json(fact);
		} catch (e) {
			console.error(e);
			res.json({ status: 400, message: e.message });
		}
	}
	let { count } = req.query;
	count = parseInt(count);
	if (!count || count < 1) {
		return res.status(400).send("Count must be an integer greater than 0");
	}
	try {
		const facts = await Fact.aggregate([
			{
				$match: { subTopic: subTopic },
			},
			{ $sample: { size: count } },
			{
				$project: {
					_id: 0,
					__v: 0,
				},
			},
		]);

		res.json(facts);
	} catch (e) {
		console.error(e);
		res.json({ status: 400, message: e.message });
	}
});

module.exports = router;
