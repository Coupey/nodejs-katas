// import default from modules
const App = require("../src/fizzbuzz");
let expect = require('chai').expect;


// Write ES6 mocha tests with Chai assertions
describe('fizz buzz', function() {

  let app;

  beforeEach(function() {
    app = new App();
  });


  it('should print numbers from 1 to 18', () => {
    const expectedResult = [1, 2, 'fizz', 4, 'buzz', 'fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz',16,17,'fizz'];
    const result = app.fizzBuzz(18);

    expect(result).to.deep.equal(expectedResult);
  });

});
