
class Graph {
    constructor() {
        this.vertices = [];
        this.edges = 0;
        this.adjacents = [];
        this.edgeTo = [];
        this.visited = [];
    }

    /**
     * Action to add a vertex 
     * @param {number} vertex
    */
    addVertex(vertex){
        this.vertices.push(vertex);
        this.adjacents[vertex] = []; 
    }

    /**
     * Action to add edge from the vertex to another vertex
     * @param {number} vertex1
     * @param {number} vertex2
    */
    addEdgeUndirected(vertex1, vertex2) { 
        this.adjacents[vertex1].push(vertex2); 
        this.adjacents[vertex2].push(vertex1); 
        this.edges++;
    }


    /**
     * Action to add edge from the vertex to another vertex
     * @param {number} vertex1
     * @param {number} vertex2
    */
    addEdgeDirected(vertex1, vertex2) { 
        this.adjacents[vertex1].push(vertex2); 
        this.edges++;
    }

    /**
     * Action to determines if the two vertix are adjacents or not
     * @param {number} vertex1
     * @param {number} vertex2
     * @returns {boolean}
    */
    isAdjacent(value1, value2){
        var vertice = this.vertices[value1];
        if(vertice != null){
              var filtered = this.adjacents[vertice].find(function(element) {
                  if(element === value2){
                      return true;
                  }
              });
              if(filtered) return true;
              else return false
        }else{
            return false;
        }
    }

    /**
     * Action to determines if the graph contains the vertix or not
     * @param {number} vertex
     * @returns {boolean}
    */
    containsVertex(vertex){
        var contains = this.vertices[vertex];
        if(contains != null) return true;
        else return false;
    }

    /**
     * Action get all vertices of a give vertix
     * @param {number} vertex
     * @returns {Array}
    */
    getNeighbors(vertex){
        var contaisVertex = this.containsVertex(vertex);
        if(contaisVertex)  return this.adjacents[vertex];
        else return [];
    }

    /**
     * Action get all vertices
     * @returns {Array}
    */
   getVertex(){
        return this.vertices;
    }

    /**
     * Returns the number of vertex
     * @returns {number}
    */
    getNumVertex(){
        return this.vertices.length;
    }

    /**
     * Returns the number of edges
     * @returns {number}
    */
    getNumEdges(){
        return this.edges;
    }
    
    /**
     *  Traversing or searching graph data structures, 
     *  explores all of the neighbor nodes at the present depth prior to 
     *  moving on to the nodes at the next depth level.
    */
    depthFirstSearch() {
       if(this.vertices.length === 0){
           return;
       }
       this.marked = [];
       for (var i = 0; i < this.vertices; ++i) { 
           this.marked[i] = false;
       }
       this._depthFirstSearch(this.vertices[0]);
    };

    _depthFirstSearch(vertex){
        this.marked[vertex] = true;
        if(this.adjacents[vertex]){
            console.log('Visited Vertex ', vertex)
        }
        var listAdjacents = this.adjacents[vertex];
        for (let index = 0; index < listAdjacents.length; index++) {
            const element = listAdjacents[index];
            if(!this.marked[element]){
                this._depthFirstSearch(element)
            }
        }
    }

    /**
     *  Traversing or searching graph data structures, 
     *  The algorithm starts at the root node and explores as far 
     *  as possible along each branch before backtracking.
    */
    breadthFirstSearch() {
        if(this.vertices.length === 0){
            return;
        }
        this.marked = [];
        for (var i = 0; i < this.vertices; ++i) { 
            this.marked[i] = false;
        }
        this._breadthFirstSearch(this.vertices[0]);
     };

     _breadthFirstSearch(vertex){

        var queue = [];
        this.marked[vertex] = true;
        queue.push(vertex)
        while(queue.length > 0){
            var u = queue.shift();
            if(u != null){
                console.log('Visited Vertex: ' + u);
            }
            var listAdjacents = this.adjacents[u];
            for (let index = 0; index < listAdjacents.length; index++) {
                const element = listAdjacents[index];
                if(!this.marked[element]){
                    this.edgeTo[element] = u;
                    this.marked[element] = true;
                    queue.push(element);
                }
            }
        }
    }

    /**
     * Action to mark all vertex not visited
     * @param {number} vertex
     * @returns {Array}
    */
    _markAllNotVisited(){
        for (var i = 0; i < this.vertices; ++i) { 
            this.visited[i] = false;
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
       var marked = [...this.visited];
       pathCount = this._countPath(from, to, marked, pathCount);
       return pathCount;
    }

    _countPath(from, to, marked, pathCount){
        marked[from] = true;
        if(from === to){
            pathCount++;
        } else{
            var listAdjacents = this.adjacents[from];
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
     * Action to get the path that exist in graph between two vertex
     * @param {number} from
     * @param {number} to
     * @returns {number}
    */
    getPath(from, to){
        if(!this.hasPath(to)){
            return null;
        }
        var path = [];
        for (var i = to; i != from; i = this.edgeTo[i]) { 
            path.push(i);
        } 
        path.push(from); 
        return path;
    }
    
    /**
     * Action to verify if the vertex already was visited
     * @returns {boolean}
    */
    hasPath(v) { 
        return this.marked[v];
    }
   
    /**
     * Display string representation of grah
    */
    toString() {
        var str = ''; 
        for (let i = 0; i < this.vertices.length; i++) {
            str += this.vertices[i] + ' -> ';
            var neighbors = this.getNeighbors(i); 
            for (let j = 0; j < neighbors.length; j++) {
                str += neighbors[j] + ' ';
            }
            str += '\n';
        }
        console.log(str)
    }

}

module.exports = Graph;