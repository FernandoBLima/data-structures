const Graph = require('../src/DataStructures/Graph/graph');

describe('Graph', () => {
    const graph = new Graph();
    
    test('should get the empty graph', (done) => {
        expect(graph.getNumEdges()).toBe(0);
        expect(graph.isEmpty()).toBe(true);
        expect(graph.getNeighbors()).toEqual(null);
        expect(graph.getNumEdges()).toBe(0);
        expect(graph.getVertex(10)).toBe(null);
        expect(graph.isAdjacent(0, 3)).toBe(false);
        expect(graph.depthFirstSearch()).toBe();
        expect(graph.breadthFirstSearch()).toBe();
        expect(graph.containsVertex(0)).toBe(false);
        expect(graph.getNumVertex()).toBe(0);
        expect(graph.print_adjacency_list()).toBe();
        expect(graph.removeVertex(6)).toBe();
        expect(graph.removeEdge(0, 6)).toBe();
        expect(graph.isCyclic()).toBe(false);
        done();
    });

    test('should insert the first vertex then remove it', (done) => {
        expect(graph.addVertex(0)).toBe();
        expect(graph.containsVertex(0)).toBe(true);
        expect(graph.isEmpty()).toBe(false);
        expect(graph.getNeighbors()).toEqual(null);
        expect(graph.getNumEdges()).toBe(0);
        expect(graph.getNumVertex()).toBe(1);
        done();
    });

    test('should insert more vertex', (done) => {
        graph.addVertex(1);
        graph.addVertex(2);
        graph.addVertex(3);
        graph.addVertex(4);
        graph.addVertex(5);
        expect(graph.getNumEdges()).toBe(0);
        expect(graph.getNumVertex()).toBe(6);
        done();
    });

    test('should insert a vertex and them remove it', (done) => {
        graph.addVertex(6);
        expect(graph.getNumVertex()).toBe(7);
        expect(graph.removeVertex(6)).toBe();
        expect(graph.getNumVertex()).toBe(6);
        done();
    });

    test('should add undirected edges', (done) => {
        const graph = new Graph();
        expect(graph.addEdgeUndirected(0, 1)).toBe();
        expect(graph.addEdgeUndirected(0, 1)).toBe();
        expect(graph.addEdgeUndirected(0, 2)).toBe();
        expect(graph.addEdgeUndirected(1, 3)).toBe();
        expect(graph.addEdgeUndirected(1, 4)).toBe();
        expect(graph.addEdgeUndirected(2, 4)).toBe();
        expect(graph.getVertex(0)).toEqual([1,2]);

        expect(graph.isAdjacent(0, 1)).toBe(true);
        expect(graph.getNeighbors(0)).toEqual([1,2]);

        expect(graph.isAdjacent(0, 3)).toBe(false);
        expect(graph.getNeighbors(1)).toEqual([0,3,4]);

        expect(graph.getNumVertex()).toBe(5);
        done();
    });

    test('should remove a vertex', (done) => {
        const graph = new Graph();
        graph.addVertex(0);
        graph.addVertex(6);
        expect(graph.addEdgeUndirected(0, 6)).toBe();

        expect(graph.getVertex(6)).toEqual([0]);
        expect(graph.isAdjacent(0, 6)).toBe(true);

        expect(graph.getNumVertex()).toBe(2);
        expect(graph.removeVertex(6)).toBe();
        expect(graph.getNumVertex()).toBe(1);
        done();
    });

    test('should remove an edge', (done) => {
        const graph = new Graph();
        graph.addVertex(0);
        graph.addVertex(6);
        expect(graph.addEdgeUndirected(0, 6)).toBe();

        expect(graph.getVertex(0)).toEqual([6]);
        expect(graph.isAdjacent(0, 6)).toBe(true);
        expect(graph.getNumVertex()).toBe(2);

        expect(graph.removeEdge(0, 6)).toBe();
        expect(graph.isAdjacent(0, 6)).toBe(false);
        expect(graph.getVertex(0)).toEqual([]);
        done();
    });

    test('should add directed edges', (done) => {
        const graph = new Graph();
        expect(graph.addEdgeDirected(0, 1)).toBe();
        expect(graph.addEdgeDirected(0, 1)).toBe();
        expect(graph.addEdgeDirected(0, 2)).toBe();
        expect(graph.addEdgeDirected(0, 3)).toBe();
        expect(graph.addEdgeDirected(2, 3)).toBe();
        expect(graph.addEdgeDirected(3, 4)).toBe();
        expect(graph.addEdgeDirected(4, 5)).toBe();
        expect(graph.isAdjacent(2, 3)).toBe(true);
        expect(graph.isAdjacent(3, 2)).toBe(false);
        expect(graph.countPaths(0, 3)).toBe(2);
        expect(graph.breadthFirstSearch(0)).toBe();
        expect(graph.depthFirstSearch(0)).toBe();
        expect(graph.print_all_path_destination(0, 2)).toBe();
        expect(graph.print_adjacency_matrix()).toBe();
        expect(graph.print_adjacency_list()).toBe();
        done();

    });


    test('should test if the graph is cyclical', (done) => {
        var graph = new Graph();
        expect(graph.addEdgeDirected(0, 1)).toBe();
        expect(graph.addEdgeDirected(0, 2)).toBe();
        expect(graph.addEdgeDirected(1, 2)).toBe();
        expect(graph.addEdgeDirected(2, 0)).toBe();
        expect(graph.addEdgeDirected(2, 3)).toBe();
        expect(graph.addEdgeDirected(3, 3)).toBe();
        expect(graph.isCyclic()).toBe(true);

        var graph = new Graph();
        expect(graph.addEdgeDirected(0, 1)).toBe();
        expect(graph.addEdgeDirected(1, 2)).toBe();
        expect(graph.addEdgeDirected(3, 4)).toBe();
        expect(graph.isCyclic()).toBe(false);
        done();
    });

});