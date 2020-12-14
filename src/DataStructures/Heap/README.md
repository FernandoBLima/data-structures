## Heap

Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const  lib  =  require('./data-structure');`.

#### Variables
| Variable |   Type   | Description                         |  
|    --    |    --    |    --                               |
| list     |   []     | Array of elements                   | 

#### Common functions
| Function                   | Parameters | Return    | Description                        |  
|   --                       | --         | --        |  --                                | 
| insert                     |  Number    | -         | Action to insert a value in the Heap |
| removeFromTop              |  -         | -         | Action to remove the first element in the heap              |
| mergeHeaps                 |  Heap      | -         | Should convert a key in an integer |
| heapify                    |  number    |  Number   | Action to move a node down in the tree, used to restore heap condition after deletion or replacement. |
| getParentByIndex           |  Number    |  Number   | Returns the parent node  |
| hasParentByIndex           |  Number    |  Boolean  | Check if the child node has a parent  |
| getSize                    |  -         |  Number   | Return the number of items in the heap.            |
| getLastElement             |  -         |  Number   | Action to return the last element in the Heap         |
| isEmpty                    |  -         |  Boolean  | Action to check if heap is empty    |
| peek                       |  -         |  Number   | Action to find a maximum item of a max-heap, or a minimum item of a min-heap, respectively    |
| hasLeftChildByIndex        |  Number    |  Boolean  | Action to check if the left child exists by index    |
| hasRightChildByIndex       |  Number    |  Boolean  | Action to check if the right child exists by index   |
| getRightChildValueByIndex  |  Number    |  Number   | Action to get the right child by index    |
| getLeftChildValueByIndex   |  Number    |  Number   | Action to get the left child by index  |
| getRightChildrenIndex      |  Number    |  Number   | Returns the right child index    |
| getLeftChildrenIndex       |  Number    |  Number   | Returns the left child index    |
| displayHeap                |  -         |  Array    | Return the list of items in the heap   |
| clear                      |  -         |  Array    | Clear the heap structure   |

___


The Dump HashTable can be accessed after including  `var heapMax = new  lib.HeapMax();`  or  `var heapMin = new  lib.HeapMin();` 

##### heap Max : Example

```javascript
var heapMax = new lib.HeapMax();

heapMax.insert(10)
heapMax.insert(5)
heapMax.insert(6)
heapMax.insert(4)

heapMax.removeFromTop();

console.log(heapMax) 
console.log(heapMax.hasRightChildByIndex(0)) // true
console.log(heapMax.hasLeftChildByIndex(0)) // true

console.log(heapMax.getRightChildrenIndex(0)) // 2
console.log(heapMax.getLeftChildrenIndex(0)) // 1

console.log(heapMax.getRightChildValueByIndex(0)) // 4
console.log(heapMax.getLeftChildValueByIndex(0)) // 5
```

##### heap Min : Example

```javascript
var heapMin = new lib.HeapMin();

heapMin.insert(10)
heapMin.insert(5)
heapMin.insert(6)
heapMin.insert(2)

heapMin.removeFromTop(); 

console.log(heapMin) // HeapMin { list: [ 5, 10, 6 ] }
console.log(heapMin.hasRightChildByIndex(0)) // true
console.log(heapMin.hasLeftChildByIndex(0)) // true

console.log(heapMin.getRightChildrenIndex(0)) // 2
console.log(heapMin.getLeftChildrenIndex(0)) // 1

console.log(heapMin.getRightChildValueByIndex(0)) // 6
console.log(heapMin.getLeftChildValueByIndex(0)) // 10

console.log(heapMin.displayHeap()) // [ 5, 10, 6 ]
```
____