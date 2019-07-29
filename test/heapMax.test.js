const HeapMax = require('../src/DataStructures/Heap/heapMax');

describe('HeapMax', () => {
    const heapMax = new HeapMax();
    
    
    test('should get heapMax empty', (done) => {
        expect(heapMax.getSize()).toBe(0);
        expect(heapMax.isEmpty()).toBe(true);
        done();
    });

    test('should create the first element in heapMax', () => {
        heapMax.insert(3);
        expect(heapMax.getSize()).toBe(1);
        expect(heapMax.isEmpty()).toBe(false);
    });

    test('should remove the first element in heapMax', () => {
        heapMax.removeFromTop();
        expect(heapMax.getSize()).toBe(0);
        expect(heapMax.isEmpty()).toBe(true);
    });

    // test('should build the heapMax', () => {
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


});