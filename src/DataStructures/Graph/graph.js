
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    /**
     * Action to add a vertex in the graph
     * @param {number} vertex
    */
    addVertex(vertex){
        this.adjacencyList[vertex] = [];
    }

    /**
     * Action to add vertex edge to another
     * @param {number} vertex1
     * @param {number} vertex2
    */
    addEdgeUndirected(vertex1, vertex2) { 
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        
        if(!this.adjacencyList[vertex1].includes(vertex2))
            this.adjacencyList[vertex1].push(vertex2);    

        if(!this.adjacencyList[vertex2].includes(vertex1))
            this.adjacencyList[vertex2].push(vertex1); 
    }

    /**
     * Action to add bidirectional edge between two vertices
     * @param {number} vertex1
     * @param {number} vertex2
    */
    addEdgeDirected(vertex1, vertex2) { 
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        if(!this.adjacencyList[vertex1].includes(vertex2))
            this.adjacencyList[vertex1].push(vertex2);    
    }

    /**
     * Action to remove an edge
     * @param {number} vertex1
     * @param {number} vertex2
    */
    removeEdge(vertex1, vertex2) { 
        if( this.adjacencyList[vertex1] && this.adjacencyList[vertex2] && this.adjacencyList[vertex1].includes(vertex2)){
            var adjacents = this.adjacencyList[vertex1];
            var index = adjacents.indexOf(vertex2);
            adjacents = adjacents.splice(index,1);
        }
    }

    /**
     * Action to remove a vertex in the graph
     * @param {number} vertex
    */
    removeVertex(vertex) { 
        if(vertex in this.adjacencyList){
            delete this.adjacencyList[vertex];
            var vertexList = Object.keys(this.adjacencyList);
            vertexList.forEach(element => {
                if(this.adjacencyList[element].includes(vertex) == true){
                    var index = this.adjacencyList[element].indexOf(vertex);
                    this.adjacencyList[element].splice(index,1);
                }
            });
        }
    }

    /**
     * Action to determine wether the graph contains the vertex or not
     * @param {number} vertex
     * @returns {boolean}
    */
    containsVertex(vertex){
        var contains = this.adjacencyList[vertex];
        return contains ? true : false;
    }

    /**
     * Action to get all vertices of a given vertex
     * @param {number} vertex
     * @returns {Array}
    */
    getNeighbors(vertex){
        return (this.containsVertex(vertex) == true) ? this.adjacencyList[vertex] : null
    }

    /**
     * Action to get the vertex in the graph
     * @param {number} vertex
     * @returns {Number}
    */
    getVertex(vertex){
        return this.adjacencyList[vertex] ? this.adjacencyList[vertex] : null;
    }

    /**
     * Returns the number of vertex in the graph
     * @returns {number}
    */
    getNumVertex(){
        return Object.keys(this.adjacencyList).length;
    }
    
    /**
     * Returns the number of edges in the graph
     * @returns {number}
    */
    getNumEdges(){
        var sum = 0; 
        var numVertex = Object.keys(this.adjacencyList);
        for (var i = 0; i < numVertex.length; i++){
            var vertex = numVertex[i];
            sum += this.adjacencyList[vertex].length;
        }

        return  sum; 
    }

    /**
     * Returns whether the graph is empty or not
     * @return {boolean} Whether the graph is empty.
    */
    isEmpty(){
        return Object.keys(this.adjacencyList).length > 0 ? false : true;
    }

    /**
     * Action to determines if the two vertix are adjacents or not
     * @param {number} vertex1
     * @param {number} vertex2
     * @returns {boolean}
    */
    isAdjacent(value1, value2){
        if(this.adjacencyList[value1] != null){
            var filtered = this.adjacencyList[value1].find(function(element) {
                if(element === value2){
                    return true;
                }
            });
            if(filtered) return true;
            else return false;
        }else{
            return false;
        }
    }

    /**
     * Display adjacency list representation of graph
    */
    print_adjacency_list() {
        var str = ''; 
        if(this.getNumVertex() > 0) {
            var numVertex = Object.keys(this.adjacencyList);
            for (let i = 0; i < numVertex.length; i++) {
                var vertex = numVertex[i];
                str += vertex + ' -> ';
                var neighbors = this.getNeighbors(vertex); 
                for (let j = 0; j < neighbors.length; j++) {
                    str += neighbors[j] + ' ';
                }
                str += '\n';
            }
            console.log(str);
        } else {
            console.log('The Graph is empty');
        }
    }

    /**
     * Display adjacency matrix representation of graph
    */
    print_adjacency_matrix(){
        var vertices = Object.keys(this.adjacencyList);
        var matrix = [];
        for(var i=0; i< vertices.length; i++) {
            matrix[i] = Array(vertices.length).fill(0);
        }

        Object.keys(this.adjacencyList).forEach(element => {
            var elements = this.adjacencyList[element];
            elements.forEach(value => {
                matrix[element][value] = 1;
            });
        });

        for(var i=0; i< vertices.length; i++) {
            console.log(matrix[i])
        }
    }

    /**
     * Action to count all paths that exist in graph between two vertex
     * @param {number} from
     * @param {number} to
     * @returns {number}
    */
    countPaths(from, to){
        var pathCount = 0;
        var dictt = {};

        Object.keys(this.adjacencyList).forEach(function(item) {
            dictt[item] = false;
        })

        pathCount = this._countPath(from, to, dictt, pathCount);
        return pathCount;
    }

    _countPath(from, to, marked, pathCount){
        marked[from] = true;
        if(from === to){
            pathCount = pathCount + 1
        } else{
            var listAdjacents = this.adjacencyList[from];
            for (let index = 0; index < listAdjacents.length; index++) {
                const element = listAdjacents[index];
                if(!marked[element]){
                    pathCount = this._countPath(element, to, marked, pathCount);
                }
            }
        }
        marked[from] = false;
        return pathCount;
    }

    /**
     * Action to print all possible destinations
     * @param {number} from
     * @param {number} to
     * @returns {array}
    */
    print_all_path_destination(from, to){
        var pathCount = 0;
        var dictt = {};

        Object.keys(this.adjacencyList).forEach(function(item) {
            dictt[item] = false;
        })
        var localPathList = [from]
        pathCount = this._print_all_path_destination(from, to, dictt, localPathList);
        return pathCount;
    }


    _print_all_path_destination(from, destination, marked, localPathList){
        if (from == destination) {
            console.log(localPathList)
            return
        }

        marked[from] = true;
        var listAdjacents = this.adjacencyList[from];
        for (let index = 0; index < listAdjacents.length; index++) {
            const element = listAdjacents[index];
            if(!marked[element]){
                localPathList.push(element);
                this._print_all_path_destination(element, destination, marked, localPathList);
                localPathList.splice(localPathList.indexOf(element), 1); 
            }
        }
        marked[from] = false;
    }

    /**
     *  Action to explore all nodes using BFS algorithm
     *  @param {number} current_vertice
    */
    breadthFirstSearch(current_vertice) {
        var vertices = Object.keys(this.adjacencyList);
        if(vertices.length === 0){
            return;
        }else {
            var discovered = {};
            vertices.forEach(function(item) {
                discovered[item] = false;
            })
            this._breadthFirstSearch(current_vertice, discovered);
        }
    }

    _breadthFirstSearch(vertex, discovered){
        var queue = [];
        discovered[vertex] = true;
        queue.push(vertex);

        while(queue.length > 0){
            var u = queue.shift();
            console.log('Visited Vertex: ' + u);

            var listAdjacents = this.adjacencyList[u].sort((a, b) => a - b)
            listAdjacents = listAdjacents.sort()

            for (let index = 0; index < listAdjacents.length; index++) {
                const element = listAdjacents[index];
                if(!discovered[element]){
                    discovered[element] = true;
                    queue.push(element);
                }
            }
        }
    }

    /**
     *  Action to explore all nodes using DFS algorithm
     *  @param {number} current_vertice
    */
    depthFirstSearch(current_vertice) {
        var vertices = Object.keys(this.adjacencyList);
        if(vertices.length === 0){
            return;
        }
        var discovered = {};
        vertices.forEach(function(item) {
            discovered[item] = false;
        })
        this._depthFirstSearch(current_vertice, discovered);
    }

    _depthFirstSearch(current_vertice, discovered){
        discovered[current_vertice] = true;
        console.log('Visited Vertex ', current_vertice);
        
        var listAdjacents = this.adjacencyList[current_vertice].sort((a, b) => a - b)
        for (let index = 0; index < listAdjacents.length; index++) {
            const element = listAdjacents[index];
            if(!discovered[element]){
                this._depthFirstSearch(element, discovered);
            }
        }
    }
 

    /**
     *  Action to check whether the graph is circular or not.
    */
    isCyclic() {
        var vertices = Object.keys(this.adjacencyList);
        if(vertices.length === 0){
            return false;
        }
        var visited = {};
        var recStack = {};
        vertices.forEach(function(item) {
            visited[item] = false;
            recStack[item] = false;
        })
        for(let vertex of vertices) {
            if(!visited[vertex]) {
              let cycleDetected = this._cycleDetect(vertex, visited, recStack);
              if(cycleDetected) return true;
              else return false;
            }
         }
    }

   _cycleDetect(index, visited, explore) {
        if(visited[index]) return false;
        if(explore[index]) return true;
  
        explore[index] = true;

        var neighbors = this.adjacencyList[index]; 
        for(let neighbor of neighbors) {
            if(!visited[neighbor]) {
               let cycleDetected = this._cycleDetect(neighbor, visited, explore);
               if(cycleDetected) return true;
            }
        }
        explore[index] = false;
        visited[index] = true;
        return false;
    }


}

module.exports = Graph;