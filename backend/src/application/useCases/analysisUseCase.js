const Analysis = require("../../domain/entities/Analysis");
const Result = require("../../domain/entities/Result")
const globals = require("../../globals")
const utils = require("../../utils")

class AnalysisUseCase {
	constructor(repository) {
		this.respository = repository;
	}

	async addNewAnalysis(areaOfInterest) {
		const analysis = new Analysis(undefined, areaOfInterest);
		return await this.respository.addNewAnalysis(analysis);
	}

}

module.exports = AnalysisUseCase;
