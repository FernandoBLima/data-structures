const Tree = require('../src/DataStructures/Tree/tree');

describe('Tree', () => {
    const tree = new Tree();
    
    test('should get binary Tree empty', (done) => {
        expect(tree.getSize()).toBe(0);
        expect(tree.isEmpty()).toBe(true);
        done();
    });

    test('should add elements', (done) => {
        expect(tree.add(1)).toBe();
        expect(tree.add(2)).toBe();
        expect(tree.add(3)).toBe();
        expect(tree.getSize()).toBe(3);
        expect(tree.isEmpty()).toBe(false);
        done();
    });

    test('should add more elements on the left', (done) => {
        expect(tree.add(4, 3)).toBe();
        expect(tree.add(5, 3)).toBe();
        expect(tree.add(6, 3)).toBe();
        expect(tree.add(7, 6)).toBe();
        expect(tree.getSize()).toBe(7);
        expect(tree.isEmpty()).toBe(false);
        done();
    });

    test('should add more elements on the left', (done) => {
        expect(tree.remove(6)).toBe();
        expect(tree.getSize()).toBe(5);
        expect(tree.getValue(1)).toBe(1);
        // expect(tree.getValue(3)).toBe(3);
        expect(tree.isEmpty()).toBe(false);
        done();
    });

});