class HashTable {

    constructor() {
        this.list = {};
        this.length = 0;
    }

    hash(data){
        var hashTable = 0;
        for(var i = 0; i < data.length; i++){
            hashTable += data.charCodeAt(i);
        }
        return (hashTable) - (45);
    }

    insert(value, key) {
        var position = this.hash(key); 
        this.list[position] = value; 
        this.length++;
    }

    get(key) {
        if(this.length > 0 && key){
            return this.list[this.hash(key)];
        }
        return false;
    }

    getLength() {
        return this.length;
    }

    /**
     * Returns whether the tree is empty or not
     * @return {boolean} Whether the tree is empty.
    */
    isEmpty(){
        return this.length > 0 ? false : true;
    }

    remove(key){
        if(this.length > 0 && key){
            this.list[this.hash(key)] = null;
            this.length--;
        }
    }


}


module.exports = HashTable;