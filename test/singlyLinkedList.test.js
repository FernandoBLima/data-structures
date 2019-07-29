const SinglyLinkedList = require('../src/DataStructures/LinkedList/singlyLinkedList');

describe('Singly Linked List', () => {
    const singlyLinkedList = new SinglyLinkedList();
    
    test('should test all empty list scenarios', (done) => {
        expect(singlyLinkedList.getLength()).toBe(0);
        expect(singlyLinkedList.isEmpty()).toBe(true);
        expect(singlyLinkedList.removeAtHead()).toBe(false);
        expect(singlyLinkedList.getHead()).toBe(false);
        expect(singlyLinkedList.search(1)).toBe(false);
        expect(singlyLinkedList.addAtIndex(1, 3)).toBe(false);
        expect(singlyLinkedList.removeValue(1)).toBe(false);
        expect(singlyLinkedList.reverse()).toBe();
        expect(singlyLinkedList.getAtIndex(4)).toBe(false);
        done();
    });

    test('should add the first element at head', (done) => {
        singlyLinkedList.addAtHead(1);
        expect(singlyLinkedList.getLength()).toBe(1);
        expect(singlyLinkedList.getHead()).toBe(1);
        expect(singlyLinkedList.removeValue(1)).toBe(true);
        done();
    });

    test('should add 5 values at head', (done) => {
        singlyLinkedList.addAtHead(3);
        singlyLinkedList.addAtHead(6); // 6 - 3
        singlyLinkedList.addAtHead(4); // 4 - 6 - 3
        singlyLinkedList.addAtHead(44); // 44 - 4 - 6 - 3
        singlyLinkedList.addAtHead(24); // 24 - 44 - 4 - 6 - 3
        singlyLinkedList.addAtHead(84); // 84 - 24 - 44 - 4 - 6 - 3
        expect(singlyLinkedList.getLength()).toBe(6);
        expect(singlyLinkedList.getValues()).toEqual([ 84, 24, 44, 4, 6, 3]);
        expect(singlyLinkedList.isEmpty()).toBe(false);
        done();
    });

    test('should test all search scenarios', (done) => {
        expect(singlyLinkedList.search(4)).toBe(true);
        expect(singlyLinkedList.search(84)).toBe(true);
        expect(singlyLinkedList.search(3)).toBe(true);
        expect(singlyLinkedList.search(45)).toBe(false);
        done();
    });

    test('should test get by index scenarios', (done) => {
        expect(singlyLinkedList.getAtIndex(2)).toBe(44);
        expect(singlyLinkedList.getAtIndex(0)).toBe(84);
        expect(singlyLinkedList.getAtIndex(3)).toBe(4);
        expect(singlyLinkedList.getAtIndex(9)).toBe(false);
        done();
    });

    test('should remove the first element', (done) => {
        singlyLinkedList.removeAtHead();
        expect(singlyLinkedList.getLength()).toBe(5);
        expect(singlyLinkedList.getValues()).toEqual([ 24, 44, 4, 6, 3 ]);
        expect(singlyLinkedList.getHead()).toBe(24);
        done();
    });

    test('should tranform the list in reverse ', () => {
        singlyLinkedList.reverse();
        expect(singlyLinkedList.getValues()).toEqual([ 3, 6, 4, 44, 24]);
    });

    test('should test all addAtIndex scenarios', (done) => {
        expect(singlyLinkedList.addAtIndex(2, 1)).toBe(true); // 2, 3, 6, 4, 44, 24
        expect(singlyLinkedList.addAtIndex(23, 2)).toBe(true); // 2, 23, 3, 6, 4, 44, 24
        expect(singlyLinkedList.addAtIndex(77, 55)).toBe(false);
        done();
    });

    test('should test all removeValues scenarios ', (done) => {
        expect(singlyLinkedList.getValues()).toEqual([ 2, 23, 3, 6, 4, 44, 24]);
        expect(singlyLinkedList.removeValue(77)).toBe(false);
        expect(singlyLinkedList.removeValue(2)).toBe(true);
        expect(singlyLinkedList.removeValue(24)).toBe(true);
        expect(singlyLinkedList.removeValue(6)).toBe(true);
        expect(singlyLinkedList.getValues()).toEqual([ 23, 3, 4, 44]);
        done();
    });

});