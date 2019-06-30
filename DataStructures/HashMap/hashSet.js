class HashSet {

    constructor() {
        this.list = {}
    }

    hash(data){
        var hashTable = 0;
        for(var i = 0; i < data.length; i++){
            hashTable += data.charCodeAt(i);
        }
        return (hashTable) - (45);
    }

    add(value, key) {
        var position = this.hash(key); 
        this.list[position] = value; 
    };

    get(key) {
        return this.list[this.hash(key)];
    };

    remove(key){
        this.list[this.hash(key)] = null;
    }


}


module.exports = HashTable;