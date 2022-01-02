/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nums = [0,1,0,3,12];

var moveZeroes = function(nums) {
    let result;
    for(let i = nums.length; i >= 0 ; i--) {
      // console.log('i:', i, ' nums[i]:', nums[i])
      // splice() 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
      
      if(nums[i] === 0) {
        result = nums.splice(i, 1);
        nums.push(0);
      }
    }
    return nums;
};

console.log(moveZeroes(nums));