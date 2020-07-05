/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let len = strs.length;
  let map = new Map();
  for (let i = 0; i < len; i++) {
    let str = strs[i].split('').sort().join('');
    if (!map.has(str)) {
      map.set(str, [strs[i]])
    } else {
      let tmp = map.get(str)
      tmp.push(strs[i])
      map.set(str, tmp);
    }
  }
  return [...map.values()]
};