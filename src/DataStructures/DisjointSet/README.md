## Disjoint Set

Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const lib  =  require('./data-structure');`.

Can be accessed after including  `var disjoinSet = new  lib.DisjoinSet();` 

#### DisjoinSet Variables
| Variable |   Type   | Description                         |  
|    --    |    --    |    --                               |
| list     | {Number} | List of elements in array           | 
| size     | {Number} | Get the size list                   |

#### DisjointSetNode Variables
| Variable |   Type   | Description                         |  
|    --    |    --    |    --                               |
| value    | {Number} | Ele ent value                       | 
| children | {}       | List of child elements              |
| rank     | {Number} | Rank value                          |
| parent   | {Number} | Value element parent                |


#### Functions

| Function                     | Parameters              | Return            | Description                              |  
|   --                         | --                      | --                |  --                                      | 
| init                         | {number}                | -                 | Initialize the list creating n item sets  |
| union                        | {number, number}        | -                 | Link the set x to set y                   |
| unionByPathCompression       | {number, number}        | -                 | Link the set x to set y using the path compression |
| unionByRank                  | {number, number}        | {Array}           | Link root of smaller rank to root of larger rank  |
| unionByRankByPathCompression | {number, number}        | {Array}           | Link root of smaller rank to root of larger rank using the path compression  |
| findByPathCompression        | {number}                | {number}          | Change ranks or move elements from one set to another.  |
| unionBySize                  | {number, number}        | {Boolean}         | Link root of smaller structure to root of larger structure  |
| findValue                    | {number}                | {DisjointSetNode} | Return a specific value  |
| findRoot                     | {number}                | {DisjointSetNode} | Returns the root of the set that the value belongs to  |
| getSetSize                   | {number}                | {number}          | Returns the size of the set that the value belongs to  |
| extractSets                  | -                       | {Array}           | Action to list all sets  |
| getChildrenByItem            | {number}                | {number}          | Action to get all children of given item  |
| getSetFromValue              | {number}                | {boolean}         | Return the values from the set  |
| isConnected                  | {number, number}        | {Boolean}         | Check if items are in the same set |
| isEmpty                      | -                       | {Boolean}         | Checks whether the list is empty or not  |
| getSize                      | -                       | {number}          | Return the length of the list  |
| clear                        | -                       | -                 | Defines the list as empty  |
| isRoot                       | {number}                | {Boolean}         | Return true if the element is root  |

##### Example

```javascript
var disjoinSet = new  lib.DisjoinSet();

disjoinSet.unionByPathCompression(0,1)
disjoinSet.unionByPathCompression(1,2)
disjoinSet.unionByPathCompression(0,3)

disjoinSet.extractSets(); // [ '3 2 0 1', 4, 5, 6, 7, 8, 9 ]
disjoinSet.findRoot(7); // DisjointSetNode { value: 7, children: {}, rank: 1, parent: -1 }
disjoinSet.getSetFromValue(1); // 3 2 0 1
disjoinSet.getSetSize(1); // 4
disjoinSet.getChildrenByItem(3); // { '2': }
disjoinSet.isRoot(7); // true
disjoinSet.isRoot(0); // false
disjoinSet.findValue(7); // { value: 7, children: {}, rank: 1, parent: -1 }
```
____