const LinkedList = require('./src/DataStructures/LinkedList/linkedList');
const SinglyLinkedList = require('./src/DataStructures/LinkedList/singlyLinkedList');
const DoublyLinkedList = require('./src/DataStructures/LinkedList/doublyLinkedList');
const CircularLinkedList = require('./src/DataStructures/LinkedList/circularLinkedList');

const Queue = require('./src/DataStructures/Queue/queue');
const Stack = require('./src/DataStructures/Stack/stack');

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


const SetStructure = require('./src/DataStructures/Set/set');


module.exports = {
    Dictionary : Dictionary,
    HashTable : HashTable,
    DisjoinSet: DisjoinSet,
    LinkedList : LinkedList,
    SinglyLinkedList : SinglyLinkedList,
    CircularLinkedList: CircularLinkedList,
    DoublyLinkedList : DoublyLinkedList, 
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
    Set : SetStructure

};