/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  while (nums.length > 0) {
    let last = nums.pop();
    let index = nums.indexOf(target - last);
    if (-1 != index) return [index, nums.length];
  }
  return [];
};