const LinkedList = require('./linkedList');

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class CircularLinkedList extends LinkedList {
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
            this.head.prev = this.tail; 
            this.tail.next = this.head;
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
            this.tail.next = this.head;
            this.head.prev = this.tail;
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
        if(this.length == 1){
            this.head = null;
            this.tail = null;
            this.length--;
        }else if(this.length > 1){
            var newHead = this.head.next;
            this.head = newHead;
            this.head.prev = this.tail;
            this.tail.next = this.head;
            this.length--;
        }else{
            // throw new Error('Head does not exist!');
            return false;
        }
    }

    /**
     * Action to remove the tail element
    */
    removeAtTail(){
        if(this.length == 1){
            this.removeAtHead();
            this.tail = null;
            return;
        } else if (this.length > 1){
            this.tail = this.tail.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
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
        var exist = this.search(value);
        if(exist == true){
            if(this.head.value == value){
                this.removeAtHead(value);
                return true;
            }else if(this.tail.value == value){
                this.removeAtTail(value);
                return true;
            }else {
 
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
        } else { 
            return false;
        }
    }


    /**
     * Action to insert an element by index
     * @param {number} value
     * @param {number} index
     */
    addAtIndex(value, index){
        if(value == null){
            return;
        }
        if(index > this.length) return false;
        if(index === 0) {
            this.addAtHead(value);
            return true;
        } 

        var currentIndex = 0;
        var currentNode = this.head;
        let previousNode = null;

        while(currentNode != null && currentIndex != index){
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }

        var newNode = new Node(value, null, null);
        var test = currentNode.prev;
        newNode.next = currentNode;
        newNode.prev = currentNode.prev;
        currentNode.prev = newNode;
        test.next = newNode;
        this.length++;
        return true;
    }


    /**
     * Action to get list of values 
     * @return [Array]
    */
   getValues(){
    var listValues = [];
    var node = this.head;
    var i = 0;
    while(node != null && i < this.length){
        listValues.push(node.value);
        node = node.next;
        i++;
    }   
    return listValues;
}

}

module.exports = CircularLinkedList;