/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    const visited = Array.from({ length: M.length }).fill(0);
    let res = 0,
        i = 0;
    let dfs = (i) => {
        for (let j = 0; j < M.length; j++) {
            if (i !== j && !visited[j] && M[i][j]) {
                visited[j] = 1;
                dfs(j);
            }
        }
    };
    while (i < visited.length) {
        if (!visited[i]) {
            visited[i] = 1;
            dfs(i);
            res++;
        }
        i++;
    }
    return res;
};
