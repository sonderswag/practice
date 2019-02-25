// I don't appear to even use this class. 
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class MinHeap {
	constructor(value) {
    this.heap = [] ;
    if (value) this.heap.push(value);
	}

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }


  // you push a value into the bottom of a heap
  // then you bubble it up 
  insert(value) {
    this.heap.push(value);
    // bubble up 
    const bubbleUp = (i) => {
      const parent = parseInt((i - 1) / 2);

      // root the index is at the front. 
      if (i < 0) {
        return;
      }
      
      // greater than 
      if (this.heap[i] > this.heap[parent]) {
        return;
      }
      
      // therefore less then. 
      this.swap(i, parent);
      bubbleUp(parent); // call stack will grow potentially the depth of the tree. 
    }
    bubbleUp(this.heap.length-1) // start at the one we just added.

  }


  // this pops the min off the top.
  // first swap the min with the end. 
  // pop it 
  // then bubble down the top 
  getMin() {
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    const bubble_down = (i) => {
      const left = this.heap[i*2 + 1]; // get left 
      const right = this.heap[i*2 + 2]; // get right

      // if both are null then return meaning that we are at the end. 
      if (!left && !right) {
        return;
      }

      // if it is less then children then stay put 
      if (this.heap[i] < left && this.heap[i] < right) {
        return;
      }

      // know it is greater than one of its children
      let swap_index;
      if (!right) {
        swap_index = i*2 + 1; // get left since there is no right
      } else {
        swap_index =  left < right ? i*2 + 1 : i*2 + 2; // if both exists grab the smaller of the 2 
      }

      this.swap(i, swap_index);
      bubble_down(swap_index);
    }
    bubble_down(0);
    return min;
  }
}



module.exports = {
  Node, 
  MinHeap,
}