class Dictionary {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    hasItem(key){
        return this.items[key] ? true : false;
    }

    setItem(key, value){
        this.items[key] = value;
        this.size += 1
    }

    getItem(key){
        if(this.hasItem(key)){
            return this.items[key]
        }
        return false;
    }

    getValues(){
        var listValues = [];
        for (var key in this.items) {
            listValues.push(this.items[key])
        }
        return listValues;
    }

    getKeys(){
        return Object.keys(this.items);
    }

    getlist(){
        return this.items;
    }

    deleteItem(key){
        if(this.items[key]){
            delete this.items[key]
            this.size -= 1
            return true;
        }
        return false;
    }

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