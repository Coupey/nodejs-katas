* Write a program that prints one line for each number from 1 to 100
* For multiples of three print Fizz instead of the number
* For the multiples of five print Buzz instead of the number
* For numbers which are multiples of both three and five print FizzBuzz instead of the number

# Mocha tests

## Installation

Go to the root directory (where the `package.json` is located) and run:

```bash
npm install
```

## Running tests

Run the tests once:

```bash
npm test
```

Run the test and re-run them once a file changes:

```bash
npm run test:watch
```

### What's included

* Support for ES-2015 and stage-0 using Babel presets
* [Sinon JS](http://sinonjs.org/) for all stub, spy and mocking needs
* Mocha to run tests
* [Assertions using Chai]((http://chaijs.com/api/bdd)), extended with the
  [`sinon-chai` plugin](https://github.com/domenic/sinon-chai).
  * The Expect style is used by default,
  you can change to use `Should` instead, in `test/test-setup.js`,
