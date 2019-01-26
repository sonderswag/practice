'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the findShortest function below.

/*
 * For the unweighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] to <name>To[i].
 *
 */
function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
  const bfs = (node) => {
    const visited = new Array(graphNodes).fill(false);
    const queue = [node];
    let count = 0;
    while(queue.length) {
      let cNode = queue.shift();
      visited[cNode] = true;
      if (count !== 0 && ids[cNode - 1] === val) {
          return {count, start: node, end: cNode};
      }
      for (let child of graph[cNode]) {
        if (!visited[child]) {
          queue.push(child);
        }
      }
      count += 1; 
    }
    return -1; // should never be reached in this case
  }
      
  // get the indexes of the nodes with the right color 
  let ourColorNodes = [];
  ids.forEach((item, index) => {
    if(item === val) {
      ourColorNodes.push(index + 1);
    }
  });

  // check edge case
  if (ourColorNodes.length <= 1) {
      return -1;
  }

  // create the graph 
  const graph = {};
    for (let i = 0; i < graphFrom.length ; i += 1) {
      let from = graphFrom[i];
      let to = graphTo[i];
      if (!graph[from]) {
        graph[from] = [];
      } 
      if (!graph[to]) {
        graph[to] = [];
      } 
      graph[to].push(from)
      graph[from].push(to);
  }

  
  let shortest = Infinity;
  while (ourColorNodes.length) {
    let rts = bfs(ourColorNodes.pop())
    if (rts.count === 1) {
        return 1; // could never bet this
    }
    shortest = shortest > rts.count ? rts.count : shortest;
    // remove the end node 
    ourColorNodes = ourColorNodes.filter((item) => item !== rts.end);
  }

  return shortest; 
}
  

function main() {
    const ws = fs.createWriteStream('out.txt');

    const graphNodesEdges = readLine().split(' ');
    const graphNodes = parseInt(graphNodesEdges[0], 10);
    const graphEdges = parseInt(graphNodesEdges[1], 10);

    let graphFrom = [];
    let graphTo = [];

    for (let i = 0; i < graphEdges; i++) {
        const graphFromTo = readLine().split(' ');

        graphFrom.push(parseInt(graphFromTo[0], 10));
        graphTo.push(parseInt(graphFromTo[1], 10));
    }

    const ids = readLine().split(' ').map(idsTemp => parseInt(idsTemp, 10));

    const val = parseInt(readLine(), 10);

    const ans = findShortest(graphNodes, graphFrom, graphTo, ids, val);

    ws.write(ans + '\n');

    ws.end();
}
