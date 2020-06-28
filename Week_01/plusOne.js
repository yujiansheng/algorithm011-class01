/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let addone = 1,
    len = digits.length - 1;
  while (len >= 0) {
    let val = digits[len] + addone;
    digits[len] = val % 10;
    addone = parseInt(val / 10);
    len--;
  }
  return addone ? [1, ...digits] : digits;
};