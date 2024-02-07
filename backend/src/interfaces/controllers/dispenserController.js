const express = require("express");
const router = express.Router();
const MemoryDataSource = require('../persistence/memoryDataSource');
const AnalysisRepository = require('../../domain/repositories/AnalysisRepository');
const AnalysisUseCase = require('../../application/useCases/analysisUseCase');
const analysisRepository = new AnalysisRepository(new MemoryDataSource());
const analysisUseCase = new AnalysisUseCase(analysisRepository);

module.exports = () => {
	router.post("/v1/analysis", (req, res) => {
		
	});
	router.get("/v1/analysis", (req, res) => {
		
	});
	return router;
};
