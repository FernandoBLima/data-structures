
const PriorityHeap = require('../src/DataStructures/PriorityQueue/priorityHeap');

describe('PriorityHeap', () => {
    const priorityHeap = new PriorityHeap();
    
    test('should get priority Heap empty', (done) => {
        expect(priorityHeap.getSize()).toBe(0);
        expect(priorityHeap.isEmpty()).toBe(true);
        expect(priorityHeap.getFirstElement()).toBe(false);
        done();
    });

    test('should create the first element in Priority Queue', () => {
        priorityHeap.insert('Value 1', 1);
        expect(priorityHeap.getSize()).toBe(1);
        expect(priorityHeap.isEmpty()).toBe(false);
        expect(priorityHeap.getFirstElement()).toBe('Value 1');
    });

    test('should add and delete the new element in Priority Queue', () => {
        priorityHeap.insert('Value 2', 2);
        expect(priorityHeap.getSize()).toBe(2);
        priorityHeap.removeFromTop();
        expect(priorityHeap.getSize()).toBe(1);
    });

    test('should create 4 new elements', () => {
        priorityHeap.insert('Value 2', 2);
        priorityHeap.insert('Value 3', 3);
        priorityHeap.insert('Value 4', 4);
        priorityHeap.insert('Value 6', 6);
        expect(priorityHeap.getSize()).toBe(5);
    });


});