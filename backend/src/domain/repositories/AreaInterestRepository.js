class AreaInterestRepository {
      constructor(dataSource) {
            this.dataSource = dataSource;
      }
      async addNewAreaInterest(data) {
            return await this.dataSource.addNewAreaInterest(data)
      }
}

module.exports = AreaInterestRepository;
