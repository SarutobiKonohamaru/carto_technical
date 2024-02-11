

class AreaInterest {
      constructor(id, areaOfInterest) {
            this._id = id
            this._areaOfInterest = areaOfInterest
      }
      get id() {
            return this._id;
      }
      set id(valor) {
            this._id = valor;
      }
      get areaOfInterest() {
            return this._areaOfInterest;
      }
      set areaOfInterest(valor) {
            this._areaOfInterest = valor;
      }
}

module.exports = AreaInterest;
