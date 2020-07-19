/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0, ten = 0, len = bills.length;
  for (let i = 0; i < len; i++) {
    if (5 === bills[i]) five++
    else if (10 === bills[i]) five--, ten++;
    else if (0 < ten) ten--, five--;
    else five -= 3;

    if (0 > five) return false
  }
  return true;
};