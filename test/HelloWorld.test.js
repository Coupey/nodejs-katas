// import default from modules
const App = require("../src/HelloWorld");
let expect = require('chai').expect;


// Write ES6 mocha tests with Chai assertions
describe('my test', function() {

  let app;

  beforeEach(function() {
    app = new App();
  });

  // simple 1 roll
  it('should should confirm if size is correct', () => {
    const expectedSize = 250;
    app.testSizes();
    // expect(app.score()).to.equal(1);
  });


});
