/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums = [1,2,3,4,5,6,7];
const k = 3;

function rotate(nums, k) {
  for(let i = 0 ; i < k ; i++) {
    const poped = nums.pop();
    console.log(poped);
    nums.unshift(poped);
  }
  return nums;
};

console.log(rotate(nums, k));
