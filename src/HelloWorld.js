
class myApp {
  constructor() {
    this.total = 0;
    this.wardrobeSizes = [0,50,75,100,120];

    this.targetSize = 250;

    this.correctCombinations = [];

  }

  // as 5*50 = 250, we know that 5 items is the maximum we can have
  // so, let's try every combination of object in an array from size 1 to 5 items
  testSizes() {

    let combination = [0,0,0,0,0];

    let combinationsTried = 0;

      // try each combination for position 1
      for (let i = 0; i < this.wardrobeSizes.length; i++){

        for (let j = 0; j < this.wardrobeSizes.length; j++) {

          for (let k = 0; k < this.wardrobeSizes.length; k++) {

            for (let l = 0; l < this.wardrobeSizes.length; l++) {

              for (let m = 0; m < this.wardrobeSizes.length; m++) {

                combination[0] = this.wardrobeSizes[i];
                combination[1] = this.wardrobeSizes[j];
                combination[2] = this.wardrobeSizes[k];
                combination[3] = this.wardrobeSizes[l];
                combination[4] = this.wardrobeSizes[m];

                this.checkCombination(combination);
                combinationsTried++;
              }
            }
          }
        }
      }

    console.log('combinations tried: ' + combinationsTried);

    this.correctCombinations = this.uniq((this.correctCombinations));
    console.log(this.correctCombinations);
  }

  uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
      return !pos || item.toString() !== ary[pos - 1].toString();
    })
  }

  checkCombination(numberArray){
    let total = 0;
    for (let i=0; i < numberArray.length; i++){
      total += numberArray[i];
    }

    if (total === this.targetSize){
     //console.log('this combination works:');
      numberArray.sort(function(a, b){return a - b});
     //console.log(numberArray);

     this.correctCombinations.push(numberArray.slice());
    }

  }

  score() {
    return this.total;
  }

}

module.exports = myApp;
