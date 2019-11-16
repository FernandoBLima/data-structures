const HashTable = require('./hashTable');
const IndexHash = require('./indexHash');

class HashTableDouble extends HashTable {

    constructor() {
        super();
        this.list = new Array(100);
        this.length = 0;
    }

    hash(data){
        var hashTable = 0;
        if(typeof data === 'string'){
            for(var i = 0; i < data.length; i++){
                hashTable += data.charCodeAt(i);
            }
        }else{
            hashTable = data;
        }
        let hash1 = this.firstHash(hashTable);
        let hash2 = this.secondHash(hashTable);
        let hash = hash1 + (0 * hash2);
        if(this.list[hash] == null){
            return hash;
        }else{
            let flag = false;
            let index = 1;
            do{
                let hash = hash1 + (index * hash2);
                if(this.list[hash] == null){
                    flag = true;
                }else{
                    index++;
                }
            }while(flag == false);
            return index;
        }
    }


    firstHash(data){
        return (data) % 101;
    }

    secondHash(data){
        return 97 - (data % 101);
    }

    /**
     * Should add element 
     * @param {any} value
     */
    insert(value) {
        var key = this.hash(value);
        let indexHash = new IndexHash(value, key);
        this.list[key] = indexHash;
        this.length++;
    }

}

module.exports = HashTableDouble;