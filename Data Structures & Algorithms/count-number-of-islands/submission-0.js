class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let count = 0; 

        const bfs = (r, c) => {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] == "0"){
                return;
            }
            grid[r][c] = "0"; 
            bfs(r+1, c);
            bfs(r-1, c);
            bfs(r, c+1);
            bfs(r, c-1);
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] == "1"){
                    bfs(r, c);
                    count += 1;
                }
            }
        }

        return count;
    }
}
