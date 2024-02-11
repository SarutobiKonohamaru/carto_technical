const CryptoJS = require('crypto-js');

module.exports = {
      createHash(input){
            const hash = CryptoJS.SHA256(input);
            const hashHex = hash.toString(CryptoJS.enc.Hex);
            return hashHex
      }
}