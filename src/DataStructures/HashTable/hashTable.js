const ARRAY_LENGTH = null;
const MOD_VALUE = null;

class HashTable {

    setArraySize(value){
        this.ARRAY_LENGTH = value;
        this.list = Array(this.ARRAY_LENGTH);
    }

    setModValue(value){
        this.MOD_VALUE = value;
    }

    /**
     * Should convert a key in an integer
     * @param {any} key 
     * @return {Number}
     */
    _hash(data){
        var hashTable = 0;
        if(typeof data === 'string'){
            for(var i = 0; i < data.length; i++){
                hashTable += data.charCodeAt(i);
            }
        }else{
            hashTable = data;
        }
        return (hashTable) % this.MOD_VALUE;
    }

    /**
     * Return the size of the list 
     * @return {Number} 
     */
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


}

module.exports = HashTable;