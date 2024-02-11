const express = require("express");
const router = express.Router();
const PostgresDbDataSource = require("../persistence/postgresDbDataSource");
const AnalysisRepository = require("../../domain/repositories/AnalysisRepository");
const AnalysisUseCase = require("../../application/useCases/analysisUseCase");
const analysisRepository = new AnalysisRepository(new PostgresDbDataSource());
const analysisUseCase = new AnalysisUseCase(analysisRepository);

module.exports = () => {
	router.post("/v1/analysis", async (req, res) => {
		try {
			const { areaOfInterest } = req.body;
			const id = await analysisUseCase.addNewAnalysis(areaOfInterest);
			res.status(201).json({
				id: id
			});
		} catch (error) {
			res.status(500).json({
				error: error.message,
			});
		}
	});

	router.get("/v1/results", (req, res) => { 
		
	});

	return router;
};
