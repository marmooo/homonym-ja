const fs = require("fs");
const readline = require("readline");

class HomonymJa {
  static async load() {
    const dict = {};
    const fileReader = fs.createReadStream(__dirname + "/homonym.csv");
    const rl = readline.createInterface({ input: fileReader });
    for await (const line of rl) {
      const arr = line.split(",");
      const word = arr[0];
      const yomis = arr.slice(1);
      dict[word] = yomis;
    }
    const homonymJa = new HomonymJa();
    homonymJa.dict = dict;
    return homonymJa;
  }

  constructor() {
    this.dict = {};
  }

  get(word) {
    return this.dict[word];
  }
}

module.exports = HomonymJa;
