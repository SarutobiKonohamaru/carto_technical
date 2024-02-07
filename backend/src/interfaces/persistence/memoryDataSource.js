class MemoryDataSource {
      constructor() {
            this.dispensers = []
      }
      createDispenser(dispenser) {
            this.dispensers.push(dispenser);
      }
      findDispenserById(id) {
            return this.dispensers.find(a => a.id === id)
      }
}

module.exports = MemoryDataSource