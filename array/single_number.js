// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

var nums = [4,1,2,1,2];

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // const set = new Set([...nums]);
    // for(let i=0 ; i < nums.length ; i++){
    //   console.log(nums[i]);
    //   for(let j=i+1 ; j < nums.length - i; j++) {
    //     console.log(nums[i], nums[j]);
    //     if(nums[i] === nums[j]) {
    //       set.delete(nums[i]);
    //     }
    //     console.log(set);
    //   }
    // }
    // return [...set][0];

    // return nums.reduce((prev, curr) => prev ^ curr);

    //Clean js sol
    const map = {};
    for (let n of nums) {
      // console.log(n);
      // console.log('map[n]', map[n]);
      // console.log('map', map);
      if (map[n] == null) map[n] = 0;
      // console.log('map[n]2', map[n]);
      map[n]++;
      // console.log('map[n]3', map[n]);
    }

    console.log(map);
    for(let n in map) {
      console.log('n', n);
      console.log('map[n]',map[n]);
      if(map[n] === 1) return Number(n);
    }
};

console.log(singleNumber(nums));