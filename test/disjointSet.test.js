const DisjointSet = require('../src/DataStructures/DisjointSet/disjointSet');

describe('DisjointSet', () => {
    const disjointSet = new DisjointSet();
    
    test('should initialize the data structure', (done) => {
        disjointSet.clear();
        expect(disjointSet.findValue(2)).toBe(undefined);
        expect(disjointSet.isEmpty()).toBe(true);
        expect(disjointSet.init(5)).toBe();
        expect(disjointSet.isEmpty()).toBe(false);
        expect(disjointSet.getSize()).toBe(5);
        expect(disjointSet.isConnected(0,1)).toBe(false);
        expect(disjointSet.getChildrenByItem(1)).toEqual({});
        expect(disjointSet.isRoot(1)).toEqual(true);
        expect(disjointSet.getSetSize(1)).toEqual(1);
        done();
    });

    test('should create a set', (done) => {
        expect(disjointSet.union(0,1)).toBe();
        expect(disjointSet.isConnected(0,1)).toBe(true);
        expect(disjointSet.extractSets()).toEqual([ '1 0', 2, 3, 4 ]);
        expect(disjointSet.getSetFromValue(1)).toEqual('1 0');
        expect(disjointSet.isRoot(0)).toEqual(false);
        done();
    });

    test('should create another sets', (done) => {
        expect(disjointSet.union(2,3)).toBe();
        expect(disjointSet.isConnected(2,3)).toBe(true);
        expect(disjointSet.getSetSize(0)).toBe(2);
        done();
    });

    test('should create the structure using the union function', (done) => {
        disjointSet.clear();
        expect(disjointSet.init(10)).toBe();
        expect(disjointSet.union(2,1)).toBe();
        expect(disjointSet.union(3,2)).toBe();
        expect(disjointSet.union(4,3)).toBe();
        expect(disjointSet.isConnected(0,4)).toBe(false);
        expect(disjointSet.isConnected(1,4)).toBe(true);
        expect(disjointSet.getSetSize(2)).toBe(4);
        expect(disjointSet.extractSets()).toEqual([ 0,'1 2 3 4',5,6,7,8,9]);
   
        disjointSet.clear();

        expect(disjointSet.init(10)).toBe();
        expect(disjointSet.union(2,1)).toBe();
        expect(disjointSet.union(3,4)).toBe();
        expect(disjointSet.union(2,3)).toBe();
        expect(disjointSet.isConnected(0,4)).toBe(false);
        expect(disjointSet.isConnected(1,4)).toBe(true);
        expect(disjointSet.getSetSize(2)).toBe(4);
        expect(disjointSet.extractSets()).toEqual([ 0,'4 1 2 3',5,6,7,8,9]);

        done();
    });

    test('should create the structure using the unionByPathCompression function ', (done) => {
        disjointSet.clear();
        expect(disjointSet.init(10)).toBe();
        expect(disjointSet.unionByPathCompression(0,1)).toBe();
        expect(disjointSet.unionByPathCompression(1,2)).toBe();
        expect(disjointSet.unionByPathCompression(3,0)).toBe();
        expect(disjointSet.isConnected(0,3)).toBe(true);
        expect(disjointSet.isConnected(1,4)).toBe(false);
        expect(disjointSet.getSetSize(2)).toBe(4);
        expect(disjointSet.extractSets()).toEqual(['2 0 1 3',4,5,6,7,8,9]);   
        done();
    });

    test('should create the structure using the unionByRank function', (done) => {
        disjointSet.clear();
        expect(disjointSet.init(10)).toBe();
        expect(disjointSet.unionByRank(4,5)).toBe();
        expect(disjointSet.unionByRank(6,7)).toBe();
        expect(disjointSet.unionByRank(4,6)).toBe();
        expect(disjointSet.unionByRank(3,4)).toBe();
        expect(disjointSet.unionByRank(3,4)).toBe();

        expect(disjointSet.isConnected(0,4)).toBe(false);
        expect(disjointSet.isConnected(6,4)).toBe(true);
        expect(disjointSet.getSetSize(4)).toBe(5);
        expect(disjointSet.extractSets()).toEqual([ 0,1,2,'7 3 5 4 6', 8, 9]);
   
        disjointSet.clear();

        expect(disjointSet.init(10)).toBe();
        expect(disjointSet.unionByRank(5,4)).toBe();
        expect(disjointSet.unionByRank(7,6)).toBe();
        expect(disjointSet.unionByRank(6,4)).toBe();
        expect(disjointSet.unionByRank(3,4)).toBe();

        expect(disjointSet.isConnected(0,4)).toBe(false);
        expect(disjointSet.isConnected(6,4)).toBe(true);
        expect(disjointSet.getSetSize(4)).toBe(5);
        expect(disjointSet.extractSets()).toEqual([ 0,1,2,'4 3 5 6 7', 8, 9]);

        done();

        disjointSet.clear();

        expect(disjointSet.init(10)).toBe();
        expect(disjointSet.unionByRank(4,5)).toBe();
        expect(disjointSet.unionByRank(6,5)).toBe();
        expect(disjointSet.unionByRank(4,6)).toBe();
        expect(disjointSet.unionByRank(4,3)).toBe();

        expect(disjointSet.isConnected(0,4)).toBe(false);
        expect(disjointSet.isConnected(6,4)).toBe(true);
        expect(disjointSet.getSetSize(4)).toBe(4);
        expect(disjointSet.extractSets()).toEqual([ 0,1,2,'5 3 4 6', 7, 8, 9]);

        done();
    });


    test('should create the structure using the unionByRankByPathCompression function', (done) => {
        disjointSet.clear();
        expect(disjointSet.init(10)).toBe();
        expect(disjointSet.unionByRankByPathCompression(4,5)).toBe();
        expect(disjointSet.unionByRankByPathCompression(6,7)).toBe();
        expect(disjointSet.unionByRankByPathCompression(4,6)).toBe();
        expect(disjointSet.unionByRankByPathCompression(3,4)).toBe();

        expect(disjointSet.isConnected(0,4)).toBe(false);
        expect(disjointSet.isConnected(6,4)).toBe(true);
        expect(disjointSet.getSetSize(4)).toBe(5);
        expect(disjointSet.extractSets()).toEqual([ 0,1,2,'7 3 4 5 6', 8, 9]);
   
        disjointSet.clear();

        expect(disjointSet.init(10)).toBe();
        expect(disjointSet.unionByRankByPathCompression(5,4)).toBe();
        expect(disjointSet.unionByRankByPathCompression(7,6)).toBe();
        expect(disjointSet.unionByRankByPathCompression(6,4)).toBe();
        expect(disjointSet.unionByRankByPathCompression(3,4)).toBe();

        expect(disjointSet.isConnected(0,4)).toBe(false);
        expect(disjointSet.isConnected(6,4)).toBe(true);
        expect(disjointSet.getSetSize(4)).toBe(5);
        expect(disjointSet.extractSets()).toEqual([ 0,1,2,'4 3 5 6 7', 8, 9]);

        disjointSet.clear();

        expect(disjointSet.init(10)).toBe();
        expect(disjointSet.unionByRankByPathCompression(1,2)).toBe();
        expect(disjointSet.unionByRankByPathCompression(2,3)).toBe();
        expect(disjointSet.unionByRankByPathCompression(4,5)).toBe();
        expect(disjointSet.unionByRankByPathCompression(6,5)).toBe();
        expect(disjointSet.unionByRankByPathCompression(2,5)).toBe();
        expect(disjointSet.unionByRankByPathCompression(2,5)).toBe();

        expect(disjointSet.isConnected(0,4)).toBe(false);
        expect(disjointSet.isConnected(6,4)).toBe(true);
        expect(disjointSet.getSetSize(4)).toBe(6);
        expect(disjointSet.extractSets()).toEqual([ 0, '5 2 1 3 4 6', 7, 8, 9]);

        done();
    });
    
    test('should create the structure using the unionBySize function', (done) => {
        disjointSet.clear();
        expect(disjointSet.init(10)).toBe();
        expect(disjointSet.unionBySize(3,4)).toBe();
        expect(disjointSet.unionBySize(8,4)).toBe();
        expect(disjointSet.unionBySize(4,2)).toBe();

        expect(disjointSet.isConnected(0,4)).toBe(false);
        expect(disjointSet.isConnected(3,4)).toBe(true);
        expect(disjointSet.getSetSize(4)).toBe(4);
        expect(disjointSet.extractSets()).toEqual([ 0,1,'4 2 3 8', 5, 6, 7, 9]);
   
        disjointSet.clear();

        expect(disjointSet.init(10)).toBe();
        expect(disjointSet.unionBySize(3,4)).toBe();
        expect(disjointSet.unionBySize(8,4)).toBe();
        expect(disjointSet.unionBySize(2,4)).toBe();
        expect(disjointSet.unionBySize(2,4)).toBe();

        expect(disjointSet.isConnected(0,4)).toBe(false);
        expect(disjointSet.isConnected(3,4)).toBe(true);
        expect(disjointSet.getSetSize(4)).toBe(4);
        expect(disjointSet.extractSets()).toEqual([ 0,1,'4 2 3 8', 5, 6, 7, 9]);
        done();
    });

});