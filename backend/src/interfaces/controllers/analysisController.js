const express = require("express");
const router = express.Router();
const PostgresDbDataSource = require("../persistence/postgresDbDataSource");
const AreaInterestRepository = require("../../domain/repositories/AreaInterestRepository");
const AreaInterestUseCase = require("../../application/useCases/areaInterestUseCase");
const AnalysisRepository = require("../../domain/repositories/AnalysisRepository");
const AnalysisUseCase = require("../../application/useCases/analysisUseCase");


module.exports = () => {
	router.post("/v1/areaOfInterest", async (req, res) => {
		try {
			const { areaOfInterest } = req.body;
			const areaInterestRepository = new AreaInterestRepository(new PostgresDbDataSource());
			const areaInterestUseCase = new AreaInterestUseCase(areaInterestRepository);
			const result = await areaInterestUseCase.addNewAreaInterest(areaOfInterest);
			res.status(201).json({
				id: result.id,
				areaOfInterest: result.areaOfInterest
			});
		} catch (error) {
			res.status(500).json({
				error: error.message,
			});
		}
	});

	router.get("/v1/analysis", async (req, res) => { 
		try {
			const analysisRepository = new AnalysisRepository(new PostgresDbDataSource());
			const analysisUseCase = new AnalysisUseCase(analysisRepository);
			const result = await analysisUseCase.listAnalysis();
			const output = result.map(a => {
				return {
					id: a.id,
					areaInterest: a.areaInterest,
					totalPoints: a.totalPoints,
					centroidStdev: a.centroidStdev,
					centroidIndex: a.centroidIndex
				}
			})
			res.status(200).json(output);
		} catch (error) {
			res.status(500).json({
				error: error.message,
			});
		}
	});

	return router;
};
