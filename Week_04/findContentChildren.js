/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let index_g = 0, index_s = 0,
    len_g = g.length, len_s = s.length,
    count = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  while (index_g < len_g && index_s < len_s) {
    if (s[index_s] >= g[index_g]) {
      count++;
      index_g++;
    }
    index_s++
  }
  return count;
};