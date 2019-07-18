class Dictionary {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    /**
      * Action to check whether the item exists or not
      * @param {String} key
      * @return {Boolean} 
    */
    hasItem(key){
        return this.items[key] ? true : false;
    }

     /**
      * Return the size of the list 
      * @return {Number} 
    */
    getSize(){
        return this.size;
    }

    /**
      * Insert an item in the list 
      * @param {String} key
      * @param {Number} value 
    */
    setItem(key, value){
        this.items[key] = value;
        this.size += 1
    }

    /**
      * Return an item if it exist
      * @param {String} key
      * @return {Number} 
    */
    getItem(key){
        if(this.hasItem(key)){
            return this.items[key]
        }
        return false;
    }

     /**
      * Return all the values from the list
      * @return {Array} listValues
    */
    getValues(){
        var listValues = [];
        for (var key in this.items) {
            listValues.push(this.items[key])
        }
        return listValues;
    }

    /**
      * Return all the keys from the list
      * @return {Array} Object.keys
    */
    getKeys(){
        return Object.keys(this.items);
    }

    /**
      * Return the entire list
      * @return {Array} items
    */
    getlist(){
        return this.items;
    }

    /**
      * Delete an item from the list
      * @param {String} key
      * @return {Boolean} 
    */
    deleteItem(key){
        if(this.items[key]){
            delete this.items[key]
            this.size -= 1
            return true;
        }
        return false;
    }

     /**
      * Sort the entire list by the keys
      * @return {Array} listSorted
    */
    sort(){
        var listSorted = [];
        var listKeysSorted = Object.keys(this.items).sort();
        listKeysSorted.forEach(element => {
            listSorted.push(element + " : " + this.items[element])
        });
        return listSorted;
    }

}

module.exports = Dictionary;