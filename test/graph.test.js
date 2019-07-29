const Graph = require('../src/DataStructures/Graph/graph');

describe('Graph', () => {
    const graph = new Graph();
    
    test('should get queue graph', (done) => {
        expect(graph.getLength()).toBe(0);
        expect(graph.isEmpty()).toBe(true);
        expect(graph.getNeighbors()).toEqual([]);
        expect(graph.toString()).toBe();
        expect(graph.getNumEdges()).toBe(0);
        expect(graph.isAdjacent(0, 3)).toBe(false);
        expect(graph.depthFirstSearch()).toBe();
        expect(graph.breadthFirstSearch()).toBe();
        expect(graph.containsVertex(0)).toBe(false);
        expect(graph.getNumVertex()).toBe(0);
        done();
    });

    test('should insert the first vertex', (done) => {
        expect(graph.addVertex(0)).toBe();
        expect(graph.getLength()).toBe(1);
        expect(graph.depthFirstSearch()).toBe();
        expect(graph.breadthFirstSearch()).toBe();
        expect(graph.containsVertex(0)).toBe(true);
        expect(graph.isEmpty()).toBe(false);
        expect(graph.getNeighbors()).toEqual([]);
        expect(graph.getNumEdges()).toBe(0);
        expect(graph.getNumVertex()).toBe(1);
        done();
    });

    test('should insert more new vertex', () => {
        graph.addVertex(1);
        graph.addVertex(2);
        graph.addVertex(3);
        graph.addVertex(4);
        graph.addVertex(5);
        expect(graph.getNumEdges()).toBe(0);
        expect(graph.getNumVertex()).toBe(6);
    });

    test('should add Edges Undirected', () => {
        expect(graph.addEdgeUndirected(0, 1)).toBe();
        expect(graph.addEdgeUndirected(0, 2)).toBe();
        expect(graph.addEdgeUndirected(1, 3)).toBe();
        expect(graph.addEdgeUndirected(1, 4)).toBe();
        expect(graph.addEdgeUndirected(2, 4)).toBe();

        expect(graph.isAdjacent(0, 1)).toBe(true);
        expect(graph.getNeighbors(0)).toEqual([1,2]);

        expect(graph.isAdjacent(0, 3)).toBe(false);
        expect(graph.getNeighbors(1)).toEqual([0,3,4]);

        expect(graph.getNumVertex()).toBe(6);
    });

    test('should add Edges directed', () => {
        expect(graph.addEdgeDirected(5, 4)).toBe();
        expect(graph.isAdjacent(5, 4)).toBe(true);
        expect(graph.isAdjacent(4, 5)).toBe(false);
        expect(graph.getNumEdges()).toBe(11);
        expect(graph.getNumVertex()).toBe(6);
    });

    test('should count and get the path ', () => {
        expect(graph.depthFirstSearch()).toBe();
        expect(graph.breadthFirstSearch()).toBe();
        expect(graph.countPaths(0, 4)).toBe(2);
        expect(graph.getPath(0, 4)).toEqual([4, 1, 0]);
        expect(graph.toString()).toBe();
        expect(graph.getVertex()).toEqual([0, 1, 2, 3, 4, 5]);

    });

});