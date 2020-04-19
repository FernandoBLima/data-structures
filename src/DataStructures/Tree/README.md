## Tree

Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const  lib  =  require('./data-structure');`.

Can be accessed after including  `var tree = new  lib.Tree();` 

#### Variables
| Variable |   Type     | Description                         |  
|    --    |    --      |    --                               |
| root     | {NodeTree} | Get the root element                | 
| length   | {Number}   | Get the size list                   |

#### Functions

| Function   | Parameters          | Return    | Description                        |  
|   --       |  --                 | --        |  --                                | 
| add        | {Number},{Number}   | {Number}  | Function to insert a new node      |
| remove     | {number}            | -         | Action to remove a node with a specific key.  |
| getSize    | {number}            | { Number} | Returns the size of the tree       |
| isEmpty    | -                   | {boolean} | Checks whether the list is empty or not  |


##### Example

```javascript
var tree = new lib.Tree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4, 3);
tree.add(5, 3);
tree.add(6, 3);
```
____


## Binary Search Tree

Can be accessed after including  `var binarySearchTree = new  lib.BinarySearchTree();` 

#### Variables
| Variable |   Type     | Description                         |  
|    --    |    --      |    --                               |
| root     | {NodeTree} | Get the root element                | 
| length   | {Number}   | Get the size list                   |

#### Functions

| Function        | Parameters          | Return    | Description                        |  
|   --            |  --                 | --        |  --                                | 
| insert          | {number}            | -         | Action to insert a new node                |
| search          | {number}            | { Node }  | Returns the node if it exists on the tree  |
| findParent      | {number}            | { Node }  | Returns the parent node if it exists in the tree  |
| findNode        | {number}            | { Node }  | Returns the specific node if it exists        |
| findMinimum     | -                   | { number} | Returns the maximum value in the tree.        |
| findMaximum     | -                   | { number} | Returns the minimum value in the tree.        |
| delete          | {number}            | {Boolean} | Action to delete a node with a specific key.     |
| isEmpty         | -                   | {Boolean} | Returns whether the tree is empty or not  |
| inOrder         | -                   | {Array}   | Returns Inorder traversal of a binary tree  |
| preOrder        | -                   | {Array}   | Returns PreOrder traversal of a binary tree   |
| posOrder        | -                   | {Array}   | Returns PosOrder traversal of a binary tree  |
| isComplete      | -                   | {Boolean} | Function to return weather a tree is complete or not  |
| isFull          | -                   | {Boolean} | Function to return weather a tree is full or not  |
| isPerfect       | -                   | {Boolean} | Function to return weather a tree is perfect or not  |
| countNode       | -                   | {number}  | Function to get the number of node in the tree  |
| listLeafNodes   | -                   | {Array}   | Function to list all leafs in the tree  |
| levelOrderQueue | -                   | {Array}   | Function to list all nodes in level order  |
| clear           | -                   | {Boolean} | Returns whether the tree is empty or not  |



##### Example

```javascript
var binarySearchTree = new lib.BinarySearchTree();

binarySearchTree.insert(100);
binarySearchTree.insert(50);
binarySearchTree.insert(25);
binarySearchTree.insert(75);
binarySearchTree.insert(150);
binarySearchTree.insert(125);
binarySearchTree.insert(175);
console.log(binaryTree.search(125)); // 125
console.log(binarySearchTree.levelOrderQueue()); // [ 100, 50, 150, 25, 75, 125, 175 ]
console.log(binarySearchTree.isFull()); // true
console.log(binarySearchTree.isPerfect()); // true
console.log(binarySearchTree.inOrder()); // [ 25, 50, 75, 100, 125, 150, 175 ]
console.log(binarySearchTree.posOrder()); // [ 25, 75, 50, 125, 175, 150, 100 ]
console.log(binarySearchTree.preOrder()); // [ 100, 50, 25, 75, 150, 125, 175 ]
console.log(binaryTree.findMaximum()); // 175
console.log(binaryTree.findMinimum()); // 25

```