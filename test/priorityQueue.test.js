
const PriorityQueue = require('../src/DataStructures/PriorityQueue/priorityQueue');

describe('PriorityQueue', () => {
    const priorityQueue = new PriorityQueue();
    
    test('should get Priority Queue empty', (done) => {
        expect(priorityQueue.getLength()).toBe(0);
        expect(priorityQueue.isEmpty()).toBe(true);
        expect(priorityQueue.getFirstElement()).toBe(false);
        done();
    });

    test('should create the first element in Priority Queue', () => {
        priorityQueue.enqueue('Value 1', 1);
        expect(priorityQueue.getLength()).toBe(1);
        expect(priorityQueue.isEmpty()).toBe(false);
        expect(priorityQueue.getFirstElement()).toBe('Value 1');
    });

    test('should add and delete the new element in Priority Queue', () => {
        priorityQueue.enqueue('Value 2', 2);
        expect(priorityQueue.getLength()).toBe(2);
        priorityQueue.dequeue();
        expect(priorityQueue.getLength()).toBe(1);
    });

    test('should create 4 new elements', () => {
        priorityQueue.enqueue('Value 2', 2);
        priorityQueue.enqueue('Value 3', 3);
        priorityQueue.enqueue('Value 4', 4);
        priorityQueue.enqueue('Value 6', 6);
        expect(priorityQueue.getLength()).toBe(5);
    });

    test('should create 4 new elements', () => {
        priorityQueue.enqueue('Value 5', 5);
        expect(priorityQueue.getLength()).toBe(6);
    });

});