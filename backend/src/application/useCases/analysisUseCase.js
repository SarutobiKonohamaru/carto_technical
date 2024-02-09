const Analysis = require("../../domain/entities/Analysis");
const Result = require("../../domain/entities/Result")
const globals = require("../../globals")
const utils = require("../../utils")

class AnalysisUseCase {
	constructor(repository) {
		this.respository = repository;
	}

	addNewAnalysis(areaOfInterest) {
		const analysis = new Analysis(undefined, areaOfInterest);
		this.respository.addNewAnalysis(analysis);
		return id;
	}

}

module.exports = AnalysisUseCase;
