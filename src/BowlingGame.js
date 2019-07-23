const ballsPerFrame = 2;

class BowlingGame {
  constructor() {
    this.runningScore = 0;
    this.frameScore = 0;
    this.frameBallNumber = 1;
    this.numberOfSpares = 0;
  }

  activateSpares(sparesToAdd) {
    this.numberOfSpares += sparesToAdd;
  };

  endFrame() {
    this.frameBallNumber = 1;
    this.frameScore = 0;
  };

  roll(pins) {
    this.runningScore += pins;
    this.frameScore += pins;

    // add bonus
    if (this.numberOfSpares > 0){
      this.runningScore += pins;
      this.numberOfSpares--;
    }

    // check for strikes and spares
    if (this.frameScore === 10) {
      if (this.frameBallNumber === 1){
        this.activateSpares(2);
      } else {
        this.activateSpares(1);
      }

      this.endFrame();
    } else {
      this.frameBallNumber++;
      if (this.frameBallNumber > ballsPerFrame){
        this.endFrame();
      }
    }

  }

  score() {
    return this.runningScore;
  }

}

module.exports = BowlingGame;
