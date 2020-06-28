/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cur = 0;
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    if (nums[cur] != nums[i]) {
      nums[++cur] = nums[i];
    }
  }
  return cur + 1;
};