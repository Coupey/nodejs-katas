
class myApp {
  constructor() {
    this.total = 0;
  }

  addNumber(value) {
    this.total += value;
  }

  score() {
    return this.total;
  }

}

module.exports = myApp;
