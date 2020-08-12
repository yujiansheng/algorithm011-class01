/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ret = [];
    let dfs = (str, left, right) => {
        if (left == n && right == n) {
            return ret.push(str);
        }
        if (left < n) dfs(str + "(", left + 1, right);
        if (right < left) dfs(str + ")", left, right + 1);
    };
    dfs("", 0, 0);
    return ret;
};
