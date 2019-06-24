const Queue = require('./DataStructures/LinkedList/queue');
const Stack = require('./DataStructures/LinkedList/stack');
const LinkedList = require('./DataStructures/LinkedList/linkedList');

const HeapMin = require('./DataStructures/heap/heapMin');
const HeapMax = require('./DataStructures/heap/heapMax');


// **********************************
// *           LinkedList           *
// **********************************
// var linkedList = new LinkedList();
// linkedList.addAtHead(3) // 3
// linkedList.addAtHead(6) // 6 - 3
// linkedList.addAtHead(4) // 4 - 6 - 3
// linkedList.addAtHead(44) // 44 - 4 - 6 - 3
// linkedList.addAtHead(24) // 24 - 44 - 4 - 6 - 3
// linkedList.addAtHead(84) // 84 - 24 - 44 - 4 - 6 - 3
// linkedList.removeAtHead() // 24 - 44 - 4 - 6 - 3
// linkedList.search(4) // Number exist!
// linkedList.search(45) // Number does not exist!
// linkedList.addAtHead(1) // 1 - 24 - 44 - 4 - 6 - 3
// linkedList.addAtTail(5) // 1 - 24 - 4 - 44 - 4 - 6 - 3 - 5
// linkedList.removeAtTail() // 1 - 24 - 44 - 4 - 6 - 3
// linkedList.getAtIndex(1); // 24 Node
// linkedList.removeValue(24) // 1 - 44 - 4 - 6 - 3
// console.log(linkedList.isEmpty()) // false
// console.log(linkedList.getLenght()) // 5
// linkedList.reverse() // 3 - 6 - 4 - 44 - 1
// console.log(linkedList.head); // 3
// console.log(linkedList.tail); // 1
// console.log(linkedList); 


// ##################################
// *           Queue                *
// ##################################
// var queue = new Queue();
// queue.enqueue(4); // 4
// queue.enqueue(5); // 5 - 4
// queue.enqueue(6); // 6 - 5 - 4
// queue.dequeue(); // 6 - 5
// console.log(queue);


// ##################################
// *           Stack                *
// ##################################
// var stack = new Stack();
// stack.push(1); // 1
// stack.push(2); // 1 - 2
// stack.push(3); // 1 - 2 - 3
// stack.pop(); // 2 - 3
// console.log(stack);




// ##################################
// *           HeapMin              *
// ##################################
// var heapMin = new HeapMin();
// heapMin.build_heap([3,10,11,5,15,17, 13, 12, 14, 8, 21]); // 3, 5, 11, 10, 8, 17, 13, 12, 11, 15, 21
// heapMin.getSize() // 11
// heapMin.removeFromTop(); //5, 8, 11, 10, 15, 17, 13, 12, 14, 21
// heapMin.remove(10); // 5, 8, 11, 12, 15, 17, 13, 21, 14
// console.log(heapMin);


// ##################################
// *           HeapMax              *
// ##################################
// var heapMax = new HeapMax();
// heapMax.build_heap([3,10,11,5,15,17]); // 17, 11, 15, 3, 5, 10
// heapMax.insert(4); // 17, 11, 15, 3, 5, 10, 4 
// heapMax.removeFromTop(); // 15, 11, 10, 3, 5, 4
// heapMax.remove(11) // 15, 5, 10, 3, 4
// console.log(heapMax);


