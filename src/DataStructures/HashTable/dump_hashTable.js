const HashTable = require('./hashTable');

class DumpHashTable extends HashTable {

    constructor() {
        super();
        this.list = {};
        this.length = 0;
    }

    /**
     * Should add element 
     * @param {any} key \
     * @param {any} value 
     */
    insert(key, value) {
        var position = this._hash(key);
        this.list[position] = value; 
        this.length++;
        return;
    }

    /**
     * Should return element if it exists
     * @param {any} åkey 
     * @return {Number} 
     */
    get(key) {
        if(this.length > 0 && key){
            return this.list[this._hash(key)];
        }
        return false;
    }

    /**
     * Should remove an element
     * @param {any} key 
     */
    remove(key){
        if(this.length > 0 && key){
            this.list[this._hash(key)] = null;
            this.length--;
        }
        return;
    }

}
module.exports = DumpHashTable;