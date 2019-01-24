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
    const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
  }

  insert(value) {
    this.heap.push(value);
    // bubble up 
    const bubbleUp = (i) => {
      const parent = parseInt((i - 1) / 2);

      // root 
      if (i < 0) {
        return;
      }
      
      // gerater then 
      if (this.heap[i] > this.heap[parent]) {
        return;
      }
      
      this.swap(i, parent);
      bubbleUp(parent);
    }
    bubbleUp(this.heap.length-1)

  }

  getMin() {
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    const bubble_down = (i) => {
      const left = this.heap[i*2 + 1];
      const right = this.heap[i*2 + 2];

      if (!left && !right) {
        return;
      }

      if (this.heap[i] < left && this.heap[i] < right) {
        return;
      }

      let swap_index;
      if (!right) {
        swap_index = i*2 + 1;
      } else {
        swap_index =  left < right ? i*2 + 1 : i*2 + 2;
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