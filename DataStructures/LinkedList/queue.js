const LinkedList = require('./linkedList');
const Node = require('./node');


class Queue extends LinkedList{
    constructor() {
        super()
        this.length = 0;
      }
      

    /**
     * Action to add some value at the end of the list (a.k.a. addFromTail)
     * @param {number} value
     */
    enqueue(value){
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
     * Action to remove the last element in the list (a.k.a. removeFromHead)
     */
    dequeue(){
        if (this.tail){
            this.tail = this.tail.prev;
            this.tail.next = null;
        }else{
            throw new Error('Head not existe yet!');
        }
    }


}


module.exports = Queue;
