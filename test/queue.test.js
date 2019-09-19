const Queue = require('../src/DataStructures/Queue/queue');

describe('Queue', () => {
    const queue = new Queue();
    
    test('should get queue empty', (done) => {
        expect(queue.getLength()).toBe(0);
        expect(queue.isEmpty()).toBe(true);
        expect(queue.dequeue()).toBe(false);
        expect(queue.peek()).toBe(false);
        done();
    });

    test('should create the first element in queue', () => {
        queue.enqueue(1);
        expect(queue.getLength()).toBe(1);
        expect(queue.peek()).toBe(1);
        expect(queue.isEmpty()).toBe(false);
    });

    test('should create and delete the new element in queue', () => {
        queue.enqueue(2);
        expect(queue.getLength()).toBe(2);
        queue.dequeue();
        expect(queue.getLength()).toBe(1);
    });

    test('should create 4 new elements', () => {
        queue.enqueue(6);
        queue.enqueue(5);
        queue.enqueue(4);
        queue.enqueue(3);
        expect(queue.getLength()).toBe(5);
    });

    test('should get all values', () => {
        expect(queue.getValues()).toEqual([ 2,6,5,4,3 ]);
    });

});