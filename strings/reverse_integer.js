const input = -120;

const reverseInteger = (x) => {
  const MAX_NUM = Math.pow(2, 31);
  const MIN_NUM = -Math.pow(2, 31);

  let result;
  let inputArrayReverse = x.toString().split('').reverse();

  if(input < 0) {
    inputArrayReverse.pop();
    inputArrayReverse.unshift('-');
  }

  result = Number(inputArrayReverse.join(''));

  if (result > MAX_NUM || result < MIN_NUM) {
    return 0;
  } else {
    return result;
  }
}

console.log(reverseInteger(input));