const HeapMin = require('../src/DataStructures/Heap/heapMin');

describe('HeapMin', () => {
    const heapMin = new HeapMin();
    
    test('should get heapMin empty', (done) => {
        expect(heapMin.getSize()).toBe(0);
        expect(heapMin.isEmpty()).toBe(true);
        // expect(heapMin.removeFromTop(13)).toBe('The Heap is Empty');
        // expect(heapMin.remove(13)).toBe('Value not found!');
        done();
    });

    test('should create the first element in heapMin', (done) => {
        expect(heapMin.insert(3)).toBe();
        expect(heapMin.getSize()).toBe(1);
        expect(heapMin.isEmpty()).toBe(false);
        done();
    });

    test('should remove the first element in heapMin', (done) => {
        heapMin.removeFromTop();
        expect(heapMin.getSize()).toBe(0);
        expect(heapMin.isEmpty()).toBe(true);
        done();
    });

    test('adding new elements', (done) => {
        expect(heapMin.insert(2)).toBe();
        expect(heapMin.insert(3)).toBe();
        expect(heapMin.insert(4)).toBe();
        expect(heapMin.insert(5)).toBe();
        expect(heapMin.insert(1)).toBe();
        expect(heapMin.displayHeap()).toEqual([1, 2, 4, 5, 3]);
        expect(heapMin.getSize()).toBe(5);
        expect(heapMin.isEmpty()).toBe(false);

        expect(heapMin.hasParentByIndex(0)).toBe(false);
        expect(heapMin.hasParentByIndex(1)).toBe(true);
        expect(heapMin.hasParentByIndex(10)).toBe(false);
        expect(heapMin.hasParentByIndex(5)).toBe(false);

        expect(heapMin.hasLeftChildByIndex(0)).toBe(true);
        expect(heapMin.hasLeftChildByIndex(1)).toBe(true);
        expect(heapMin.hasLeftChildByIndex(2)).toBe(false);

        expect(heapMin.hasRightChildByIndex(0)).toBe(true);
        expect(heapMin.hasRightChildByIndex(1)).toBe(true);
        expect(heapMin.hasRightChildByIndex(2)).toBe(false);

        expect(heapMin.getLeftChildValueByIndex(0)).toBe(2);
        expect(heapMin.getLeftChildValueByIndex(2)).toBe(undefined);

        expect(heapMin.getRightChildValueByIndex(0)).toBe(4);
        expect(heapMin.getRightChildValueByIndex(2)).toBe(undefined);

        done();
    });

    test('removing an element form the top', (done) => {
        expect(heapMin.removeFromTop()).toBe();
        expect(heapMin.displayHeap()).toEqual([2, 3, 4, 5]);
        done();
    });

    test('removing an element form the top', (done) => {
        expect(heapMin.getLastElement()).toBe(5);
        expect(heapMin.peek()).toBe(2);
        done();
    });

    test('building the heap using the buildHeap function', (done) => {
        expect(heapMin.clear()).toBe();
        expect(heapMin.build_heap([1,2,3])).toBe();
        expect(heapMin.displayHeap()).toEqual([1,2,3]);
        done();
    });

});