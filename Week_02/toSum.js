/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  let len = nums.length;
  for(let i=0;i<len;i++){
      let k = target-nums[i];
      if(map.has(k)){
          return [map.get(k),i];
      }else{
          map.set(nums[i],i)
      }
  }
  return [];
};