class SetStructure {
    
    constructor() {
        this.listValues = [];
        this.capacity = 0;
    }
      
    /**
     * returns a new set which contains all the elements of set s and all the elements of set t, and no others
     * @param {number} value
     * @return {SetStructure}
     */
    union(set) {
        var newSet = new SetStructure();
        set.listValues.forEach(function(value) {
            newSet.insert(value);
        });
        this.listValues.forEach(function(value) {
            var hasValue = newSet.listValues.includes(value)
            if(!hasValue){
                newSet.insert(value);
            }
        });
        newSet.capacity = set.capacity + this.capacity;
        return newSet;
    }

    /**
     * returns a new set which contains all and only those elements in both s and t
     * @param {number} value
     * @return {SetStructure}
     */
    intersect(set) {
        var newSet = new SetStructure();
        this.listValues.forEach(function(value) {
            if(set.contains(value)) {
                newSet.insert(value);
            }
        });
        return newSet;
    }

    /**
     * @param {number} value
     * @return {SetStructure}
     */
    disjointSets(set) {
        var flag = true;
        this.listValues.forEach(function(value) {
            if(set.contains(value)) {
                flag = false;
            }
        });
        return flag;
    }
    
    /**
     * returns a new set which contains all and only those elements in s but not in t
     * @param {number} value
     * @return {SetStructure}
     */
    difference(set) {
        var newSet = new SetStructure();
        this.listValues.forEach(function(value) {
            if(!set.contains(value)) {
                newSet.insert(value);
            }
        });
        return newSet;
    }

    /**
     * returns a symmetrical set
     * @param {number} value
     * @return {SetStructure}
     */
    symmetricDifference(set) {
        var newSet = new SetStructure();
        this.listValues.forEach(function(value) {
            if(!set.contains(value)) {
                newSet.insert(value);
            }
        });
        var setDifference = this;
        set.listValues.forEach(function(value) {
            if(!setDifference.contains(value)) {
                newSet.insert(value);
            }
        });
        return newSet;
    }

    /**
     * Creates a new set structure containing all the elements
     * @param {number} value
     * @return {SetStructure}
     */
    createFrom() {
        var newSet = new SetStructure();
        newSet = this;
        return newSet;
    }

    
    /**
     * add element e to the set s
     * @param {number} value
     */
    insert(value){
        if(this.listValues.indexOf(value)) {
            this.listValues.push(value);
            this.capacity++;
        }
    }

    /**
     * remove element e from the set s
     * @param {number} value
     */
    remove(value){
        var index = this.listValues.indexOf(value);
        if(index >= 0) {
            if(this.capacity > 1){
                this.listValues.splice(index, 1);
            }
            this.capacity--;
        }
    }

    /**
     * returns whether e is a member of s
     * @param {number} value
     * @return {Boo}
     */
    contains(value) {
        return this.listValues.indexOf(value) !== -1;
    }

    /**
     * returns all the subsets that the set has
     * @return {array}
     */
    getAllSubsets() {
        var theArray = this.listValues.reduce(
          (subsets, value) => subsets.concat(
           subsets.map(set => [value,...set])
          ),
          [[]]
        );
        return theArray;
    }

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
                this.capacity++;
            }
        }
        return; 
    }

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
                this.capacity--;
            }
        }
        return; 
    }

    /**
     * returns if the set is a subset of the set T.
     * @param {SetStructure} set
     * @return {Boolean}
     */
    isSubset(set) {
        return set.listValues.every(value => this.listValues.includes(value)); 
    }

    /**
     * returns if the set is a Proper Subset of the set T.
     * @param {SetStructure} set
     * @return {Boolean}
     */
    isProperSubset(set){
        return set.listValues.some(value => this.listValues.includes(value));
    }

    /**
     * returns the number of elements in s
     * @param {number} value
     */
    getCapacity() {
        return this.capacity;
    }

    /**
     * returns whether there are no elements in s
     */
    isEmpty() {
        return this.capacity > 0 ? false : true;
    }

    /**
     * clear the set list 
     */
    cleanSet() {
        if(this.capacity > 0){
            this.listValues = []; 
            this.capacity = 0;
        }
        return;
    }

    print() {
        console.log(this.listValues.join(' '));
    }

    /**
     * return all the elements of the list 
     */
    getAllValues() {
        return this.listValues.join(' ');
    }

}
module.exports = SetStructure;
