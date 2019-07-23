
class myApp {
  constructor() {
    this.total = 0;
  }

  fizzBuzz(value) {
    let accumulator = [];

    for (let i = 1; i <= value; i++) {
      if (i % 3 === 0 && i % 5 === 0){  // nb could also do i % 15 but this is more in keeping with the requirements
        accumulator.push('fizzbuzz');
      } else if (i % 3 === 0) {
        accumulator.push('fizz');
      } else if (i % 5 === 0) {
        accumulator.push('buzz');
      } else {
        accumulator.push(i);
      }
    }

    console.log(accumulator);
    return accumulator;
  }

}

module.exports = myApp;
