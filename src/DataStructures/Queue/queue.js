const LinkedList = require('../LinkedList/linkedList');
const Node = require('../LinkedList/node');

class Queue extends LinkedList {
    constructor() {
        super();
        this.length = 0;
    }

    /**
     * Action to get the first element 
     * @return {Number}
    */
    peek(){
        return this.head != null ? this.head.value : false;
    }

    /**
     * Action to add some value at the end of the list (a.k.a. addAtTail)
     * @param {number} value
     */
    enqueue(value){
        var newNode = new Node(value, null,  null );
        if(this.head){
            this.tail.next = newNode;
            this.tail = newNode;
        }else{
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }


    /**
     * Action to remove the last element in the list (a.k.a. removeAtHead)
     */
    dequeue(){
        if (this.head){
            this.head = this.head.next;
            this.length--;
        }else{
            return false;
        }
    }


}


module.exports = Queue;
