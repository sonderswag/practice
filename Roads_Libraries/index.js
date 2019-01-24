#!/usr/bin/env node
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

// Complete the roadsAndLibraries function below.
function roadsAndLibraries(n, c_lib, c_road, cities) {
    console.log(cities);
    if (c_road >= c_lib) {
        return n * c_lib;
    }

    // remove nodes as I visit them
    let unVisited = new Array(n).fill(0).map((i, index) => index);
    // visited = visited.filter(i => i !== node);

    let groups = [];
    let sum = 0;

    // problem when there are no roads don't want to add those cities into groups
    // can only add cities with roads to the visited map and only do dfs on those cities 
    // use hash table instead of an array for Visitation map 
    while (sum < n) {
        // get the first un-visted node
        let first = 0; // index of the first unvisited node 
        unVisited.some((node, index) => {
            first = index;
            return node !== null;
        });
        const node = unVisited[first];
        const groupSize = DFS(node + 1, unVisited, cities);
        sum += groupSize;
        groups.push(groupSize);
    }

    // now calculate the cost
    let cost = 0
    for (let group of groups) {
        cost += c_lib + (group - 1) * c_road;
    }
    return cost
}

// use DFS to determine the number of nodes in the group
function DFS(node, unVisited, graph) {
    let count = 1;
    // visit the node 
    unVisited[node - 1] = null;

    // case for no children
    if (!graph[node-1]) {
        return count;
    }


    // get unvisited current children
    graph[node - 1].forEach(child => {
        if (unVisited[child - 1] !== null) {
            count += DFS(child, unVisited, graph);
        }
    })
    return count;
}


function main() {
    const ws = fs.createWriteStream('./out.txt');

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nmC_libC_road = readLine().split(' ');

        const n = parseInt(nmC_libC_road[0], 10);

        const m = parseInt(nmC_libC_road[1], 10);

        const c_lib = parseInt(nmC_libC_road[2], 10);

        const c_road = parseInt(nmC_libC_road[3], 10);

        let cities = Array(m);

        for (let i = 0; i < m; i++) {
            cities[i] = readLine().split(' ').map(citiesTemp => parseInt(citiesTemp, 10));
        }

        const result = roadsAndLibraries(n, c_lib, c_road, cities);

        ws.write(result + '\n');
    }

    ws.end();
}



// roadsAndLibraries(7, 10, 1, [[2,3], [4,5], [1], [2], [2], [7], [6]]);
// roadsAndLibraries(3, 2, 1, [[2,3], [1,3], [1,2]]);
// roadsAndLibraries(6, 2, 5, [[3,2], [1,3,4], [1,2,4], [3,4], [6], [5]])
// roadsAndLibraries(5, 6, 1, [[2,3,4], [1], [1], [1]])
