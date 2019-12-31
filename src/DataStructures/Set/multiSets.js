class MultiSets {
    
    constructor() {
        this.items = {};
        this.cardinality = 0;
    }

    /**
     * add element and quantity in the list
     * @param {number} key
     * @param {number} cardinality
     */
    insert(key, cardinality = 1){
        try{
            if(key == null || cardinality == null){
                throw new Error('Is not possible to insert a null value');
            }
            var flag = true;
            var listKeys = Object.keys(this.items);
            listKeys.forEach(item => {
                if(item == key){
                    this.items[key] = this.items[key] + cardinality;
                    flag = false;
                    this.cardinality = cardinality;
                }
            });
            if(flag){
                this.items[key] = cardinality;
                this.cardinality = cardinality;
            }
        }
        catch (error) {
            return error.message;
        }   
    }

    /**
     * remove an element in the list
     * @param {number} key
     * @param {number} cardinality
     */
    remove(chave, cardinality){
        if(this.items[chave]){
            var value = this.items[chave];
            if(cardinality > value){
                this.items[chave] = 0;
            }else{
                this.items[chave] = value - cardinality;
            }
        }
    }

    /**
     * returns a new set that is a union where the multiplicity of an element is equal to the sum of the multiplicity of an element in both sets
     * @param {MultiSets} bag
     * @returns {MultiSets}
     */
    sum(bag){
        var newMultiSet = new MultiSets();

        var listMultiSet1 = Object.keys(this.items);
        var listBag1 = this;
        listMultiSet1.forEach(function(value) {
            newMultiSet.items[value] = listBag1.items[value];
            newMultiSet.cardinality += listBag1.items[value];
        });

        var listMultiSet2 = Object.keys(bag.items);
        listMultiSet2.forEach(function(value) {
            if(!newMultiSet.items[value]){
                newMultiSet.items[value] = bag.items[value];
                newMultiSet.cardinality = bag.items[value];
            }else{
                newMultiSet.items[value] += bag.items[value];
                newMultiSet.cardinality += bag.items[value];
            }
        });
        return newMultiSet;
    }

    /**
     * returns a new set that is a union where the multiplicity of an element is equal to the maximum of the multiplicity of an element related in both sets
     * @param {MultiSets} bag
     * @returns {MultiSets}
     */
    union(bag) {
        var newMultiSet = new MultiSets();
        var listMultiSet1 = Object.keys(this.items);
        var listBag1 = this;
        listMultiSet1.forEach(function(value) {
            newMultiSet.items[value] = listBag1.items[value];
            newMultiSet.cardinality += listBag1.items[value];
        });

        var listMultiSet2 = Object.keys(bag.items);
        var listBag = this;
        listMultiSet2.forEach(function(value) {
            if(!newMultiSet.items[value]){
                newMultiSet.items[value] = bag.items[value];
                newMultiSet.cardinality += bag.items[value];
            }else{
                var multiplicity = listBag.items[value] >= bag.items[value] ? listBag.items[value] : bag.items[value];
                newMultiSet.items[value] = multiplicity;
                var tes = Math.abs(listBag.items[value] - bag.items[value]);
                newMultiSet.cardinality += (tes);
            }
        });
        return newMultiSet;
    }


    /**
     * returns a new set that is the intersection where the multiplicity of an element is the minimum of the multiplicity of an element related in both sets
     * @param {MultiSets} bag
     * @returns {MultiSets}
     */
    intersect(bag) {
        var newMultiSet = new MultiSets();
        var listMultiSet = Object.keys(this.items);
        var listBag = this;
        listMultiSet.forEach(function(value) {
            if(bag.items[value]){
                var multiplicity = listBag.items[value] <= bag.items[value] ? listBag.items[value] : bag.items[value];
                newMultiSet.items[value] = multiplicity;
            }
        });
        return newMultiSet;
    }

    /**
     * returns a new set where the multiplicity of an element is equal to the diference between the multiplicity of the element between the sets
     * @param {MultiSets} bag
     * @returns {MultiSets}
     */
    difference(bag) {
        var newMultiSet = new MultiSets();
        var listMultiSet = Object.keys(this.items);
        var listBag = this;
        listMultiSet.forEach(function(value) {
            if(bag.items[value]){
                var multiplicity = listBag.items[value] - bag.items[value];
                if(multiplicity > 0){
                    newMultiSet.items[value] = multiplicity;
                }
            }else{
                newMultiSet.items[value] = listBag.items[value];
            }
        });
        return newMultiSet;
    }

    /**
     * returns if the the both sets are subset or not
     * @param {MultiSets} bag
     * @returns {boolean}
     */
    isSubset(bag) {
        var listMultiSet1 = Object.keys(this.items);
        var listMultiSet2 = Object.keys(bag.items);
        let flag = true;

        for (let index = 0; index < listMultiSet1.length; index++) {
            const element = listMultiSet1[index];
            
            var teste = listMultiSet2.includes(element);
            if(teste){
                if(this.items[element] != bag.items[element]){
                    flag = false;
                    break;
                }
            }else{
                flag = false;
            }
        }
        return flag;
    }

    /**
     * returns if the the both sets are proper subset or not
     * @param {MultiSets} bag
     * @returns {boolean}
     */
    isProperSubset(bag){
        var listMultiSet1 = Object.keys(this.items);
        var listMultiSet2 = Object.keys(bag.items);
        var flag = false;
        for (let index = 0; index < listMultiSet1.length; index++) {
            const element = listMultiSet1[index];
            var flag = listMultiSet2.includes(element)
            if(flag){
                flag = true;
            } 
        }
        return flag;
    }

    /**
     * returns if the the both sets are equals or not
     * @param {MultiSets} bag
     * @returns {boolean}
     */
    isEqual(bag){
        var listMultiSet1 = Object.keys(this.items);
        var listMultiSet2 = Object.keys(bag.items);

        if(listMultiSet1.length != listMultiSet2.length){
            return false;
        }
        let flag = true;
        for (let i = 0; i < listMultiSet2.length; i++) {
            let item = listMultiSet2[i];
            if(!this.hasValue(item)){
                flag = false;
                break;
            }else{
                if(this.items[item] != bag.items[item]){
                    flag = false;
                    break;
                }
            }
        }
        return flag;
    }

    /**
     * returns if the multisets are disjoint sets
     * @param {number} value
     */
    disjointSets(set) {
        var listMultiSet = Object.keys(this.items);
        var flag = true;
        listMultiSet.forEach(function(value) {
            if(set.items[value]){
                flag = false;
            }
        });
        return flag;
    }

    /**
     * returns the list of elements
     * @returns {Array}
     */
    listCardinalitySets(){
        var listCardinality = '';
        var listSet = Object.keys(this.items);
        listSet.forEach(element => {
            var char = element + ' ';
            var cardinality = this.items[element];
            var value = char.repeat(cardinality);
            listCardinality += value;
        });
        return listCardinality;
    }

    /**
     * remove an element in the list
     * @param {number} key
     */
    deleteValue(value){
        if(this.items[value]){
            delete this.items[value];
            return true;
        } else {
            return false;
        }
    }

    /**
     * returns if the value exist or not
     * @param {number} key
     */
    hasValue(value){
        return this.items[value] ? true : false;
    }

    /**
     * Return the cardinality of the list 
     * @return {Number} 
     */
    getCardinality(){
        return this.cardinality; 
    }

    /**
     * Return the multiplicity of the list 
     * @return {Number} 
     */
    getMultiplicity(value){
        return this.items[value];
    }

    /**
     * returns whether there are no elements in s
     */
    isEmpty() {
        return this.cardinality > 0 ? false : true;
    }

    /**
     * Return the size of the list 
     */
    clear(){
        this.list = [];
        this.cardinality = 0;
    }

}

module.exports = MultiSets;
