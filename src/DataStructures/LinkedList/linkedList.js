class LinkedList {

    /**
     * Action to get the first element 
     * @return {Number}
    */
    getHead(){
        return this.head != null ? this.head.value : false;
    }

    /**
     * Action to search a list element
     * @param {number} value
     * @return {Boolean} 
    */
    search(value){
        if(this.head){
            var node = this.head;
            var count = 0;
            while(node != null && node.value != value){
                if(count >= this.length && node.value != value){
                    return false;
                }
                node = node.next;
                count++;
            }
            if(node == null){
                // console.log('Number does not exist!');
                return false;
            }else{
                // console.log('Number exist!');
                return true;
            }
        }else{
            // console.log('Head does not exist!')
            return false;
        }
    }

    /**
     * Action to get element by index
     * @param {number} value
     * @return {Boolean} 
    */
    getAtIndex(index){
        if(this.head){
            var currentIndex = 0;
            var node = this.head;
            while(node != null && currentIndex != index){
                node = node.next;
                currentIndex++;
                if(currentIndex > this.length){
                    node = null;
                    break;
                }
            }
            return node != null ? node.value : false;
        }
        return false;
    }

    /**
     * Action to get list size
     * @return {number} 
    */
    getLength(){
        return this.length;
    }

    /**
     * Action to get list of values 
     * @return [Array]
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
     * @return {boolean}
     */
    isEmpty(){
        return (this.length > 0) ? false : true;
    }

}

module.exports = LinkedList;