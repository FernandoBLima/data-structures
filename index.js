const Queue = require('./src/DataStructures/LinkedList/queue');
const Stack = require('./src/DataStructures/LinkedList/stack');
const LinkedList = require('./src/DataStructures/LinkedList/linkedList');
const SinglyLinkedList = require('./src/DataStructures/LinkedList/singlyLinkedList');

const PriorityQueue = require('./src/DataStructures/PriorityQueue/priorityQueue');
const PriorityHeap = require('./src/DataStructures/PriorityQueue/priorityHeap');

const HeapMin = require('./src/DataStructures/Heap/heapMin');
const HeapMax = require('./src/DataStructures/Heap/heapMax');

const HashTable = require('./src/DataStructures/HashTable/hashTable');

const Trie = require('./src/DataStructures/Trie/trie');

const BinaryTree = require('./src/DataStructures/Tree/binaryTree');
const AvlTree = require('./src/DataStructures/Tree/avlTrie');
const AvlTree2 = require('./src/DataStructures/Tree/avlTrie2');

const NodeTree = require('./src/DataStructures/Tree/nodeTree');

const Graph = require('./src/DataStructures/Graph/graph');
const Dictionary = require('./src/DataStructures/Dictionary/dictionary');
const DisjoinSet = require('./src/DataStructures/DisjointSet/disjointSet');


module.exports = {
    Dictionary : Dictionary,
    HashTable : HashTable,
    DisjoinSet: DisjoinSet,
    LinkedList : LinkedList,
    SinglyLinkedList : SinglyLinkedList,
    Queue : Queue,
    Stack : Stack,
    PriorityQueue: PriorityQueue,
    PriorityHeap : PriorityHeap,
    HeapMin : HeapMin, 
    HeapMax : HeapMax,
    Trie : Trie,
    BinaryTree : BinaryTree,
    NodeTree : NodeTree,
    Graph : Graph,

}