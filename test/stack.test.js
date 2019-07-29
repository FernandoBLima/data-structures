const Stack = require('../src/DataStructures/Stack/stack');

describe('Stack', () => {
    const stack = new Stack();
    
    test('should get stack empty', (done) => {
        expect(stack.getLength()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
        expect(stack.pop()).toBe(false);
        done();
    });

    test('should create the first element in stack', () => {
        stack.push(1);
        expect(stack.getLength()).toBe(1);
        expect(stack.isEmpty()).toBe(false);
    });

    test('should create and delete the new element in stack', () => {
        stack.push(2);
        expect(stack.getLength()).toBe(2);
        stack.pop();
        expect(stack.getLength()).toBe(1);
    });

    test('should create 4 new elements', () => {
        stack.push(6);
        stack.push(5);
        stack.push(4);
        stack.push(3);
        expect(stack.getLength()).toBe(5);
    });

    test('should get all values', () => {
        expect(stack.getValues()).toEqual([ 3,4,5,6,1 ]);
    });

    
});