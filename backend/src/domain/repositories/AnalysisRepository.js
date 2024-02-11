class AnalysisRepository {
      constructor(dataSource) {
            this.dataSource = dataSource;
      }
      async addNewAnalysis(data) {
            return await this.dataSource.addNewAnalysis(data)
      }
}

module.exports = AnalysisRepository;
