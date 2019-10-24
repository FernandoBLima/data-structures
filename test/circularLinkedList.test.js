const CircularLinkedList = require('../src/DataStructures/LinkedList/circularLinkedList');

describe('Circular Linked List', () => {
    const circularLinkedList = new CircularLinkedList();
    
    test('should test all empty list scenarios', (done) => {
        expect(circularLinkedList.getLength()).toBe(0);
        expect(circularLinkedList.isEmpty()).toBe(true);
        expect(circularLinkedList.removeAtHead()).toBe(false);
        expect(circularLinkedList.removeAtTail()).toBe(false);
        expect(circularLinkedList.search()).toBe(false);
        expect(circularLinkedList.search(1)).toBe(false);
        expect(circularLinkedList.addAtIndex(1, 3)).toBe(false);
        expect(circularLinkedList.removeValue(1)).toBe(false);
        expect(circularLinkedList.search(1)).toBe(false);
        expect(circularLinkedList.getAtIndex(4)).toBe(false);
        expect(circularLinkedList.getAtIndex()).toBe(false);
        expect(circularLinkedList.addAtHead()).toBe();
        expect(circularLinkedList.addAtTail()).toBe();
        expect(circularLinkedList.addAtIndex(null, null)).toBe();
        done();
    });

    test('should add at head the first element', (done) => {
        expect(circularLinkedList.addAtHead(1)).toBe();
        expect(circularLinkedList.getLength()).toBe(1);
        expect(circularLinkedList.isEmpty()).toBe(false);
        expect(circularLinkedList.search(1)).toBe(true);
        expect(circularLinkedList.getHead()).toBe(1);
        expect(circularLinkedList.getAtIndex(0)).toBe(1);
        expect(circularLinkedList.getValues()).toEqual([1]);

        done();
    });
    
    test('should remove the first element by removeValue function', (done) => {
        expect(circularLinkedList.removeValue(1)).toBe(true);
        expect(circularLinkedList.getLength()).toBe(0);
        done();
    });

    test('should add the first element by addAtIndex function', (done) => {
        expect(circularLinkedList.addAtIndex(0, 0)).toBe(true);
        expect(circularLinkedList.getLength()).toBe(1);
        expect(circularLinkedList.removeValue(0)).toBe(true);
        expect(circularLinkedList.getLength()).toBe(0);

        done();
    });

    test('should add an element by addAtTail function', (done) => {
        expect(circularLinkedList.addAtTail(1)).toBe();
        expect(circularLinkedList.addAtTail(2)).toBe();
        expect(circularLinkedList.addAtTail(3)).toBe();
        expect(circularLinkedList.getValues()).toEqual([1,2,3]);

        expect(circularLinkedList.removeValue(3)).toBe(true);
        expect(circularLinkedList.removeValue(2)).toBe(true);
        expect(circularLinkedList.removeValue(1)).toBe(true);
        done();
    });

    test('should remove the first element by removeAtTail function', (done) => {
        expect(circularLinkedList.addAtHead(1)).toBe();
        expect(circularLinkedList.removeAtTail()).toBe();
        done();
    });

    test('should remove the first element by removeAtHead function', (done) => {
        circularLinkedList.addAtHead(1);
        expect(circularLinkedList.removeAtHead()).toBe();
        done();
    });

    test('should add 5 values at head', (done) => {
        circularLinkedList.addAtHead(3); // 3
        circularLinkedList.addAtHead(6); // 6 - 3
        expect(circularLinkedList.addAtHead(4)).toBe(); // 4 - 6 - 3
        circularLinkedList.addAtHead(44); // 44 - 4 - 6 - 3
        circularLinkedList.addAtHead(24); // 24 - 44 - 4 - 6 - 3
        circularLinkedList.addAtHead(84); // 84 - 24 - 44 - 4 - 6 - 3
        expect(circularLinkedList.getLength()).toBe(6);
        expect(circularLinkedList.isEmpty()).toBe(false);
        done();
    });

    test('should search by index', (done) => {
        expect(circularLinkedList.search(4)).toBe(true);
        expect(circularLinkedList.search(84)).toBe(true);
        expect(circularLinkedList.search(3)).toBe(true);
        expect(circularLinkedList.search(45)).toBe(false);
        done();
    });

    test('should get by index', (done) => {
        expect(circularLinkedList.getAtIndex(2)).toBe(44);
        expect(circularLinkedList.getAtIndex(0)).toBe(84);
        expect(circularLinkedList.getAtIndex(3)).toBe(4);
        expect(circularLinkedList.getAtIndex(9)).toBe(false);
        done();
    });

    test('should test all addAtIndex scenarios', (done) => {
        expect(circularLinkedList.addAtIndex(2, 1)).toBe(true); // 2, 3, 6, 4, 44, 24
        expect(circularLinkedList.addAtIndex(23, 2)).toBe(true); // 2, 23, 3, 6, 4, 44, 24
        expect(circularLinkedList.addAtIndex(77, 55)).toBe(false);
        done();
    });

    test('should test all removeValues scenarios ', (done) => {
        expect(circularLinkedList.removeValue(77)).toBe(false);
        expect(circularLinkedList.removeValue(2)).toBe(true);
        expect(circularLinkedList.removeValue(24)).toBe(true);
        expect(circularLinkedList.removeValue(6)).toBe(true);
        done();
    });

    test('should remove the first element', (done) => {
        circularLinkedList.removeAtHead();
        expect(circularLinkedList.removeAtTail()).toBe();
        expect(circularLinkedList.getLength()).toBe(3);
        expect(circularLinkedList.getHead()).toBe(23);
        done();
    });


});