const DoublyLinkedList = require('../src/DataStructures/LinkedList/doublyLinkedList');

describe('Doubly Linked List', () => {
    const doublyLinkedList = new DoublyLinkedList();
    
    test('should test all empty list scenarios', (done) => {
        expect(doublyLinkedList.getLength()).toBe(0);
        expect(doublyLinkedList.isEmpty()).toBe(true);
        expect(doublyLinkedList.removeAtHead()).toBe(false);
        expect(doublyLinkedList.removeAtTail()).toBe(false);
        expect(doublyLinkedList.search(1)).toBe(false);
        expect(doublyLinkedList.addAtIndex(1, 3)).toBe(false);
        expect(doublyLinkedList.removeValue(1)).toBe(false);
        expect(doublyLinkedList.reverse()).toBe();
        expect(doublyLinkedList.search(1)).toBe(false);
        expect(doublyLinkedList.getAtIndex(4)).toBe(false);
        expect(doublyLinkedList.addAtHead()).toBe();
        expect(doublyLinkedList.addAtTail()).toBe();
        expect(doublyLinkedList.addAtIndex(null, null)).toBe();
        done();
    });

    test('should add at head the first element', (done) => {
        expect(doublyLinkedList.addAtHead(1)).toBe();
        expect(doublyLinkedList.getLength()).toBe(1);
        expect(doublyLinkedList.isEmpty()).toBe(false);
        expect(doublyLinkedList.search(1)).toBe(true);
        expect(doublyLinkedList.getHead()).toBe(1);
        expect(doublyLinkedList.getAtIndex(0)).toBe(1);
        done();
    });
    
    test('should remove the first element by removeValue function', (done) => {
        expect(doublyLinkedList.removeValue(1)).toBe(true);
        expect(doublyLinkedList.getLength()).toBe(0);
        done();
    });

    test('should add an element by addAtTail function', (done) => {
        expect(doublyLinkedList.addAtTail(1)).toBe();
        expect(doublyLinkedList.removeValue(1)).toBe(true);
        done();
    });

    test('should remove the first element by removeAtTail function', (done) => {
        doublyLinkedList.addAtHead(1);
        expect(doublyLinkedList.removeAtTail()).toBe();
        done();
    });

    test('should remove the first element by removeAtHead function', (done) => {
        doublyLinkedList.addAtHead(1);
        expect(doublyLinkedList.removeAtHead()).toBe();
        done();
    });


    test('should add 5 values at head', (done) => {
        doublyLinkedList.addAtHead(3);
        doublyLinkedList.addAtHead(6); // 6 - 3
        expect(doublyLinkedList.addAtHead(4)).toBe(); // 4 - 6 - 3
        doublyLinkedList.addAtHead(44); // 44 - 4 - 6 - 3
        doublyLinkedList.addAtHead(24); // 24 - 44 - 4 - 6 - 3
        doublyLinkedList.addAtHead(84); // 84 - 24 - 44 - 4 - 6 - 3
        expect(doublyLinkedList.getLength()).toBe(6);
        expect(doublyLinkedList.getValues()).toEqual([ 84, 24, 44, 4, 6, 3]);
        done();
    });
    

    test('should test all search scenarios', (done) => {
        expect(doublyLinkedList.search(84)).toBe(true);
        expect(doublyLinkedList.search(3)).toBe(true);
        expect(doublyLinkedList.search(44)).toBe(true);
        expect(doublyLinkedList.search(45)).toBe(false);
        expect(doublyLinkedList.search(5)).toBe(false);
        done();
    });

    test('should test get by index scenarios', (done) => {
        expect(doublyLinkedList.getAtIndex(2)).toBe(44);
        expect(doublyLinkedList.getAtIndex(2)).toBe(44);
        expect(doublyLinkedList.getAtIndex(5)).toBe(3);
        expect(doublyLinkedList.getAtIndex(9)).toBe(false);
        done();
    });

    test('should test all removeValue scenarios', (done) => {
        expect(doublyLinkedList.getValues()).toEqual([ 84, 24, 44, 4, 6, 3]);
        expect(doublyLinkedList.removeValue(4)).toBe(true);
        expect(doublyLinkedList.removeValue(24)).toBe(true);
        expect(doublyLinkedList.removeValue(84)).toBe(true);
        expect(doublyLinkedList.removeValue(3)).toBe(true);
        expect(doublyLinkedList.removeValue(333)).toBe(false);
        expect(doublyLinkedList.getValues()).toEqual([44, 6 ]);
        done();
    });

    test('should test all addAtIndex scenarios', (done) => {
        expect(doublyLinkedList.getValues()).toEqual([44, 6 ]);
        expect(doublyLinkedList.addAtIndex(2, 0)).toBe(true); // 2, 44, 6
        expect(doublyLinkedList.addAtIndex(23, 1)).toBe(true); // 2, 23, 44, 6
        expect(doublyLinkedList.addAtIndex(99, 4)).toBe(true); // 2, 23, 44, 6, 99
        expect(doublyLinkedList.addAtIndex(77, 55)).toBe(false);
        expect(doublyLinkedList.getValues()).toEqual([2, 23, 44, 6, 99 ]);
        done();
    });

    test('should tranform the list in reverse ', (done) => {
        doublyLinkedList.reverse();
        expect(doublyLinkedList.getValues()).toEqual([ 99, 6, 44, 23, 2]);
        done();
    });



});