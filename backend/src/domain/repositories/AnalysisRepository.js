class AnalysisRepository {
      constructor(dataSource) {
            this.dataSource = dataSource;
      }
      async listAnalysis() {
            const results = await this.dataSource.listAnalysis();
            return results
      }
}

module.exports = AnalysisRepository;
