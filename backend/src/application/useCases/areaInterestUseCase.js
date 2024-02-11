const AreaInterest = require("../../domain/entities/AreaInterest");

class AreaInterestUseCase {
	constructor(repository) {
		this.respository = repository;
	}
	async addNewAreaInterest(areaOfInterest) {
		const areaInterest = new AreaInterest(undefined, areaOfInterest);
		const insertedId = await this.respository.addNewAreaInterest(areaInterest);
		areaInterest.id = insertedId
		return areaInterest
	}
}

module.exports = AreaInterestUseCase;
