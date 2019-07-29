const BinaryTree = require('../src/DataStructures/Tree/binaryTree');

describe('BinaryTree', () => {
    const binaryTree = new BinaryTree();
    
    test('should get binary Tree empty', (done) => {
        expect(binaryTree.getLength()).toBe(0);
        expect(binaryTree.getHeight()).toBe(0);
        expect(binaryTree.isEmpty()).toBe(true);
        expect(binaryTree.findNode(1)).toBe(false);
        expect(binaryTree.posOrder()).toEqual();
        expect(binaryTree.preOrder()).toEqual();
        expect(binaryTree.inOrder()).toEqual();
        done();
    });

    test('should insert a value in binary Tree', (done) => {
        expect(binaryTree.insert(23)).toBe();
        binaryTree.insert(55);
        binaryTree.insert(21);
        binaryTree.insert(45);
        binaryTree.insert(14);
        expect(binaryTree.getLength()).toBe(5);
        expect(binaryTree.findParent(23)).toBe(null);
        expect(binaryTree.isEmpty()).toBe(false);
        expect(binaryTree.search(55)).toBe(true);
        expect(binaryTree.search(66)).toBe(false);
        done();
    });

    test('should get in Order', (done) => {
        expect(binaryTree.inOrder()).toEqual([14, 21, 23, 45, 55]);
        done();
    });

    test('should get in Order', (done) => {
        expect(binaryTree.posOrder()).toEqual([14, 21, 45, 55, 23]);
        done();
    });

    test('should get pre Order', (done) => {
        expect(binaryTree.preOrder()).toEqual([23, 21, 14, 55, 45]);
        done();
    });

    test('should get the minimum value', (done) => {
        expect(binaryTree.findMinimum()).toBe(14);
        done();
    });

    test('should get the maximum value', (done) => {
        expect(binaryTree.findMaximum()).toBe(55);
        done();
    });

    test('should delete value', (done) => {
        expect(binaryTree.delete(21)).toBe(true);
        expect(binaryTree.delete(435)).toBe(false);
        done();
    });

});