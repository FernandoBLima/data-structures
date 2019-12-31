const Sets = require('../src/DataStructures/Set/set');

describe('Set', () => {
    const set = new Sets();
    
    test('should get the set empty', (done) => {
        expect(set.getCapacity()).toBe(0);
        expect(set.isEmpty()).toBe(true);
        expect(set.remove(1)).toBe();
        expect(set.cleanSet()).toBe();
        expect(set.print());
        done();
    });

    test('should add values', (done) => {
        expect(set.insert(1)).toBe();
        expect(set.insert(2)).toBe();
        expect(set.insert(3)).toBe();
        expect(set.getCapacity()).toBe(3);
        expect(set.isEmpty()).toBe(false);
        expect(set.getAllValues()).toBe(`1 2 3`);
        done();
    });

    test('should remove all values', (done) => {
        expect(set.remove(1)).toBe();
        expect(set.remove(2)).toBe();
        expect(set.remove(3)).toBe();
        expect(set.isEmpty()).toBe(true);
        done();
    });

    test('should verify if contain values', (done) => {
        expect(set.insert(1)).toBe();
        expect(set.insert(2)).toBe();
        expect(set.insert(3)).toBe();
        expect(set.contains(1)).toBe(true);
        expect(set.contains(2)).toBe(true);
        expect(set.contains(3)).toBe(true);
        expect(set.contains(4)).toBe(false);
        done();
    });

    test('should join two sets', (done) => {
        const set1 = new Sets();
        expect(set1.insert(1)).toBe();
        expect(set1.insert(2)).toBe();
        expect(set1.insert(3)).toBe();

        const set2 = new Sets();
        expect(set2.insert(4)).toBe();
        expect(set2.insert(5)).toBe();
        expect(set2.insert(6)).toBe();

        const set3 = set2.union(set1)

        expect(set3.getCapacity()).toBe(6);
        expect(set3.isEmpty()).toBe(false);
        expect(set3.getAllValues()).toBe(`1 2 3 4 5 6`);

        const set4 = new Sets();
        expect(set4.insert(1)).toBe();
        expect(set4.insert(2)).toBe();
        expect(set4.insert(3)).toBe();

        const set5 = new Sets();
        expect(set5.insert(3)).toBe();
        expect(set5.insert(4)).toBe();
        expect(set5.insert(5)).toBe();
        expect(set5.insert(6)).toBe();

        const set6 = set5.union(set4)
        expect(set6.getCapacity()).toBe(7);
        expect(set6.isEmpty()).toBe(false);
        expect(set6.getAllValues()).toBe(`1 2 3 4 5 6`);
        done();
    });

    test('should get all elements that are members of set1 but not members of set2', (done) => {
        const set1 = new Sets();
        expect(set1.insert(1)).toBe();
        expect(set1.insert(2)).toBe();
        expect(set1.insert(3)).toBe();
        expect(set1.insert(4)).toBe();

        const set2 = new Sets();
        expect(set2.insert(1)).toBe();
        expect(set2.insert(3)).toBe();

        const set3 = set1.difference(set2)
        expect(set3.getCapacity()).toBe(2);
        expect(set3.isEmpty()).toBe(false);
        expect(set3.getAllValues()).toBe(`2 4`);
        done();
    });

    test('should get the elements that the sets have "in common".', (done) => {
        const set1 = new Sets();
        expect(set1.insert(1)).toBe();
        expect(set1.insert(2)).toBe();
        expect(set1.insert(3)).toBe();

        const set2 = new Sets();
        expect(set2.insert(1)).toBe();
        expect(set2.insert(5)).toBe();
        expect(set2.insert(6)).toBe();

        const set3 = set1.intersect(set2)
        expect(set3.getCapacity()).toBe(1);
        expect(set3.isEmpty()).toBe(false);
        expect(set3.getAllValues()).toBe(`1`);
        done();
    });

    test('should get the symmetric difference of A and B sets', (done) => {
        const set1 = new Sets();
        set1.insert(1);
        set1.insert(2);
        set1.insert(3);

        const set2 = new Sets();
        set2.insert(1);
        set2.insert(3);
        set2.insert(4);

        var set3 = set1.symmetricDifference(set2);
        expect(set3.getCapacity()).toBe(2);
        expect(set3.getAllValues()).toBe(`2 4`);
        done();
    });

    test('should verify if is exists a subset', (done) => {
        const set1 = new Sets();
        expect(set1.insert(1)).toBe();
        expect(set1.insert(2)).toBe();
        expect(set1.insert(3)).toBe();

        const set2 = new Sets();
        expect(set2.insert(1)).toBe();
        expect(set2.insert(2)).toBe();
        expect(set2.insert(3)).toBe();

        expect(set1.isSubset(set2)).toBe(true);
        done();
    });

    test('should verify if exists a proper subset', (done) => {
        const set1 = new Sets();
        expect(set1.insert(1)).toBe();
        expect(set1.insert(4)).toBe();

        const set2 = new Sets();
        expect(set2.insert(1)).toBe();
        expect(set2.insert(2)).toBe();
        expect(set2.insert(3)).toBe();

        expect(set1.isProperSubset(set2)).toBe(true);
        done();
    });

    test('should clean the set', (done) => {
        expect(set.insert(1)).toBe();
        expect(set.insert(2)).toBe();
        expect(set.cleanSet()).toBe();
        done();
    });

    test('should add all the elements of set t to set s', (done) => {
        const set1 = new Sets();
        set1.insert(1);
        set1.insert(2);
        set1.insert(4);

        const set2 = new Sets();
        set2.insert(1);
        set2.insert(2);
        set2.insert(3);

        expect(set1.insertAll(set2)).toBe();
        expect(set1.getCapacity()).toBe(4);
        done();
    });

    test('should remove all the elements of t from s', (done) => {
        const set1 = new Sets();
        set1.insert(1);
        set1.insert(2);
        set1.insert(4);

        const set2 = new Sets();
        set2.insert(1);
        set2.insert(2);
        set2.insert(3);

        expect(set1.removeAll(set2)).toBe();
        expect(set1.getCapacity()).toBe(1);

        const set3 = new Sets();
        set3.insert(1);

        const set4 = new Sets();
        set4.insert(2);
        expect(set3.removeAll(set4)).toBe();
        expect(set3.getCapacity()).toBe(1);
        done();
    });

    test('should get all subsets of Set', (done) => {
        const set1 = new Sets();
        set1.insert(1);
        set1.insert(2);
        expect(set1.getAllSubsets()).toEqual([[], [ 1 ], [ 2 ], [ 2, 1 ] ]);
        done();
    });

    test('should create another set from another set', (done) => {
        const set1 = new Sets();
        set1.insert(1);
        set1.insert(2);
        expect(set1.createFrom()).toEqual(set1);
        done();
    });

    test('should verify if the sets are disjoint', (done) => {
        const set1 = new Sets();
        expect(set1.insert(5)).toBe();
        expect(set1.insert(4)).toBe();

        const set2 = new Sets();
        expect(set2.insert(1)).toBe();
        expect(set2.insert(2)).toBe();
        expect(set2.insert(3)).toBe();

        expect(set1.disjointSets(set2)).toBe(true);

        expect(set1.insert(1)).toBe();
        expect(set1.disjointSets(set2)).toBe(false);

        done();
    });


});
