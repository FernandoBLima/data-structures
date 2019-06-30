class Map {

    constructor() {
        this.list = {}
    }

    add(value, key){
        this.list[key] = value;
    }

    find(key) {
        return this.list[key];
    }

    delete(key){
        if (this.has(key)){ 
          delete list[key];
          return true;
        }
        return false;
    };

    has(key){
        return key in this.list;
    };

    get(key) {
        return this.has(key) ? this.list[key] : undefined;
    };

}



module.exports = Map;