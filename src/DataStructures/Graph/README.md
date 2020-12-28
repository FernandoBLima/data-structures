## Graph

Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const  lib  =  require('./data-structure');`.

#### Variables
| Variable          |   Type   | Description                         |  
|    --             |    --    |    --                               |
| adjacencyList     |   {}     | Dictionary of elements                   | 

#### Common functions
| Function                    | Parameters      | Return    | Description                         |  
|   --                        | --              | --        |  --                                  | 
| addVertex                   |  Number         | -         | Action to add a vertex in the graph  |
| addEdgeUndirected           |  Number, Number | -         | Action to add vertex edge to another |
| addEdgeDirected             |  Number, Number | -         | Action to add bidirectional edge between two vertices  |
| removeEdge                  |  Number         | -         | Action to remove an edge          |
| removeVertex                |  Number         | -         | Action to remove a vertex in the graph |
| containsVertex              |  Number         | boolean   | Action to determine wether the graph contains the vertex or not |
| getNeighbors                |  Number         | Array     | Action to get all vertices of a given vertex |
| getVertex                   |  Number         | Number    | Action to get the vertex in the graph |
| getNumVertex                |  Number         | Number    | Returns the number of vertex in the graph |
| getNumEdges                 |  Number         | Number    | Returns the number of edges in the graph |
| isEmpty                     |  Number         | boolean   | Returns whether the graph is empty or not |
| isAdjacent                  |  Number, Number | boolean   | Action to determines if the two vertix are adjacents or not |
| print_adjacency_list        |  -              | -         | Display adjacency list representation of graph |
| print_adjacency_matrix      |  -              | -         | Display adjacency matrix representation of graph |
| countPaths                  |  Number, Number | number    | Action to count all paths that exist in graph between two vertex |
| print_all_path_destination  |  Number, Number | array     | Action to print all possible destinations |
| breadthFirstSearch          |  Number         | -         | Action to explore all nodes using BFS algorithm |
| depthFirstSearch            |  Number         | -         | Action to explore all nodes using DFS algorithm |
| isCyclic                    |  -              | -         | Action to check whether the graph is circular or not. |

___


The Graph can be accessed after including  `var graph = new  lib.Graph();`

##### Graph : Example

```javascript
var heapMax = new lib.HeapMax();

var graph = new lib.Graph();
graph.addEdgeDirected(0, 1)
graph.addEdgeDirected(0, 2)
graph.addEdgeDirected(1, 3)
graph.addEdgeDirected(1, 4)
graph.addEdgeDirected(2, 5)
graph.addEdgeDirected(2, 6)

console.log(graph.containsVertex(0))
console.log(graph.getNumVertex())
console.log(graph.getNumEdges())

graph.removeEdge(0,1)
graph.removeVertex(0)

console.log(graph.isEmpty())
console.log(graph.print_all_path_destination(2, 6))
console.log(graph.breadthFirstSearch(2))
console.log(graph.depthFirstSearch(2))

```
____