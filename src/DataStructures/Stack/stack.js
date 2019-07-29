const LinkedList = require('../LinkedList/linkedList');
const Node = require('./node');

class Stack extends LinkedList{
    constructor() {
        super();
        this.length = 0;
    }
      
    /**
     * Action to add elemnent in the tail (a.k.a. addFAtTail)
     * @param {number} value
     */
    push(value){
        var newNode = new Node(value, null, null);
        if(this.head){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }


    /**
     * Action to remove element form the Head (a.k.a. removeAtHead)
     */
    pop(){
        if(this.head){
            var newHead = this.head.next;
            this.head = newHead;
            this.length--;
        }else{
            return false;
        }
    }

}


module.exports = Stack;
