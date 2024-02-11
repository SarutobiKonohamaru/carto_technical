const AreaInterest = require("../../domain/entities/AreaInterest");

class AreaInterestUseCase {
	constructor(repository) {
		this.respository = repository;
	}

	async addNewAreaInterest(areaOfInterest) {
		const analysis = new AreaInterest(undefined, areaOfInterest);
		return await this.respository.addNewAreaInterest(analysis);
	}

}

module.exports = AreaInterestUseCase;
