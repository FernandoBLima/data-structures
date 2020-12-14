class Heap {

    constructor() {
        this.list = [];
        // this.size = 0;
    }

    /**
    * Action to insert a value in the Heap
    * @param {number} value
    */
    insert(value){
        this.list.push(value);
        // this.size++;
        var childrenIndex = this.list.indexOf(value);

        while(this.hasParentByIndex(childrenIndex)){
            if(this.shouldSwap(childrenIndex, this.getParentByIndex(childrenIndex))){
                this.swapElements(childrenIndex, this.getParentByIndex(childrenIndex));
                childrenIndex = this.getParentByIndex(childrenIndex);
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
        // this.size--;
        this.list = this.list.filter(function (element) {
            return element != null;
        });
    }

    /**
        * Action to merge two heap structures 
        * @param {Heap} 
    */
    mergeHeaps(heap){
        var array = []
        for (var i = 0; i < this.list.length; i++) { 
            array[i] = this.list[i]; 
        } 
        for (var i = 0; i < heap.list.length; i++) { 
            array[this.list.length + i] = heap.list[i]; 
        } 
        var total = this.list.length + heap.list.length; 
        this.list = array

        // Builds a max heap of given arr[0..n-1] 
        for (var i = total / 2 - 1; i >= 0; i--) { 
            this.heapify(Math.floor(i))
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
      * @param {Number} childIndex
      * @return {Number}
    */
    getParentByIndex(childIndex){
        if(childIndex > 0){
            return parseInt((childIndex - 1) / 2);
        } else {
            return -1;
        }
    }

    /**
     * Check if the child node has a parent
     * @param {Number} childIndex
     * @return {Boolean}
    */
    hasParentByIndex(childIndex) {
        if(childIndex >= this.getSize()) {
            return false;
        }
        var value = this.getParentByIndex(childIndex);
        // console.log(value)
        return value >= 0 ? true : false;
    }
    
    /**
      * Return the number of items in the heap.
      * @return {Number}
    */
    getSize(){
        return this.list.length;
    }

    /**
      * Action to return the last element in the Heap
      * @return {Number}
    */
    getLastElement(){
        var size = this.getSize();
        return this.list[size - 1];
    }

    /**
      * Action to check if heap is empty
      * @return {Boolean}
    */
    isEmpty(){
        return this.list.length > 0 ? false : true;
    }

    /**
     * Action to  find a maximum item of a max-heap, or a minimum item of a min-heap, respectively 
     * @return {Number}
     */
    peek(){
        return this.list[0];
    }

    /**
     * Action to check if the left child exists by index
      * @param {number} parentIndex
      * @return {boolean}
    */
    hasLeftChildByIndex(parentIndex) {
        return this.getLeftChildrenIndex(parentIndex) < this.list.length;
    }

    /**
      * Action to check if the left child exists by index
      * @param {number} parentIndex
      * @return {boolean}
    */
    hasRightChildByIndex(parentIndex) {
        return this.getRightChildrenIndex(parentIndex) < this.list.length;
    }   

    /**
      * Action to get the right child by index
      * @param {number} parentIndex
      * @return {Number}
    */
    getRightChildValueByIndex(parentIndex) {
        return this.list[this.getRightChildrenIndex(parentIndex)];
    }

    /**
      * Action to get the left child by index
      * @param {number} parentIndex
      * @return {Number}
    */
    getLeftChildValueByIndex(parentIndex) {
        return this.list[this.getLeftChildrenIndex(parentIndex)];
    }

    /**
     * Action to get the left child by index
     * @param {number} parentIndex
     * @return {Number}
    */
   getParentValueByIndex(parentIndex) {
    return this.list[this.getParentByIndex(parentIndex)];
}


    /**
      * Returns the right child index
      * @param {number} parentIndex
      * @return {Number} 
    */
    getRightChildrenIndex(parentIndex){
        return (2*parentIndex) + 2;
    }

    /**
      * Returns the left child index
      * @param {number} parentIndex
      * @return {Number} 
    */    
    getLeftChildrenIndex(parentIndex){
        return (2*parentIndex)+1;
    }   

    /** 
     * Return the list of items in the heap
      * @return {Array}
    */
    displayHeap() {
        return this.list;
    }

    /** 
     * Clear the heap structure
      * @return {Array}
    */
    clear() {
        this.list = [];
    }

}

module.exports = Heap;