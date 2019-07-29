const lib = require('./index');



// **********************************
// *       Circular Linked List       *
// **********************************
var circularLinkedList = new lib.CircularLinkedList();

// circularLinkedList.addAtHead(3);
// circularLinkedList.addAtHead(6); // 6 - 3
// circularLinkedList.addAtHead(4); // 6 - 3
// circularLinkedList.addAtHead(44); // 44 - 4 - 6 - 3
// circularLinkedList.addAtHead(24); // 24 - 44 - 4 - 6 - 3
// circularLinkedList.addAtHead(84); // 84 - 24 - 44 - 4 - 6 - 3
// console.log('adf', circularLinkedList.search(24))
// console.log('adf', circularLinkedList.search(45))
// console.log(circularLinkedList.getAtIndex(2))
// console.log(circularLinkedList.getAtIndex(0))

// // console.log(circularLinkedList.search(243))

// console.log(circularLinkedList.removeValue(3))
// // console.log(circularLinkedList.addAtIndex(1,3))
// console.log(circularLinkedList)



// **********************************
// *       Doubly Linked List       *
// **********************************
var doublyLinkedList = new lib.DoublyLinkedList();
// doublyLinkedList.removeAtHead() // 3
// doublyLinkedList.addAtHead(3) // 3
// doublyLinkedList.addAtHead(6) // 3
// doublyLinkedList.addAtHead(4) // 3
// doublyLinkedList.addAtHead(44) // 3
// doublyLinkedList.addAtTail(33) // 3
// doublyLinkedList.addAtTail(55) // 3
// doublyLinkedList.addAtIndex(66, 5);
// doublyLinkedList.addAtIndex(77, 6)
// doublyLinkedList.addAtIndex(99, 7)

// doublyLinkedList.removeAtTail()

// console.log(doublyLinkedList.getValues())

// doublyLinkedList.removeValue(2) // 3

// doublyLinkedList.addAtIndex(66, 5)

// console.log(doublyLinkedList)


// **********************************
// *       Singly Linked List       *
// **********************************
var singlyLinkedList = new lib.SinglyLinkedList();

// singlyLinkedList.removeAtHead() // 3
// singlyLinkedList.addAtIndex(1,3) // 3
// singlyLinkedList.removeValue(1) // 3

// singlyLinkedList.addAtHead(7) // 3
// singlyLinkedList.addAtHead(6) // 3
// singlyLinkedList.addAtHead(5) // 3
// singlyLinkedList.addAtHead(4) // 3
// singlyLinkedList.addAtHead(3) // 3
// singlyLinkedList.addAtHead(2) // 3
// singlyLinkedList.addAtHead(1) // 3
// singlyLinkedList.addAtIndex(0,1) // 3

// console.log(singlyLinkedList.search(24))
// console.log(singlyLinkedList.getValues())
// console.log(singlyLinkedList.removeValue(7))
// console.log(singlyLinkedList.removeValue(0))
// console.log(singlyLinkedList.removeValue(4))
// console.log(singlyLinkedList.getValues())

// console.log(singlyLinkedList)


// singlyLinkedList.removeValue(4) // 3


// // console.log(singlyLinkedList.display())
// console.log(singlyLinkedList)

// **********************************
// *           LinkedList           *
// **********************************
var linkedList = new lib.LinkedList();
// console.log(linkedList)
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
// console.log(linkedList.getLength()) // 5
// linkedList.reverse() // 3 - 6 - 4 - 44 - 1
// console.log(linkedList.head); // 3
// console.log(linkedList.tail); // 1
// console.log(linkedList); 


// ##################################
// *           Queue                *
// ##################################
var queue = new lib.Queue();
// queue.enqueue(4); // 4
// queue.enqueue(5); // 4 - 5
// queue.enqueue(6); // 4 - 5 - 6 
// queue.dequeue(); // 5 - 6 


// ##################################
// *           Stack                *
// ##################################
var stack = new lib.Stack();
// stack.push(1); // 1
// stack.push(2); // 2 - 1 
// stack.push(3); // 3 - 2 - 1
// stack.pop(); // 2 - 1


// ##################################
// *           HeapMin              *
// ##################################
var heapMin = new lib.HeapMin();

// heapMin.insert(4)
// heapMin.insert(3)
// heapMin.insert(1)
// heapMin.removeFromTop();

// heapMin.build_heap([3,10,11,5,15,17, 13, 12, 14, 8, 21]); // 3, 5, 11, 10, 8, 17, 13, 12, 11, 15, 21
// heapMin.getSize() // 11
// heapMin.removeFromTop(); //5, 8, 11, 10, 15, 17, 13, 12, 14, 21
// heapMin.remove(10); // 5, 8, 11, 12, 15, 17, 13, 21, 14
// console.log(heapMin.displayHeap()) // 11



// ##################################
// *           HeapMax              *
// ##################################
// var heapMax = new lib.HeapMax();
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
var priorityQueue = new lib.PriorityQueue();
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
var priorityHeap = new lib.PriorityHeap();
// priorityHeap.insert('value 4', 44);
// priorityHeap.insert('value 3', 33);
// priorityHeap.insert('value 2', 22);
// priorityHeap.insert('value 5', 77);
// priorityHeap.insert('value 1', 1);

// priorityHeap.insert('value 4', 4);
// priorityHeap.insert('value 5', 5);
// priorityHeap.insert('value 6', 6);
// priorityHeap.insert('value 7', 7);
// priorityHeap.insert('value 8', 8);
// priorityHeap.insert('value 9', 9);
// priorityHeap.insert('value 2', 3);
// priorityHeap.removeFromTop();
// 
// console.log('priorityHeap', priorityHeap)




// ##################################
// *              Trie              *
// ##################################
var trie = new lib.Trie();
// trie.insert('abc');
// trie.insert('abb');
// trie.insertRecursive('acd');
// trie.insertRecursive('ace');
// trie.insertRecursive('acfg');

// // console.log(trie.remove('acd'))

// console.log(trie.search('abb'));
// console.log(trie.search('abb'));
// console.log(trie.suggestionWord('ab'));
// console.log(trie.suggestionWord(''));
// console.log(trie.suggestionWord('bes'));
// console.log(trie);

// console.log(trie.root.children['a'].children['c']);
// console.log(trie.root.children['a'].children['b']);


// ##################################
// *            BinaryTree          *
// ##################################
// var binaryTree = new lib.BinaryTree();
// binaryTree.insert(23)
// console.log(binaryTree.findParent(23));
// binaryTree.insert(55)
// binaryTree.insert(21)
// binaryTree.insert(45)
// binaryTree.insert(14)


// console.log(binaryTree.inOrder());
// console.log(binaryTree.posOrder());
// console.log(binaryTree.preOrder());

// console.log(binaryTree.delete(21));
// console.log(binaryTree.delete(545));


// console.log(binaryTree.findMaximum());
// console.log(binaryTree.findMinimum());

// console.log(binaryTree.search(55));


// console.log(binaryTree.root);


// ##################################
// *            AVL TREE            *
// ##################################

// var avlTree = new AvlTree2();
// avlTree.insert(20);
// avlTree.insert(10);
// avlTree.insert(30);
// avlTree.insert(5);
// avlTree.insert(15);
// console.log(avlTree.getLeaf());

// console.log(avlTree.remove(10));

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

// console.log(avlTree.root);
// console.log(avlTree.root.right);



// ##################################
// *               GRAPH            *
// ##################################
var graph = new lib.Graph();
// graph.addVertex(0);
// graph.addVertex(1);
// graph.addVertex(2);
// graph.addVertex(3);
// graph.addVertex(4);
// graph.addVertex(5);

// graph.addEdgeUndirected(0,1);
// graph.addEdgeUndirected(0,2);
// graph.addEdgeUndirected(1,3);
// graph.addEdgeUndirected(1,4);
// graph.addEdgeUndirected(2,4);

// graph.addEdgeDirected(5,4);
// console.log(graph.isAdjacent(5, 4))
// console.log(graph.isAdjacent(4, 5))

// graph.toString();
// // console.log(graph.isAdjacent(0, 2))
// // console.log(graph.isAdjacent(0, 5))
// // console.log(graph.containsVertex(0))
// // console.log(graph.containsVertex(56))
// console.log(graph.getNeighbors(1))
// console.log(graph.getNeighbors(56))
// // console.log(graph.getVertex())
// console.log('DFS', graph.depthFirstSearch())
// console.log('BFS', graph.breadthFirstSearch())
// console.log(graph.getNumEdges())
// console.log(graph.getVertex())

// console.log(graph.countPaths(0, 4))
// console.log(graph.getPath(0, 4))
// console.log(graph)



// ##################################
// *           Disjoint Set         *
// ##################################
var disjoinSet = new lib.DisjoinSet();
disjoinSet.init(5);
disjoinSet.union(0,1);
disjoinSet.union(2,3);
disjoinSet.union(3,4);
disjoinSet.union(1,4);

console.log(disjoinSet.extractSets());
console.log('pppppp', disjoinSet.find(4));

// console.log(disjoinSet.getChildrenByItem(0));
// console.log('dddd', disjoinSet.findRoot(4));
// console.log(disjoinSet.getSizeSet(3));
// console.log(disjoinSet.isConnected(0,1));
console.log(disjoinSet.list);


// ##################################
// *           Dictionary           *
// ##################################
var dictionary = new lib.Dictionary();
// dictionary.setItem('key 1', 1);
// dictionary.setItem('key 2', 2);
// console.log(dictionary.deleteItem('key 2'));
// dictionary.setItem('key 6', 6);
// dictionary.setItem('key 5', 5);
// dictionary.setItem('key 4', 4);
// dictionary.setItem('key 3', 3);

// console.log(dictionary.hasItem('key 1'));
// console.log(dictionary.getItem('key 1'));
// console.log(dictionary.getValues());
// console.log(dictionary.getKeys());
// console.log(dictionary.sort());
// console.log(dictionary.getlist());


// ##################################
// *            HashTable           *
// ##################################
var hashTable = new lib.HashTable();
// hashTable.insert('valsdfgsgue ew', 'key');
// hashTable.insert('value 2', 'key2');
// console.log(hashTable.get('key2'));
// console.log(hashTable);