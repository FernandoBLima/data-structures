const HeapMax = require('../src/DataStructures/Heap/heapMax');

describe('HeapMax', () => {
    const heapMax = new HeapMax();
    
    test('should get heapMax empty', (done) => {
        expect(heapMax.getSize()).toBe(0);
        expect(heapMax.isEmpty()).toBe(true);
        done();
    });

    test('should create the first element in heapMin', (done) => {
        expect(heapMax.insert(3)).toBe();
        expect(heapMax.getSize()).toBe(1);
        expect(heapMax.isEmpty()).toBe(false);
        done();
    });

    test('should remove the first element in heapMin', (done) => {
        heapMax.removeFromTop();
        expect(heapMax.getSize()).toBe(0);
        expect(heapMax.isEmpty()).toBe(true);
        done();
    });

    test('adding new elements', (done) => {
        expect(heapMax.insert(9)).toBe();
        expect(heapMax.insert(10)).toBe();
        expect(heapMax.insert(6)).toBe();
        expect(heapMax.insert(3)).toBe();
        expect(heapMax.insert(1)).toBe();
        expect(heapMax.insert(5)).toBe();
        expect(heapMax.insert(4)).toBe();
        expect(heapMax.insert(2)).toBe();
        expect(heapMax.insert(7)).toBe();
        expect(heapMax.insert(8)).toBe();
        expect(heapMax.displayHeap()).toEqual([10, 9, 6, 7, 8, 5, 4, 2, 3, 1]);
        expect(heapMax.getSize()).toBe(10);
        expect(heapMax.isEmpty()).toBe(false);

        expect(heapMax.hasParentByIndex(0)).toBe(false);
        expect(heapMax.hasParentByIndex(7)).toBe(true);
        expect(heapMax.hasParentByIndex(90)).toBe(false);

        expect(heapMax.hasLeftChildByIndex(0)).toBe(true);
        expect(heapMax.hasLeftChildByIndex(3)).toBe(true);
        expect(heapMax.hasLeftChildByIndex(7)).toBe(false);

        expect(heapMax.hasRightChildByIndex(0)).toBe(true);
        expect(heapMax.hasRightChildByIndex(3)).toBe(true);
        expect(heapMax.hasRightChildByIndex(7)).toBe(false);

        expect(heapMax.getLeftChildValueByIndex(2)).toBe(5);
        expect(heapMax.getLeftChildValueByIndex(8)).toBe(undefined);

        expect(heapMax.getRightChildValueByIndex(2)).toBe(4);
        expect(heapMax.getRightChildValueByIndex(8)).toBe(undefined);

        done();
    });

    test('removing an element form the top', (done) => {
        expect(heapMax.removeFromTop()).toBe();
        expect(heapMax.displayHeap()).toEqual([9, 8, 6, 7, 1, 5, 4, 2, 3]);
        done();
    });

    test('removing an element form the top', (done) => {
        expect(heapMax.getLastElement()).toBe(3);
        expect(heapMax.peek()).toBe(9);
        done();
    });

    test('building the heap using the buildHeap function', (done) => {
        expect(heapMax.clear()).toBe();
        expect(heapMax.build_heap([1,2,3])).toBe();
        expect(heapMax.displayHeap()).toEqual([3,1,2]);
        done();
    });

    test('building the heap using the buildHeap function', (done) => {
        const heapMax = new HeapMax();
        expect(heapMax.insert(10)).toBe();
        expect(heapMax.insert(5)).toBe();
        expect(heapMax.insert(6)).toBe();
        expect(heapMax.insert(2)).toBe();

        const heapMax2 = new HeapMax();
        expect(heapMax2.insert(12)).toBe();
        expect(heapMax2.insert(7)).toBe();
        expect(heapMax2.insert(9)).toBe();

        expect(heapMax.mergeHeaps(heapMax2)).toBe();

        expect(heapMax.displayHeap()).toEqual([12, 10, 9, 2, 5, 7, 6 ]);
        done();
    });

});