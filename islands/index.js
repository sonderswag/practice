/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0) {
    return 0;
}
  let count = 0;
  
  const xLength = grid[0].length;
  const yLength = grid.length; 
  
  
  for (let y = 0; y < yLength ; y += 1) {
      for (let x = 0; x < xLength ; x += 1) {
          if (grid[y][x] === "1") {
              DFS(x,y);
              count += 1;
          }
      }
  }
  
  function DFS(x,y) {
      if (x < 0 || y < 0 || x >= xLength || y >= yLength) {
          return;
      }
      
      if (grid[y][x] === "0") {
          return;
      }

      grid[y][x] = '0';
      // right
      DFS(x+1, y);
      // down 
      DFS(x, y+1);
      //left 
      DFS(x-1, y);
      // up
      DFS(x, y-1);
  }
  
  return count;
};

module.exports = numIslands;