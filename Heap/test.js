const { MinHeap} = require('./index.js');


describe('Min heap', () => {
  // add nodes 
  test('insertion', () => {
    const heap = new MinHeap(30);
    heap.insert(40);
    heap.insert(35);
    heap.insert(55);
    heap.insert(41);
    heap.insert(40);
    heap.insert(45);
    expect(heap.heap).toEqual([30,40,35,55,41,40,45]);
  })

  test('deletion', () => {
    const heap = new MinHeap(30);
    heap.insert(40);
    heap.insert(35);
    heap.insert(55);
    heap.insert(41);
    heap.insert(40);
    heap.insert(45);
    expect(heap.getMin()).toEqual(30)
    expect(heap.heap).toEqual([35, 40, 40, 55, 41, 45]);
  })
})