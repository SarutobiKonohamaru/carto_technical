const express = require("express");
const router = express.Router();
const PostgresDbDataSource = require("../persistence/postgresDbDataSource");
const AreaInterestRepository = require("../../domain/repositories/AreaInterestRepository");
const AreaInterestUseCase = require("../../application/useCases/areaInterestUseCase");
const areaInterestRepository = new AreaInterestRepository(new PostgresDbDataSource());
const areaInterestUseCase = new AreaInterestUseCase(areaInterestRepository);

module.exports = () => {
	router.post("/v1/areaOfInterest", async (req, res) => {
		try {
			const { areaOfInterest } = req.body;
			const id = await areaInterestUseCase.addNewAreaInterest(areaOfInterest);
			res.status(201).json({
				id: id
			});
		} catch (error) {
			res.status(500).json({
				error: error.message,
			});
		}
	});

	router.get("/v1/analysis", (req, res) => { 

	});

	return router;
};
