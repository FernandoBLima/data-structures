const MultiSets = require('../src/DataStructures/Set/multiSets');

describe('MultiSets', () => {
    const multiSets = new MultiSets();
    
    test('should get the multiSets empty', (done) => {
        expect(multiSets.isEmpty()).toBe(true);
        expect(multiSets.remove(1)).toBe();
        expect(multiSets.getCardinality()).toBe(0);
        done();
    });

    test('should add and remove values', (done) => {
        expect(multiSets.insert(null, null)).toBe('Is not possible to insert a null value');
        expect(multiSets.insert('Value 1', 1)).toBe();
        expect(multiSets.insert('Value 2', 2)).toBe();
        
        expect(multiSets.getMultiplicity('Value 1')).toBe(1);
        expect(multiSets.getMultiplicity('Value 2')).toBe(2);

        expect(multiSets.hasValue('Value 2')).toBe(true);
        expect(multiSets.hasValue('Value 3')).toBe(false);

        expect(multiSets.getCardinality()).toBe(2);
        expect(multiSets.listCardinalitySets()).toBe('Value 1 Value 2 Value 2 ');

        expect(multiSets.insert('Value 2', 2)).toBe();
        expect(multiSets.getMultiplicity('Value 2')).toBe(4);

        expect(multiSets.deleteValue('Value 2')).toBe(true);
        expect(multiSets.deleteValue('Value 3')).toBe(false);
        expect(multiSets.isEmpty()).toBe(false);

        expect(multiSets.clear()).toBe();
        done();
    });

    test('should get the multiset sum ', (done) => {
        const multiSets1 = new MultiSets();
        multiSets1.insert('VALUE 4', 2);
        multiSets1.insert('VALUE 3', 1);
        
        const multiSets2 = new MultiSets();
        multiSets2.insert('VALUE 1', 2);
        multiSets2.insert('VALUE 2',1);
        multiSets2.insert('VALUE 3',1);

        expect(multiSets1.sum(multiSets2)).not.toBe(null);
        var sumSet = multiSets1.sum(multiSets2);
        expect(sumSet.items).toMatchObject({"VALUE 1": 2, "VALUE 2": 1, "VALUE 3": 2, "VALUE 4": 2});
        done();
    });

    test('should get the multiset intersect ', (done) => {
        const multiSets1 = new MultiSets();
        multiSets1.insert('VALUE 1', 2);
        multiSets1.insert('VALUE 2', 1);
        
        const multiSets2 = new MultiSets();
        multiSets2.insert('VALUE 3', 1);
        multiSets2.insert('VALUE 2',2);

        expect(multiSets1.intersect(multiSets2)).not.toBe(null);
        var sumSet = multiSets1.intersect(multiSets2);
        expect(sumSet.items).toMatchObject({"VALUE 2": 1});
        done();
    });

    test('should get the multiset union ', (done) => {
        const multiSets1 = new MultiSets();
        multiSets1.insert('VALUE 1', 2);
        multiSets1.insert('VALUE 2', 1);
        
        const multiSets2 = new MultiSets();
        multiSets2.insert('VALUE 3', 1);
        multiSets2.insert('VALUE 2',2);

        expect(multiSets1.union(multiSets2)).not.toBe(null);
        var sumSet = multiSets1.union(multiSets2);
        expect(sumSet.items).toMatchObject({"VALUE 1": 2, "VALUE 2": 2, "VALUE 3": 1});
        done();
    });

    test('should get the multiset difference ', (done) => {
        const multiSets1 = new MultiSets();
        multiSets1.insert('VALUE 1', 2);
        multiSets1.insert('VALUE 2', 1);
        
        const multiSets2 = new MultiSets();
        multiSets2.insert('VALUE 3', 1);
        multiSets2.insert('VALUE 2',2);

        expect(multiSets1.difference(multiSets2)).not.toBe(null);
        var sumSet = multiSets1.difference(multiSets2);
        expect(sumSet.items).toMatchObject({"VALUE 1": 2});
        done();
    });

    test('should verify if the sets are disjointSets or not', (done) => {
        const multiSets1 = new MultiSets();
        multiSets1.insert('VALUE 1', 2);
        multiSets1.insert('VALUE 2', 1);
        
        const multiSets2 = new MultiSets();
        multiSets2.insert('VALUE 3', 1);
        multiSets2.insert('VALUE 4',2);

        expect(multiSets1.disjointSets(multiSets2)).toBe(true);

        const multiSets3 = new MultiSets();
        multiSets3.insert('VALUE 1', 2);
        multiSets3.insert('VALUE 2', 1);
        
        const multiSets4 = new MultiSets();
        multiSets4.insert('VALUE 1', 2);
        multiSets4.insert('VALUE 4',2);

        expect(multiSets3.disjointSets(multiSets4)).toBe(false);
        done();
    });

    test('should verify if the set are equals or not ', (done) => {
        const multiSets1 = new MultiSets();
        multiSets1.insert('VALUE 1', 2);
        multiSets1.insert('VALUE 2', 1);
        
        const multiSets2 = new MultiSets();
        multiSets2.insert('VALUE 1', 2);
        multiSets2.insert('VALUE 2', 1);
        expect(multiSets1.isEqual(multiSets2)).toBe(true);

        const multiSets3 = new MultiSets();
        multiSets3.insert('VALUE 1', 1);
        const multiSets4 = new MultiSets();
        multiSets4.insert('VALUE 1', 2);
        expect(multiSets3.isEqual(multiSets4)).toBe(false);

        const multiSets5 = new MultiSets();
        multiSets5.insert('VALUE 1', 2);
        const multiSets6 = new MultiSets();
        multiSets6.insert('VALUE 3', 2);
        expect(multiSets5.isEqual(multiSets6)).toBe(false);

        const multiSets7 = new MultiSets();
        multiSets7.insert('VALUE 1', 2);
        multiSets7.insert('VALUE 2', 2);
        const multiSets8 = new MultiSets();
        multiSets8.insert('VALUE 3', 2);
        expect(multiSets7.isEqual(multiSets8)).toBe(false);

        done();
    });

    test('should  verify if the the both sets are subset or not ', (done) => {
        const multiSets1 = new MultiSets();
        multiSets1.insert('VALUE 1', 2);
        multiSets1.insert('VALUE 2', 1);
        
        const multiSets2 = new MultiSets();
        multiSets2.insert('VALUE 1', 2);
        multiSets2.insert('VALUE 2', 1);

        expect(multiSets1.isSubset(multiSets2)).toBe(true);

        const multiSets3 = new MultiSets();
        multiSets3.insert('VALUE 4', 2);
        multiSets3.insert('VALUE 2', 1);
        
        const multiSets4 = new MultiSets();
        multiSets4.insert('VALUE 1', 2);
        multiSets4.insert('VALUE 2', 1);

        expect(multiSets3.isSubset(multiSets4)).toBe(false);
        done();
    });

    test('should verify if the the both sets are proper subset or not ', (done) => {
        const multiSets1 = new MultiSets();
        multiSets1.insert('VALUE 3', 2);
        multiSets1.insert('VALUE 2', 1);
        
        const multiSets2 = new MultiSets();
        multiSets2.insert('VALUE 1', 2);
        multiSets2.insert('VALUE 2', 1);

        expect(multiSets1.isProperSubset(multiSets2)).toBe(true);
        done();
    });

    test('should verify if the the both sets not are subset', (done) => {
        const multiSets3 = new MultiSets();
        multiSets3.insert('VALUE 4', 2);
        
        const multiSets4 = new MultiSets();
        multiSets4.insert('VALUE 4', 1);
    
        expect(multiSets3.isSubset(multiSets4)).toBe(false);
        done();
    });

    test('should remove values from the multiset', (done) => {
        const multiSets1 = new MultiSets();
        multiSets1.insert('VALUE 3', 2);
        multiSets1.insert('VALUE 2', 4);
        
        expect(multiSets1.remove('VALUE 3', 3)).toBe();
        expect(multiSets1.remove('VALUE 2', 2)).toBe();

        done();
    });

});