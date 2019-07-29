const DisjointSet = require('../src/DataStructures/DisjointSet/disjointSet');

describe('DisjointSet', () => {
    const disjointSet = new DisjointSet();
    
    test('should initialize the data structure', (done) => {
        expect(disjointSet.isEmpty()).toBe(true);
        expect(disjointSet.init(5)).toBe();
        expect(disjointSet.isEmpty()).toBe(false);
        expect(disjointSet.getSize()).toBe(5);
        expect(disjointSet.isConnected(0,1)).toBe(false);
        expect(disjointSet.getSizeSet(0)).toBe(1);
        expect(disjointSet.getChildrenByItem(1)).toEqual({});
        done();
    });

    test('should create the first set', (done) => {
        expect(disjointSet.union(0,1)).toBe();
        expect(disjointSet.isConnected(0,1)).toBe(true);
        expect(disjointSet.getSizeSet(0)).toBe(2);
        expect(disjointSet.extractSets()).toEqual([ '0 1', 2, 3, 4 ]);
        done();
    });

    test('should create more sets', (done) => {
        expect(disjointSet.union(2,3)).toBe();
        expect(disjointSet.isConnected(2,3)).toBe(true);
        expect(disjointSet.findRoot(0)).toBe(0);
        expect(disjointSet.getSizeSet(0)).toBe(2);
        done();
    });

    test('should create more sets', (done) => {
        expect(disjointSet.union(3,4)).toBe();
        expect(disjointSet.isConnected(3,4)).toBe(true);
        expect(disjointSet.getSizeSet(3)).toBe(3);
        done();
    });

    test('should create more sets', (done) => {
        // expect(disjointSet.union(0,4)).toBe();
        // expect(disjointSet.isConnected(0,4)).toBe(true);
        // expect(disjointSet.getSizeSet(0)).toBe(4);
        // expect(disjointSet.getSizeSet(3)).toBe(4);
        // expect(disjointSet.extractSets()).toEqual([ '0 1 2 3 4']);
        done();
    });


});