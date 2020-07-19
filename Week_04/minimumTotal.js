/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let len = triangle.length;
  for (let i = len - 2; i >= 0; i--) {
    let len_j = triangle[i].length;
    for (let j = 0; j < len_j; j++) {
      triangle[i][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j]
    }
  }
  return triangle[0][0]
};