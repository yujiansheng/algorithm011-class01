/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = []
  let backTrack = function (arr, cur) {
    let len = arr.length
    if (len == cur) {
      res.push(arr.map(v => {
        return `${".".repeat(v)}Q${".".repeat(n - v - 1)}`
      }))
      return
    }
    for (let i = 0; i < len; i++) {
      arr[cur] = i //假设 第cur行，第i个位置可以摆放
      let flag = true
      for (let j = 0; j < cur; j++) {
        let abs = i - arr[j];
        if (arr[j] == i || (abs > 0 ? abs : -abs) == cur - j) {
          flag = false
          break
        }
      }
      if (flag) { //满足条件 ，保存路径，筛选下一行
        backTrack(arr.slice(), cur + 1)
      }
    }
  }
  backTrack(new Array(n), 0) //从第0行开始
  return res
};