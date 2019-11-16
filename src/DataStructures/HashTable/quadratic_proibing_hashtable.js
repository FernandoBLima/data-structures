const HashTable = require('./hashTable');
const IndexHash = require('./indexHash');

class HashTableQuadraticProibing extends HashTable {

    constructor() {
        super();
        this.list = new Array(this.ARRAY_LENGTH);
        this.length = 0;
    }

    insert(value) {
        try{
            let key = this._hash(value);
            key = this.quadriticProibingHash(key);
            let indexHash = new IndexHash(value, key);
            this.list[key] = indexHash;
            this.length++;
        }
        catch (error) {
            return error.message;
        }   
    }

    quadriticProibingHash(key){
        if(this.list[key] == null){
            return key;
        }else{
            let flag = false;
            let index = 1;
            do{
                let indexTable = index;
                indexTable = (key + Math.pow(indexTable, 2)) % this.MOD_VALUE;
                if(index >= this.ARRAY_LENGTH ){
                    throw new Error('Error! Array size exceeds')
                }else{
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

    remove(value){
        let validation = this.validation(value);
        if(!validation){
            return false;
        }
        let key = this._hash(value);
        let index = 1;
        if(this.length == 0){
            return false;
        }
        if(this.length > 0 && this.list[key].value != value){
            var flag = false;
            do{
                if(index >= this.ARRAY_LENGTH ){
                    return false;
                }else{
                    let indexTable = index;
                    indexTable = (key + Math.pow(indexTable, 2)) % this.MOD_VALUE;
                    if(this.list[indexTable] && this.list[indexTable].value == value){
                        flag = true;
                        index = indexTable;
                    }else{
                        if(this.list[indexTable] != null){
                            index++;
                        }
                        // else{
                        //     return false;
                        // }
                    }
                }
            }while(flag == false);
        }else{
            index = key;
            var flag = true;
        }

        if( this.list[index] != null){
            if(this.list[index].value == value){
                this.list[index].value = null;
                this.length--;
            } 
        }
        return flag == true ? true : false;
    }

    validation(value){
        if(value > 0 || value != null)
            return true;
        else
            return false;
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
                let flag = false;
                let index = 1;
                do{
                    if(index > this.ARRAY_LENGTH ){
                        return false;
                    }else{
                        let indexTable = index;
                        indexTable = (key + Math.pow(indexTable, 2)) % this.MOD_VALUE;
                        if(this.list[indexTable] && this.list[indexTable].value == value){
                            flag = true;
                            index = indexTable;
                        }else{
                            if(this.list[indexTable] != null){
                                index++;
                            }else{
                                return false;
                            }
                        }
                    }
                }while(flag == false);
                return this.list[index].value;
            }
        }else{
            return false;
        }
    }
}
module.exports = HashTableQuadraticProibing;