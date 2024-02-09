class AnalysisRepository {
      constructor(dataSource) {
            this.dataSource = dataSource;
      }
      addNewAnalysis(data) {
            this.dataSource.addNewAnalysis(data)
      }
}

module.exports = AnalysisRepository;
