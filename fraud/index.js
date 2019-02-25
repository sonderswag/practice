'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the activityNotifications function below.
// Compute the running median of fixed size by count sort away eo calculate the median.
// pop of old letter and add new ones
function activityNotifications(expenditure, d) {
  let count = 0;
  let even = d % 2 === 0;
  if (expenditure.length === d) {
    return 0;
  }

  // great when you have a bound range 
  const counts = new Array(200).fill(0);

  // prime the pump since no median till window is reached
  for (let i = 0 ; i < d ; i += 1) {
    counts[expenditure[i]] += 1;
  }

  const getMedian = () => {
    let sum = 0;
    let i = 0;
    let j = 0;
    // find the median if odd
    while (sum < Math.floor(d/2) + 1) {
      sum += counts[i];
      i += 1; 
    }
    // if even have to find a second number to complete it 
    if (even) {
      sum = 0;
      while (sum < Math.floor(d/2)) {
        sum += counts[j];
        j += 1;
      }
    }
 
    return even ? ((j - 1) + (i - 1)) / 2 : i -1;
  }

  for (let i = d; i < expenditure.length ; i += 1) {

    const median = getMedian(); // get median 
    counts[expenditure[i]] += 1; // add current 
    counts[expenditure[i-d]] -= 1; // pop old
    
    if (2 * median <= expenditure[i]) {
      count += 1;
    }
  }
  return count;
}


function main() {
    const ws = fs.createWriteStream('./out.txt');

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const expenditure = readLine().split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

    let result = activityNotifications(expenditure, d);

    ws.write(result + "\n");

    ws.end();
}
