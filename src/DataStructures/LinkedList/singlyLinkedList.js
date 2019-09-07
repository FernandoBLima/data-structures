const LinkedList = require('./linkedList');

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList extends LinkedList {
    constructor() {
        super();
        this.head = null;
        this.length = 0;
    }

    /**
     * Action to add element to linkedList
     * @param {number} value
    */
    addAtHead(value){
        var newNode;
        if(this.head){
            newNode = new Node(value, this.head, null );
            this.head = newNode;  
        }else{
            newNode = new Node(value, null, null);
            this.head = newNode;
        }
        this.length++;
    }

    /**
     * Action to remove the head element
     */
    removeAtHead(){
        if(this.head){
            var newHead = this.head.next;
            this.head = newHead;
            this.length--;
        }else{
            return false;
        }
    }
 
    /**
     * Action to remove an element from list
     * @param {number} value
     */
    removeValue(value){
        if(!this.search(value)) {
            return false;
        }
        if(this.head.value == value){
            this.removeAtHead(value);
            return true;
        }else{
            let currentNode = this.head;
            let previousNode = null;
            while(currentNode) {
                if(currentNode.value === value) {
                    break;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
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
                prev = current;
                current = next;
            }
            this.head = prev;
        }
    }

    /**
     * Action to insert an element by index
     * @param {number} value
     * @param {number} index
     */
    addAtIndex(value, index){
        if(this.head){
            var currentIndex = 1;
            var thisNode = this.head;
            let previousNode = null;

            while(thisNode != null && currentIndex != index){
                previousNode = thisNode;
                thisNode = thisNode.next;
                currentIndex++;
            }

            if(thisNode == null){
                console.log('Index does not exist!');
                return false;
            }else{
                var newNode = new Node(value, thisNode, previousNode);
                if(previousNode){
                    previousNode.next = newNode;
                }else{
                    this.head = newNode;
                    this.length++;
                }
                thisNode = newNode;
                return true;
            }
        }
        return false;
    }


}

module.exports = SinglyLinkedList;