/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let len = s.length;
  if (len != s.length) return false;
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')
  return t == s;
};