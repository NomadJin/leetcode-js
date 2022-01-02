/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nums1 = [1,2,2,1], nums2 = [2,2];

var intersect = function(nums1, nums2) {
  const map = new Map();

  for (let n of nums1) {
    if(map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  const result = [];

  for (let n of nums2) {
    if(map.has(n) && map.get(n) > 0) {
      result.push(n);
      map.set(n, map.get(n) - 1);
    }
  }

  console.log(map);
  return result;
};

console.log(intersect(nums1, nums2));