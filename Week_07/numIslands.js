/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    let rows = grid.length;
    if (!rows) return 0;
    let cols = grid[0].length;

    let dfs = (row, col) => {
        if (
            row < 0 ||
            col < 0 ||
            row > rows - 1 ||
            col > cols - 1 ||
            grid[row][col] == "0"
        )
            return;
        grid[row][col] = "0";

        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == [1]) {
                dfs(i, j);
                count++;
            }
        }
    }

    return count;
};
