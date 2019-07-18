
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    /**
     * Action to add element to linkedList
     * @param {number} value
     */
    addAtHead(value){
        if(this.head){
            var newNode = new Node(value, this.head, null );
            // this.head.prev = newNode;
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
        var newNode = new Node(value, null, this.tail);
        if(this.tail){
            this.tail.next = newNode;
            this.tail = newNode;
        }else{
            this.head = newNode;
            this.tail = newNode;
        }
    }

    /**
     * Action to remove the head element
     */
    removeAtHead(){
        if(this.head){
            var newHead = this.head.next;
            // this.head.prev = null;
            this.head = newHead;
            this.length--;
            if(this.length == 0){
                this.tail = null;
            }
        }else{
            throw new Error('Head does not exist!');
        }
    }

    /**
     * Action to remove the tail element
     */
    removeAtTail(){
        var node = this.head
        var previousNode = null;
        while(node != null){
            previousNode = node;
            if(node.next != null){
                node = node.next;
                break;
            }
        }
        this.length--;
        node.next.next = null;
        this.tail = node.next;
    }

    /**
     * Action to remove an element from list
     * @param {number} value
     */
    removeValue(value){
        if(this.head  == null){
            throw new Error('Head does not exist!');
        } else if(this.head.value == value){
            this.removeFromHead(value)
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
            
            if (currentNode === null) {
                return undefined;
            }
            previousNode.next = currentNode.next;
            // currentNode.next.prev = previousNode;
            this.length--;
        }

    }

    /**
     * Action to search a list element
     * @param {number} value
     * @returns {Number}

     */
    searchAt(value){
        if(this.head){
            var node = this.head
            while(node != null && node.value != value){
                node = node.next;
            }
            return node != null ? node.value : null;
        }else{
            return null;
        }
    }

    /**
     * Action to get element by index
     * @param {number} value
     * @returns {Number}
    */
    getAtIndex(index){
        if(this.head){
            var currentIndex = 0;
            var node = this.head
            while(node != null && currentIndex != index){
                node = node.next;
                currentIndex++;
            }
            return node != null ? node.value : null;
        }
    }


    /**
     * Action to get the first element 
     * @returns {Number}
    */
    getTail(){
        var node = this.head
        while(node.next != null){
            node = node.next;
        }
        return node.value;
    }

    /**
     * Action to get the last element 
     * @returns {Number}
    */
   getHead(){
        return this.head != null ? this.head.value : null;
    }

    /**
     * Action to get reverse list
    */
    reverse(){
        if(this.head){
            let current = this.head;
            let prev = null;

            while( current ){
                let next = current.next
                current.next = prev
                // current.prev = next
                prev = current
                current = next
            }
            this.tail = this.head
            this.head = prev
        }
    }

    /**
     * Action to get list size
     * @returns number
    */
    getLength(){
        return this.length;
    }


    /**
     * Action to get list size
     * @returns [Array]
    */
    getValues(){
        var listValues = [];
        var node = this.head;

        while(node != null){
            listValues.push(node.value);
            node = node.next;
        }   
        return listValues;
    }

    /**
     * Checks if the list is empty.
     * @returns boolean
     */
    isEmpty(){
        return (this.length > 1) ? false : true;
    }

    /**
     * Action to insert an element by index
     * @param {number} value
     * @param {number} index
     */
    addAtIndex(value, index){
        if(this.head){
            var currentIndex = 1;

            var thisNode = this.head
            let previousNode = null;

            while(thisNode != null && currentIndex != index){
                previousNode = thisNode;
                thisNode = thisNode.next;
                currentIndex++;
            }

            if(thisNode == null){
                console.log('Index does not exist!')
            }else{
                var newNode = new Node(value, thisNode, previousNode);
                // thisNode.prev = newNode
                previousNode.next = newNode;
                thisNode = newNode;
            }
        }
    }
}

module.exports = SinglyLinkedList;