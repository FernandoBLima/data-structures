class Node {
    constructor(element, priority) {
        this.element = element; 
        this.priority = priority;
    }
}


class PriorityQueue { 
    constructor(){ 
        this.list = []; 
        this.size = 0;
    } 
  
    /**
        * Add item to the priority queue.
        * @param {number} value - item we're going to add to the queue.
        * @param {number} priority - item priority.
        * @return {PriorityQueue}
    */
    enqueue(value, priority){
        var newNode = new Node(value, priority);
        var flag = false;

        for (let index = 0; index < this.list.length; index++) {
            if(this.list[index].priority < priority){
                this.list.splice(index, 0, newNode);
                flag = true;
                break;
            }
        }     
        
        if(!flag){
            this.list.push(newNode); 
        }
    }

    /**
     * Action to remove first element of PriorityQueue
     * @return {Node}
   */
    dequeue(){ 
        return this.list.shift(); 
    } 

    /**
     * Action to find first element in the PriorityQueue
     * @return {Node}
    */
    getFirstElement() { 
        if (this.isEmpty()) 
            return false; 
        return this.list[0].element; 
    } 

    /**
     * Action to verify  if the PriorityQueue is empty. 
     * @return {Boolean}
    */
    getLength() { 
        return this.list.length; 
    } 

    /**
     * Action to verify  if the PriorityQueue is empty. 
     * @return {Boolean}
    */
    isEmpty() { 
        return this.list.length == 0; 
    } 
} 

module.exports = PriorityQueue;