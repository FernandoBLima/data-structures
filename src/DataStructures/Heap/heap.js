/** 
 *  TODO:
    * merge (union): joining two heaps to form a valid new heap containing all the elements of both, preserving the original heaps.
*/

class Heap {

    constructor() {
        this.list = [];
        this.size = 0;
    }

    /**
    * Action to insert a value in the Heap
    * @param {number} value
    */
    insert(value){
        this.list.push(value);
        this.size++;
        var childrenIndex = this.list.indexOf(value);

        while(this.hasParent(childrenIndex)){
            if(this.shouldSwap(childrenIndex, this.getParentIndex(childrenIndex))){
                this.swapElements(childrenIndex, this.getParentIndex(childrenIndex));
                childrenIndex = this.getParentIndex(childrenIndex);
            } else{
                break;
            }
        }
    }


    /**
    * Action to swap values
    * @param {number} indexOne
    * @param {number} indexTwo
   */
    swapElements(childrenIndex, parentIndex) {
        const tmp = this.list[parentIndex];
        this.list[parentIndex] = this.list[childrenIndex];
        this.list[childrenIndex] = tmp;
    }   


    /**
    * Action to build heap from array
    * @param {[]} value
    */
    build_heap (value){
        for(let i = 0; i <= value.length - 1; i++ ){
            this.insert(value[i]) ;
        }
    }

    /**
        * Action to remove the first element in the heap
        * @param {number} value
    */
    removeFromTop(){
        if(this.isEmpty())
            throw new Error('The Heap is Empty');
        if(this.getSize() == 1){
            this.list.pop();
        } else {
            this.swapToRemove();
            this.heapify(0);
        }
    }

    swapToRemove(){
        this.swapElements(this.list.length - 1, 0);
        this.list[this.list.length - 1] = null;
        this.size--;
        this.list = this.list.filter(function (el) {
            return el != null;
        });
    }

    /**
        * Action to remove a specific value
        * @param {number} value
    */
    remove(value){
        var childrenIndex = this.list.indexOf(value);
        if(childrenIndex != -1){
            if(this.hasParent(childrenIndex)){
                do{
                    this.swapElements(childrenIndex, this.getParentIndex(childrenIndex));
                    childrenIndex = this.getParentIndex(childrenIndex);
                } while(this.hasParent(childrenIndex));
            }
            this.swapToRemove();
            this.heapify(0);
        }else{
            throw new Error('Value not found!');
        }
    }

    /**
        * Action to move a node down in the tree, used to restore heap condition after deletion or replacement.
        * @param {number} value
    */
    heapify(index){
        let left = this.getLeftChildrenIndex(index),
            right = this.getRightChildrenIndex(index),
            largest = index;

        if(!this.list[left]) return;

        if(this.shouldSwap(left, largest) ){
            largest = left;
        }
        if(this.shouldSwap(right, largest) ){
            largest = right;
        }
        if(largest !== index){
            [this.list[largest],this.list[index]] = [this.list[index],this.list[largest]];
            this.heapify(largest);
        }
    }

    /**
      * Returns the parent node
      * @param {number} childIndex
      * @return {number}
    */
    getParentIndex(childIndex){
        if(childIndex > 0){
            return parseInt((childIndex - 1) / 2);
        } else {
            return -1;
        }
    }

    /**
     * Check if the child node has a parent
     * @param {number} childIndex
     * @return {boolean}
    */
    hasParent(childIndex) {
        var value = this.getParentIndex(childIndex);
        return value >= 0 ? true : false;
    }
    
    /**
      * Return the number of items in the heap.
    */
    getSize(){
        return this.list.length;
    }

    /**
      * Action to return the last element in the Heap
    */
    getLastElement(){
        return this.list[this.heapSize - 1];
    }

    /**
      * Action to check if heap is empty
    */
    isEmpty(){
        return this.list.length > 0 ? false : true;
    }

    /**
     * Action to  find a maximum item of a max-heap, or a minimum item of a min-heap, respectively 
    */
    peek(){
        return this.list[0];
    }

    /**
      * @param {number} parentIndex
      * @return {boolean}
    */
    hasLeftChild(parentIndex) {
        return this.getLeftChildrenIndex(parentIndex) < this.list.length;
    }

    /**
      * @param {number} parentIndex
      * @return {boolean}
    */
    hasRightChild(parentIndex) {
        return this.getRightChildrenIndex(parentIndex) < this.list.length;
    }   

    /**
      * @param {number} parentIndex
      * @return {boolean}
    */
    getLeftChild(parentIndex) {
        return this.list[this.getLeftChildrenIndex(parentIndex)];
    }

    /**
      * @param {number} parentIndex
      * @return {boolean}
    */
    getRightChild(parentIndex) {
        return this.list[this.getRightChildrenIndex(parentIndex)];
    }

    /**
      * Returns the right child node
      * @param {number} parentIndex
      * @return {number} 
    */
    getRightChildrenIndex(parentIndex){
        return (2*parentIndex) + 2;
    }

    /**
      * Returns the left  child node
      * @param {number} parentIndex
      * @return {number} 
    */    
    getLeftChildrenIndex(parentIndex){
        return (2*parentIndex)+1;
    }   

    /** 
     * Return the list of items in heap
      * @return {Array}
    */
    displayHeap() {
        return this.list;
    }

}

module.exports = Heap;