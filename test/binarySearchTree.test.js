const BinarySearchTree = require('../src/DataStructures/Tree/binarySearchTree');

describe('BinarySearchTree', () => {
    const binarySearchTree = new BinarySearchTree();

     test('should get binary Tree empty', (done) => {
        expect(binarySearchTree.isEmpty()).toBe(true);
        expect(binarySearchTree.getHeight()).toBe(0);
        expect(binarySearchTree.search(1)).toBe(null);

        expect(binarySearchTree.findNode(1)).toBe(false);
        expect(binarySearchTree.findParent(1)).toBe(false);

        expect(binarySearchTree.findMaximum()).toBe(null);
        expect(binarySearchTree.findMinimum()).toBe(null);

        expect(binarySearchTree.delete()).toBe(false);
        expect(binarySearchTree.isEmpty()).toBe(true);

        expect(binarySearchTree.inOrder()).toBe(null);
        expect(binarySearchTree.preOrder()).toBe(null);
        expect(binarySearchTree.posOrder()).toBe(null);

        expect(binarySearchTree.getLength()).toBe(0);

        expect(binarySearchTree.isComplete()).toBe(true);
        expect(binarySearchTree.isFull()).toBe(true);
        expect(binarySearchTree.isPerfect()).toBe(true);

        expect(binarySearchTree.countNode()).toBe(0);
        expect(binarySearchTree.listLeafNodes()).toBe(null);
        expect(binarySearchTree.levelOrderQueue()).toBe(null);
        done();
    });
    

    test('should add nodes in binary search Tree ', (done) => {
        expect(binarySearchTree.insert(50)).toBe();
        expect(binarySearchTree.insert(25)).toBe();
        expect(binarySearchTree.insert(20)).toBe();
        expect(binarySearchTree.insert(30)).toBe();
        expect(binarySearchTree.insert(75)).toBe();
        expect(binarySearchTree.insert(80)).toBe();
        expect(binarySearchTree.insert(70)).toBe();

        expect(binarySearchTree.search(50)).toBe(50);
        expect(binarySearchTree.search(11)).toBe(null);
        expect(binarySearchTree.search(70)).toBe(70);

        expect(binarySearchTree.findNode(1)).toBe(false);
        expect(binarySearchTree.findNode(75)).not.toBeNull();

        expect(binarySearchTree.countNode()).toBe(7);
        expect(binarySearchTree.findMaximum()).toBe(80);
        expect(binarySearchTree.findMinimum()).toBe(20);

        expect(binarySearchTree.findParent(25)).not.toBeNull();
        expect(binarySearchTree.findParent(100)).toBeNull();

        expect(binarySearchTree.listLeafNodes()).toEqual([ 20, 30, 70, 80 ]);
        expect(binarySearchTree.levelOrderQueue()).toEqual([ 50, 25, 75, 20, 30, 70, 80 ]);

        done();
    });

    test('should test is complete ', (done) => {
        // is not complete
        expect(binarySearchTree.insert(100)).toBe();
        expect(binarySearchTree.insert(200)).toBe();
        expect(binarySearchTree.insert(60)).toBe();
        expect(binarySearchTree.insert(45)).toBe();
        expect(binarySearchTree.insert(90)).toBe();
        expect(binarySearchTree.insert(300)).toBe();
        expect(binarySearchTree.isComplete()).toBe(false);

         // is complete
         binarySearchTree.clear();
         expect(binarySearchTree.insert(100)).toBe();
         expect(binarySearchTree.insert(200)).toBe();
         expect(binarySearchTree.insert(60)).toBe();
         expect(binarySearchTree.insert(45)).toBe();
         expect(binarySearchTree.insert(90)).toBe();
         expect(binarySearchTree.insert(110)).toBe();
         expect(binarySearchTree.isComplete()).toBe(true);
        done();
    });

    test('should test if is full ', (done) => {
        // is not full
        expect(binarySearchTree.insert(100)).toBe();
        expect(binarySearchTree.insert(200)).toBe();
        expect(binarySearchTree.insert(60)).toBe();
        expect(binarySearchTree.insert(90)).toBe();
        expect(binarySearchTree.insert(300)).toBe();
        expect(binarySearchTree.insert(110)).toBe();
        expect(binarySearchTree.insert(105)).toBe();
        expect(binarySearchTree.insert(115)).toBe();
        expect(binarySearchTree.isFull()).toBe(false);

         // is full
        binarySearchTree.clear();
        expect(binarySearchTree.insert(100)).toBe();
        expect(binarySearchTree.isFull()).toBe(true);

         binarySearchTree.clear();
         expect(binarySearchTree.insert(100)).toBe();
         expect(binarySearchTree.insert(200)).toBe();
         expect(binarySearchTree.insert(50)).toBe();
         expect(binarySearchTree.insert(150)).toBe();
         expect(binarySearchTree.insert(300)).toBe();
         expect(binarySearchTree.insert(125)).toBe();
         expect(binarySearchTree.insert(175)).toBe();
         expect(binarySearchTree.isFull()).toBe(true);
        done();
    });

    test('should test if is percfect ', (done) => {
        // is percfect
        binarySearchTree.clear();
        expect(binarySearchTree.insert(100)).toBe();
        expect(binarySearchTree.isPerfect()).toBe(true);

        // is percfect
        binarySearchTree.clear();
        expect(binarySearchTree.insert(100)).toBe();
        expect(binarySearchTree.insert(50)).toBe();
        expect(binarySearchTree.insert(25)).toBe();
        expect(binarySearchTree.insert(75)).toBe();
        expect(binarySearchTree.insert(200)).toBe();
        expect(binarySearchTree.insert(175)).toBe();
        expect(binarySearchTree.insert(250)).toBe();
        expect(binarySearchTree.isPerfect()).toBe(true);

         // is not percfect
         binarySearchTree.clear();
         expect(binarySearchTree.insert(100)).toBe();
         expect(binarySearchTree.insert(200)).toBe();
         expect(binarySearchTree.insert(50)).toBe();
         expect(binarySearchTree.insert(150)).toBe();
         expect(binarySearchTree.insert(125)).toBe();
         expect(binarySearchTree.insert(175)).toBe();
         expect(binarySearchTree.isPerfect()).toBe(false);
        done();
    });

    test('should get tree traversal', (done) => {
        binarySearchTree.clear();
        expect(binarySearchTree.insert(30)).toBe();
        expect(binarySearchTree.insert(15)).toBe();
        expect(binarySearchTree.insert(45)).toBe();
        expect(binarySearchTree.insert(10)).toBe();
        expect(binarySearchTree.insert(20)).toBe();
        expect(binarySearchTree.insert(5)).toBe();
        expect(binarySearchTree.inOrder()).toEqual([ 5, 10, 15, 20, 30, 45 ]);
        expect(binarySearchTree.preOrder()).toEqual([ 30, 15, 10, 5, 20, 45 ]);
        expect(binarySearchTree.posOrder()).toEqual([ 5, 10, 20, 15, 45, 30 ]);
        done();
    });

    test('should to remove a value', (done) => {
        binarySearchTree.clear();
        expect(binarySearchTree.insert(100)).toBe();
        expect(binarySearchTree.delete(100)).toBe(true);

        binarySearchTree.clear();
        expect(binarySearchTree.insert(100)).toBe();
        expect(binarySearchTree.insert(50)).toBe();
        expect(binarySearchTree.insert(150)).toBe();
        expect(binarySearchTree.insert(25)).toBe();
        expect(binarySearchTree.insert(75)).toBe();
        expect(binarySearchTree.insert(125)).toBe();
        expect(binarySearchTree.insert(175)).toBe();
        expect(binarySearchTree.insert(165)).toBe();
        expect(binarySearchTree.levelOrderQueue()).toEqual([ 100, 50, 150, 25, 75, 125, 175, 165 ]);
        expect(binarySearchTree.delete(175)).toBe(true);
        expect(binarySearchTree.levelOrderQueue()).toEqual([ 100, 50, 150, 25, 75, 125, 165 ]);
        expect(binarySearchTree.delete(25)).toBe(true);
        expect(binarySearchTree.levelOrderQueue()).toEqual([ 100, 50, 150, 75, 125, 165 ]);
        expect(binarySearchTree.delete(50)).toBe(true);
        expect(binarySearchTree.levelOrderQueue()).toEqual([ 100, 75, 150, 125, 165 ]);
        expect(binarySearchTree.delete(100)).toBe(true);
        expect(binarySearchTree.levelOrderQueue()).toEqual([ 125, 75, 150, 165 ]);
        done();
    });




});