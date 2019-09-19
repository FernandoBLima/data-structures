class SetStructure {
    
    constructor() {
        this.listValues = [];
        this.count = 0;
    }
      
    /**
     * add element e to the set s
     * @param {number} value
     */
    insert(value){
        if(this.listValues.indexOf(value)) {
            this.listValues.push(value);
            this.count++;
        }
    }

    /**
     * remove element e from the set s
     * @param {number} value
     */
    remove(value){
        var index = this.listValues.indexOf(value);
        if(index >= 0) {
            if(this.count > 1){
                this.listValues.splice(index, 1);
            }
            this.count--;
        }
    }

    /**
     * returns whether e is a member of s
     * @param {number} value
     */
    contains(value) {
        return this.listValues.indexOf(value) !== -1;
    };

    /**
     * returns a new set which contains all the elements of set s and all the elements of set t, and no others
     * @param {number} value
     */
    union(set) {
        var newSet = new SetStructure();
        set.listValues.forEach(function(value) {
            newSet.insert(value);
        });
        this.listValues.forEach(function(value) {
            newSet.insert(value);
        });
        newSet.count = set.count + this.count;
        return newSet;
    };

    /**
     * adds all the elements of set t to set s
     * @param {number} value
     */
    insertAll(set) {
        for (let index = 0; index < set.listValues.length; index++) {
            const element = set.listValues[index];
            var exist = this.listValues.indexOf(element);
            if(exist < 0) {
                this.listValues.push(element);
                this.count++;
            }
        }
        return; 
    };

    /**
     * removes all the elements of t from s
     * @param {number} value
     */
    removeAll(set) {
        for (let index = 0; index < set.listValues.length; index++) {
            const element = set.listValues[index];
            var exist = this.listValues.indexOf(element);
            if(exist >= 0) {
                // if(this.count > 1){
                    this.listValues.splice(exist, 1);
                // }
                this.count--;
            }
        }
        return; 
    };

    /**
     * removes all the elements from s that are not in t
     * @param {number} value
     */
    retainAll(set) {
        for (let index = 0; index < this.listValues.length; index++) {
            const element = this.listValues[index];
            var exist = set.listValues.indexOf(element);
            if(exist < 0) {
                if(this.count > 1){
                    this.listValues.splice(exist, 1);
                }
                this.count--;
            }
        }
        return; 
    };


    /**
     * returns a new set which contains all and only those elements in both s and t
     * @param {number} value
     */
    intersect(set) {
        var newSet = new SetStructure();
        this.listValues.forEach(function(value) {
            if(set.contains(value)) {
                newSet.insert(value);
            }
        });
        return newSet;
    };
    
    /**
     * returns a new set which contains all and only those elements in s but not in t
     * @param {number} value
     */
    difference(set) {
        var newSet = new SetStructure();
        this.listValues.forEach(function(value) {
            if(!set.contains(value)) {
                newSet.insert(value);
            }
        });
        return newSet;
    };
    
    isSubset(set) {
        return set.listValues.every(function(value) {
            return this.contains(value);
        }, this);
    };

    /**
     * returns the number of elements in s
     * @param {number} value
     */
    getLength() {
        return this.count;
    };

    /**
     * returns whether there are no elements in s
     */
    isEmpty() {
        return this.count > 0 ? false : true;
    };

    cleanSet() {
        if(this.count > 0){
            this.listValues = []; 
            this.count = 0;
        }
        return;
    };

    print() {
        console.log(this.listValues.join(' '));
    };

}
module.exports = SetStructure;
