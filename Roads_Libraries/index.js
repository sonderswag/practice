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

class Node {
    constructor(value) {
        this.data = value;
        this.children = [];
    }
}



// Complete the roadsAndLibraries function below.
function roadsAndLibraries(n, c_lib, c_road, cities) {
    if (c_road >= c_lib) {
        return n * c_lib;
    }
    const graph = {};

    // create graph;
    for (let road of cities) {
        if (!graph[road[0]]) {
            graph[road[0]] = [road[1]];
        } else {
            graph[road[0]].push(road[1]);
        }

        if (!graph[road[1]]) {
            graph[road[1]] = [road[0]];
        } else {
            graph[road[1]].push(road[0]);
        }
    }

    let groups = [];

    // now do DPS to get size and number of groups
    for (let node in graph) {
        if (graph[node] === null) {
            continue;
        }
        groups.push(DFS(node, graph));
    }
    // cities without roads 
    let sum = (n - Object.keys(graph).length) * c_lib;

    // now cost of groups 
    for (let group of groups) {
        sum += c_lib + (group - 1) * c_road;
    }

    return sum
}

// use DFS to determine the number of nodes in the group
function DFS(node, graph) {
    let count = 1;
    // visit the node 
    const children = graph[node].slice() // to copy it
    graph[node] = null;

    // get unvisited current children
    children.forEach(child => {
        if (graph[child] !== null) {
            count += DFS(child, graph);
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
