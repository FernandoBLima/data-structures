const HeapMin = require('../heap/heapMin');


class Node {
    constructor(element, priority) {
        this.element = element; 
        this.priority = priority;
    }
}


class PriorityHeap extends HeapMin{

    constructor() {
        super();
    }
    

  /**
   * Add item to the priority queue.
   * @param {*} value - item we're going to add to the queue.
   * @param {number} [priority] - items priority.
   * @return {PriorityQueue}
   */
  insert(value, priority = 0) {
    var newNode = new Node(value, priority);
    super.insert(newNode);
    return this;
  }


    shouldSwap(childIndex, parentIndex) {
        return this.list[childIndex].priority > this.list[parentIndex].priority
    }




}
module.exports = PriorityHeap;