/**
 * @param {number[]} digits
 * @return {number[]}
 */
var digits = [2,8];

var plusOne = function(digits) {
    
    // const digitNum = +digits.join('') + 1;
    // const arr = digitNum.toString().split('');
    // const result = [];
    // for(let i = 0 ; i < digits.length; i++) {
    //   console.log(digits[i]); 
    //   if
    // }
    // if (digits[0] === 0 && digits.length > 1 ) result.push(0);
    // arr.map((value) => {

    //   result.push(+value);
    // });   
    // return result;

    for(let i = digits.length - 1 ; i >= 0; i--) {
      if(++digits[i] > 9) digits[i] = 0;
      else return digits;
    }
    //console.log(digits);
    digits.unshift(1);
    return digits;
};

console.log(plusOne(digits));