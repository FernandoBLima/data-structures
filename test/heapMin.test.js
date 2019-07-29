const HeapMin = require('../src/DataStructures/Heap/heapMin');

describe('HeapMin', () => {
    const heapMin = new HeapMin();
    
    
    test('should get heapMin empty', (done) => {
        expect(heapMin.getSize()).toBe(0);
        expect(heapMin.isEmpty()).toBe(true);
        done();
    });

    test('should create the first element in heapMin', () => {
        heapMin.insert(3);
        expect(heapMin.getSize()).toBe(1);
        expect(heapMin.isEmpty()).toBe(false);
    });

    test('should remove the first element in heapMin', () => {
        heapMin.removeFromTop();
        expect(heapMin.getSize()).toBe(0);
        expect(heapMin.isEmpty()).toBe(true);
    });

    test('in', () => {
        heapMin.insert(3);
        heapMin.insert(1);

    });

    // test('should build the heapMin', () => {
    //     heapMin.build_heap([3,10,11,5,15,17, 13, 12, 14, 8, 21]);
    //     expect(heapMin.getSize()).toBe(11);
    //     expect(heapMin.isEmpty()).toBe(false);
    //     expect(heapMin.displayHeap()).toEqual([3, 5, 11, 10, 8, 17, 13, 12, 14, 15, 21]);
    // });

    // test('should remove the first element in heapMin', () => {
    //     heapMin.removeFromTop();
    //     expect(heapMin.getSize()).toBe(10);
    //     expect(heapMin.isEmpty()).toBe(false);
    //     expect(heapMin.displayHeap()).toEqual([ 5, 8, 11, 10, 15, 17, 13, 12, 14, 21]);
    // });

    // test('should create 4 new elements', () => {
    //     queue.enqueue(6);
    //     queue.enqueue(5);
    //     queue.enqueue(4);
    //     queue.enqueue(3);
    //     expect(queue.getLength()).toBe(5);
    // });

    // test('should get all values', () => {
    //     expect(queue.getValues()).toEqual([ 2,6,5,4,3 ]);
    // });

});