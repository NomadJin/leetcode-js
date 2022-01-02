const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = (nums, target) => {
  const map = new Map();

  for(let i = 0 ; i < nums.length ; i++) {
    const value = nums[i];
    map.set(value, i);
  }
  let result = [];
  for(let i = 0 ; i < nums.length ; i++) {
    const complement = target - nums[i];
    console.log(complement);
    if(map.has(complement) && map.get(complement) != i){
      //console.log(map.get(complement));
      result = [i, map.get(complement)];
    }
  }
  return result;
}

console.log(twoSum(nums, target));