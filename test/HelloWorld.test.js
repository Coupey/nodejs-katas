// import default from modules
let BowlingGame = require("../src/BowlingGame");
let expect = require('chai').expect;

describe('Bowling game', function() {

  let game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  // simple 1 roll
  it('should return a score of 0 when roll with no pins hit', () => {
    game.roll(0);
    expect(game.score()).to.equal(0);
  });


  // simple 1 roll
  it('should return a score of 5 when 5 pins hit', () => {
    game.roll(5);
    expect(game.score()).to.equal(5);
  });

  // 2 rolls
  it('should return correct score from 2 rolls', () => {
    game.roll(5);
    game.roll(2);
    expect(game.score()).to.equal(7);
  });

  // 3 rolls - no spare
  it('should return correct score from 3 normal rolls', () => {
    game.roll(5);
    game.roll(2);
    game.roll(2);
    expect(game.score()).to.equal(9);
  });


  // 3 rolls - there's a spare
  it('should return correct score from 3 rolls where first 2 are a spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(5);
    expect(game.score()).to.equal(20);
  });

  // 4 rolls - there's a strike
  it('should return correct score from 4 rolls where first roll is a strike', () => {
    game.roll(10);
    game.roll(3);
    game.roll(5);
    game.roll(5);
    expect(game.score()).to.equal(31);
  });


});
