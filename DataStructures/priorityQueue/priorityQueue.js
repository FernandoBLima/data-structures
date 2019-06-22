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


    dequeue(){ 
        return this.list.shift(); 
    } 

    getFirstElement() { 
        if (this.isEmpty()) 
            return "No elements in Queue"; 

        return this.list[0]; 
    } 


    // return true if the queue is empty. 
    isEmpty() { 
        return this.list.length == 0; 
    } 


} 

module.exports = PriorityQueue;