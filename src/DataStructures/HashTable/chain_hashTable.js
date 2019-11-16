const HashTable = require('./hashTasble');
const IndexHash = require('./indexHash');

class HashTableChain extends HashTable {

    constructor() {
        super();
        this.list = new Array(this.ARRAY_LENGTH);
        this.length = 0;
    }

    /**
     * Should add a new element 
     * @param {any} value
     */
    insert(value) {
        var key = this._hash(value); 
        let indexHash = new IndexHash(value, key);
        if(this.list[key]){
            indexHash.next = this.list[key];
        }
        this.list[key] = indexHash;
        this.length++;
    }

    /**
     * Should get an element
     * @param {any} value
     */
    get(value) {
        if(value < 0 || value == null)
            return null;

        var key = this._hash(value);
        if(this.list[key]){
            if(this.list[key].value == value){
                return this.list[key].value;
            } else {
                let current = this.list[key].next;
                let prev = this.list[key];
                while(current){
                    if(current.value == value){
                        return current.value;
                    }else{
                        prev = current;
                        current = current.next
                    }
                }
                return null;
            }
        }else{
            return null;
        }
    }

    /**
     * Should remove an element of array
     * @param {number} value
     */
    remove(value){
        if(value < 0 || value == null)
            return false;

        let key = this._hash(value);
        if(this.list[key]){
            if(this.list[key].value == value){
                this.list[key] = this.list[key].next;
                this.length--;
                return true;
            } else {
                let current = this.list[key].next;
                let prev = this.list[key];
                while(current){
                    if(current.value === value){
                        prev.next = current.next;
                        this.length--;
                        return true;
                    }
                    prev = current;
                    current = current.next;
                }
                return false;
            }
        }else{
            return false;
        }
    }
}
module.exports = HashTableChain;