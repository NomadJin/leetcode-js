/**
 * @param {number[]} nums
 * @return {boolean}
 */
var nums = [0];

var containsDuplicate = function(nums) {
  return nums.length !== (new Set([...nums])).size;
};

console.log(containsDuplicate(nums));