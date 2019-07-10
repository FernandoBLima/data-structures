const Queue = require('./DataStructures/LinkedList/queue');
const Stack = require('./DataStructures/LinkedList/stack');
const LinkedList = require('./DataStructures/LinkedList/linkedList');

const PriorityQueue = require('./DataStructures/PriorityQueue/priorityQueue');
const PriorityHeap = require('./DataStructures/PriorityQueue/priorityHeap');

const HeapMin = require('./DataStructures/Heap/heapMin');
const HeapMax = require('./DataStructures/Heap/heapMax');

const Map = require('./DataStructures/hashMap/map');
const HashTable = require('./DataStructures/hashMap/hashTable');

const Trie = require('./DataStructures/Trie/trie');

const BinaryTree = require('./DataStructures/Tree/binaryTree');
const AvlTree = require('./DataStructures/Tree/avlTrie');
const AvlTree2 = require('./DataStructures/Tree/avlTrie2');

const NodeTree = require('./DataStructures/Tree/nodeTree');


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
// heapMax.build_heap([1,2,3,4,5,6,7,8,9]);
// console.log(heapMax);


// ##################################
// *          Priority Queue        *
// ##################################
// var priorityQueue = new PriorityQueue();
// priorityQueue.enqueue('value 1', 1);
// priorityQueue.enqueue('value 2', 2);
// priorityQueue.enqueue('value 3', 3);
// priorityQueue.enqueue('value 4', 4);
// priorityQueue.enqueue('value 5', 5);
// priorityQueue.enqueue('value 6', 6);
// priorityQueue.enqueue('value 7', 7);
// priorityQueue.enqueue('value 8', 8);
// priorityQueue.enqueue('value 9', 9);
// priorityQueue.getFirstElement(); // { element: 'value 9', priority: 9 }
// priorityQueue.dequeue(); // removing { element: 'value 9', priority: 9 }
// console.log(priorityQueue);



// ##################################
// *          Priority Heap         *
// ##################################
// var priorityHeap = new PriorityHeap();
// priorityHeap.insert('value 1', 1);
// priorityHeap.insert('value 2', 2);
// priorityHeap.insert('value 3', 3);
// priorityHeap.insert('value 4', 4);
// priorityHeap.insert('value 5', 5);
// priorityHeap.insert('value 6', 6);
// priorityHeap.insert('value 7', 7);
// priorityHeap.insert('value 8', 8);
// priorityHeap.insert('value 9', 9);
// priorityHeap.insert('value 2', 3);
// console.log('priorityHeap', priorityHeap)



// ##################################
// *              Map               *
// ##################################
// var map = new Map();
// map.add('value 1', 1);
// map.add('value 2', 2);
// console.log(map.get(2));
// console.log(map);


// ##################################
// *            HashTable           *
// ##################################
// var hashTable = new HashTable();
// hashTable.add('valsdfgsgue ew', 'key');
// hashTable.add('value 2', 'key2');
// console.log(hashTable.get('key2'));
// console.log(hashTable);


// ##################################
// *              Trie              *
// ##################################
// var trie = new Trie();
// trie.insert('abc');
// trie.insert('abb');
// trie.insertRecursive('acd');
// trie.insertRecursive('ace');
// trie.insertRecursive('acfg');

// console.log(trie.remove('acd'))

// console.log(trie.search('abb'));
// console.log(trie.search('abb'));
// console.log(trie.suggestionWord('a'));

// console.log(trie.root.children['a'].children['c']);
// console.log(trie.root.children['a'].children['b']);




// ##################################
// *            BinaryTree          *
// ##################################
// var binaryTree = new BinaryTree();
// binaryTree.insert(23)
// binaryTree.insert(55)
// binaryTree.insert(21)
// binaryTree.insert(45)
// binaryTree.insert(14)

// console.log(binaryTree.inOrder());
// console.log(binaryTree.posOrder());
// console.log(binaryTree.preOrder());

// console.log(binaryTree.findMaximum());
// console.log(binaryTree.findMinimum());

// console.log(binaryTree.root);


// ##################################
// *            AVL TREE            *
// ##################################

var avlTree = new AvlTree2();
avlTree.insert(20);
avlTree.insert(10);
avlTree.insert(30);
avlTree.insert(5);
avlTree.insert(15);
console.log(avlTree.getLeaf());

console.log(avlTree.remove(10));

// avlTree.insert(5);
// avlTree.insert(4);
// avlTree.insert(3);
// avlTree.insert(2);
// avlTree.insert(1);

// avlTree.insert(20);
// avlTree.insert(30);
// avlTree.insert(10);
// avlTree.insert(15);
// avlTree.insert(5);
// avlTree.insert(25);
// avlTree.insert(35);


// console.log(avlTree.inOrder());
// console.log(avlTree.posOrder());
// console.log(avlTree.preOrder());

// avlTree.delete(30);

console.log(avlTree.root);
// console.log(avlTree.root.right);

