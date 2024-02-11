const Analysis = require("../../domain/entities/Analysis");

class AnalysisUseCase {
      constructor(repository) {
		this.respository = repository;
	}
      async listAnalysis() {
            const results = await this.respository.listAnalysis();
            return results.map(a => {
                  return new Analysis(a.id, a.area_of_interest, a.total_points, a.centroid_stdev, a.centroid_index)
            })
      }
}

module.exports = AnalysisUseCase;