const LinkedList = require('./linkedList');
const Node = require('./node');


class Stack extends LinkedList{
    constructor() {
        super()
        this.length = 0;
      }
      
      
    /**
     * Action to add elemnent in the tail (a.k.a. addFromTail)
     * @param {number} value
     */
    push(value){
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
     * Action to remove element form the Head (a.k.a. removeFromHead)
     */
    pop(){
        if(this.head){
            var newHead = this.head.next;
            this.head = newHead;
            this.head.prev = null;
            this.length--
        }else{
            throw new Error('Head do not exist!');
        }
    }

}


module.exports = Stack;
