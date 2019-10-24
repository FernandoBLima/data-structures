const LinkedList = require('./linkedList');

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;

    }
}

class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Action to add element to linkedList
     * @param {number} value
    */
    addAtHead(value){
        if(value == null){
            return;
        }
        if(this.head){
            var newNode = new Node(value, this.head, null );
            this.head.prev = newNode;
            this.head = newNode;  
        }else{
            var newNode = new Node(value, null, null);
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    /**
     * Action to add the value after the current tail
     * @param {number} value
    */
    addAtTail(value){
        if(value == null){
            return;
        }
        var newNode = new Node(value, null, this.tail);
        if(this.tail){
            this.tail.next = newNode;
            this.tail = newNode;
        }else{
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    /**
     * Action to remove the head element
     */
    removeAtHead(){
        if(this.head){
            var newHead = this.head.next;
            this.head.prev = null;
            this.head = newHead;
            this.length--;
            if(this.length == 0){
                this.tail = null;
            }
        }else{
            // throw new Error('Head does not exist!');
            return false;
        }
    }

    /**
     * Action to remove the tail element
    */
    removeAtTail(){
        if(this.length === 1){
            this.removeAtHead();
            this.tail = null;
            return;
        } else if (this.length > 1){
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return;
        }
        return false;
    }

    /**
     * Action to remove an element from list
     * @param {number} value
     */
    removeValue(value){
        if(!this.search(value)){
            return false;
        }
        if(this.head.value == value){
            this.removeAtHead(value);
            return true;
        } else if(this.tail.value == value){
            this.removeAtTail(value);
            return true;
        }else{
            let previousNode = this.head;
            let currentNode = previousNode.next;

            while(currentNode) {
                if(currentNode.value === value) {
                    break;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            
            previousNode.next = currentNode.next;
            currentNode.next.prev = previousNode;
            this.length--;
            return true;
        }
    }

    /**
     * Action to get reverse list
    */
    reverse(){
        if(this.head){
            let current = this.head;
            let prev = null;

            while( current ){
                let next = current.next;
                current.next = prev;
                current.prev = next;
                prev = current;
                current = next;
            }
            this.tail = this.head;
            this.head = prev;
        }
    }

    /**
     * Action to insert an element by index
     * @param {number} value
     * @param {number} index
     */
    addAtIndex(value, index){
        if(value == null || index == null){
            return;
        }
        if(index > this.length){
            return false;
        }
        if(index == 0){
            this.addAtHead(value);
            return true;
        } 
        if(index === this.length){
            this.addAtTail(value);
            return true;
        }  
        var currentIndex = 0;
        var currentNode = this.head;
        var previousNode;
        while(currentNode != null && currentIndex != index){
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }
        var newNode = new Node(value, null, null);
        currentNode.prev = newNode;
        previousNode.next = newNode;
        newNode.next = currentNode;
        newNode.prev = previousNode;
        this.length++;
        return true;
    }

}

module.exports = DoublyLinkedList;