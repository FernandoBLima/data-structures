const HashTable = require('./hashTable');
const IndexHash = require('./indexHash');

class HashTableLinearProibing extends HashTable {

    constructor() {
        super();
        this.list = new Array(this.ARRAY_LENGTH);
        this.length = 0;
    }

    /**
     * Should add a new element in the array
     * @param {any} value
     */
    insert(value) {
        try{
            var key = this._hash(value);
            key = this.proibingHash(key, value);
            let indexHash = new IndexHash(value, key);
            this.list[key] = indexHash;
            this.length++;
        }
        catch (error) {
            return error.message;
        }   
    }

    
    proibingHash(key){
        if(this.list[key] == null){
            return key;
        }else{
            let flag = false;
            let index = 1;
            do{
                if(index >= this.ARRAY_LENGTH || this.length == this.ARRAY_LENGTH){
                    throw new Error('Error! Array size exceeds');
                }else{
                    let indexTable = index;
                    indexTable = key + indexTable;
                    if(this.list[indexTable] == null){
                        flag = true;
                        index = indexTable;
                    }else{
                        index++;
                    }
                }
            }while(flag == false);
            return index;
        }
    }

    /**
     * Should remove an element
     * @param key {any}
     */
    remove(value){
        if(value == null){
            return false;
        }
        var key = this._hash(value);
        key = this.removeProibingHash(key, value);
        if(this.list[key]){
            this.list[key].value = null;
            this.length--;
            return true;
        }else{
            return false;
        }
    }

    removeProibingHash(key, value){
        if(this.list[key] && this.list[key].value == value){
            return key;
        }else{
            if(this.list[key] == undefined){
                return null;
            }
            let flag = false;
            let index = 1;
            do{
                if(index >= this.ARRAY_LENGTH || this.length == this.ARRAY_LENGTH){
                    return false;
                }else{
                    let indexTable = index;
                    indexTable = key + indexTable;
                    if(this.list[indexTable] && this.list[indexTable].value == value){
                        flag = true;
                        index = indexTable;
                    }else{
                        index++;
                    }
                }
            }while(flag == false);
            return index;
        }
    }

    /**
     * Should return element if it exists
     * @param {any} value 
     * @return {Number} 
     */
    get(value) {
        if(value == null){
            return false;
        }
        var key = this._hash(value);
        if(this.list[key]){
            if(this.list[key].value == value){
                return this.list[key].value;
            } else {
                let index = ++key;
                while(index <= this.ARRAY_LENGTH){
                    if(this.list[index] && this.list[index].value == value){
                        return this.list[index].value;
                    }
                    index++;
                }
                return false;
            }
        }else{
            return false;
        }
    }
}
module.exports = HashTableLinearProibing;