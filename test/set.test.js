const Sets = require('../src/DataStructures/Set/set');

describe('Set', () => {
    const set = new Sets();
    
    test('should the set be empty', (done) => {
        expect(set.getLength()).toBe(0);
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
        expect(set.getLength()).toBe(3);
        expect(set.isEmpty()).toBe(false);
        done();
    });

    test('should remove values', (done) => {
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

    test('should union two sets', (done) => {
        const set1 = new Sets();
        expect(set1.insert(1)).toBe();
        expect(set1.insert(2)).toBe();
        expect(set1.insert(3)).toBe();

        const set2 = new Sets();
        expect(set2.insert(4)).toBe();
        expect(set2.insert(5)).toBe();
        expect(set2.insert(6)).toBe();

        const set3 = set1.union(set2)
        expect(set3.getLength()).toBe(6);
        expect(set3.isEmpty()).toBe(false);
        done();
    });

    test('should intersect two sets', (done) => {
        const set1 = new Sets();
        expect(set1.insert(1)).toBe();
        expect(set1.insert(2)).toBe();
        expect(set1.insert(3)).toBe();

        const set2 = new Sets();
        expect(set2.insert(1)).toBe();
        expect(set2.insert(5)).toBe();
        expect(set2.insert(6)).toBe();

        const set3 = set1.intersect(set2)
        expect(set3.getLength()).toBe(1);
        expect(set3.isEmpty()).toBe(false);
        done();
    });


    test('should verify if is a subset', (done) => {
        const set1 = new Sets();
        expect(set1.insert(1)).toBe();
        expect(set1.insert(2)).toBe();

        const set2 = new Sets();
        expect(set2.insert(1)).toBe();
        expect(set2.insert(2)).toBe();
        expect(set2.insert(3)).toBe();

        expect(set.isSubset(set1)).toBe(true);
        done();
    });


    test('should clean the set', (done) => {
        expect(set.insert(1)).toBe();
        expect(set.insert(2)).toBe();
        expect(set.cleanSet()).toBe();
        done();
    });

    test('should get the difference between the sets', (done) => {
        const set1 = new Sets();
        set1.insert(1);
        set1.insert(2);
        set1.insert(4);

        const set2 = new Sets();
        set2.insert(1);
        set2.insert(2);
        set2.insert(3);

        var set3 = set1.difference(set2);
        expect(set3.getLength()).toBe(1);

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
        expect(set1.getLength()).toBe(4);

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
        expect(set1.getLength()).toBe(1);

        const set3 = new Sets();
        set3.insert(1);

        const set4 = new Sets();
        set4.insert(2);
        expect(set3.removeAll(set4)).toBe();
        expect(set3.getLength()).toBe(1);

        done();
    });


    test('should remove all the elements from s that are not in t', (done) => {
        const set1 = new Sets();
        set1.insert(1);
        set1.insert(2);
        set1.insert(4);

        const set2 = new Sets();
        set2.insert(1);
        set2.insert(2);
        set2.insert(3);

        expect(set1.retainAll(set2)).toBe();
        expect(set1.getLength()).toBe(2);

        const set3 = new Sets();
        set3.insert(1);

        const set4 = new Sets();
        set4.insert(2);
        expect(set3.retainAll(set4)).toBe();
        expect(set3.getLength()).toBe(0);

        done();
    });


});
