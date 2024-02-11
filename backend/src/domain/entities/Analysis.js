
class Analysis {
      constructor(id, areaInterest, totalPoints, centroidStdev, centroidIndex) {
            this._id = id;
            this._areaInterest = areaInterest;
            this._totalPoints = totalPoints;
            this._centroidStdev = centroidStdev;
            this._centroidIndex = centroidIndex;
      }
      get id() {
            return this._id;
      }
      set id(valor) {
            this._id = valor;
      }
      get areaInterest() {
            return this._areaInterest;
      }
      set areaInterest(valor) {
            this._areaInterest = valor;
      }
      get totalPoints() {
            return this._totalPoints;
      }
      set totalPoints(valor) {
            this._totalPoints = valor;
      }
      get centroidStdev() {
            return this._centroidStdev;
      }
      set centroidStdev(valor) {
            this._centroidStdev = valor;
      }
      get centroidIndex() {
            return this._centroidIndex;
      }
      set centroidIndex(valor) {
            this._centroidIndex = valor;
      }
}

module.exports = Analysis