
var chai = require('chai'),
expect = chai.expect,
should = chai.should();

const SinglyLinkedList = require('../DataStructures/LinkedList/singlyLinkedList');

describe('Singly Linked List', () => {
    const singlyLinkedList = new SinglyLinkedList();
    
    it('should get Singly Linked List empty', () => {
        expect(singlyLinkedList.getLength()).to.be.equal(10);
        expect(singlyLinkedList.isEmpty()).to.be.equal(true);
    });

    it('should add at head the first element in Singly Linked List', () => {
        singlyLinkedList.addAtHead(1);
        expect(singlyLinkedList.getLength()).to.be.equal(1);
    });

    it('should add 5 values at head in Singly Linked List', () => {
        singlyLinkedList.addAtHead(6); // 6 - 3
        singlyLinkedList.addAtHead(4); // 4 - 6 - 3
        singlyLinkedList.addAtHead(44); // 44 - 4 - 6 - 3
        singlyLinkedList.addAtHead(24); // 24 - 44 - 4 - 6 - 3
        singlyLinkedList.addAtHead(84); // 84 - 24 - 44 - 4 - 6 - 3
        expect(singlyLinkedList.getLength()).to.be.equal(6);
        expect(singlyLinkedList.getValues()).to.eql([ 84, 24, 44, 4, 6, 1 ]);
        expect(singlyLinkedList.isEmpty()).to.be.equal(false);
    });

    it('should find and return the value 4 in Singly Linked List', () => {
        expect(singlyLinkedList.searchAt(4)).to.be.equal(4);
    });

    it('should not find the value 45 in Singly Linked List', () => {
        expect(singlyLinkedList.searchAt(45)).to.be.equal(null);
    });

    it('should return the value from the index 2', () => {
        expect(singlyLinkedList.getAtIndex(2)).to.be.equal(44);
    });

    it('should not found any value from the index 9', () => {
        expect(singlyLinkedList.getAtIndex(9)).to.be.equal(null);
    });

    it('should remove the value 24 from the list', () => {
        singlyLinkedList.removeValue(24);
        expect(singlyLinkedList.getLength()).to.be.equal(5);
        expect(singlyLinkedList.getValues()).to.eql([ 84, 44, 4, 6, 1 ]);
    });

    it('should remove the head from the list', () => {
        singlyLinkedList.removeAtHead();
        expect(singlyLinkedList.getLength()).to.be.equal(4);
        expect(singlyLinkedList.getValues()).to.eql([ 44, 4, 6, 1 ]);
        expect(singlyLinkedList.getHead()).to.be.equal(44);
    });

    it('should remove at head from the list', () => {
        singlyLinkedList.removeAtTail();
        expect(singlyLinkedList.getValues()).to.eql([ 44, 4, 6 ]);
        expect(singlyLinkedList.getTail()).to.be.equal(6);
    });

    it('should tranform the list in reverse ', () => {
        singlyLinkedList.reverse();
        expect(singlyLinkedList.getValues()).to.eql([ 6, 4, 44 ]);
    });

});