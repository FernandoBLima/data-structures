const DisjointSetNode = require('./disjointSetNode');

class DisjointSet {
    constructor() {
        this.list = {};
        this.size = 0;
    }

    /**
    * Initialize the list creating n item sets 
    * @param {number} size
    */
    init(size){
        this.size = size;
        for (var i = 0; i < this.size; i++) {
            var disjointSetNode = new DisjointSetNode(i);
            this.list[i] = disjointSetNode;
        }
    }

    /**
      * Action to get all children of given item
      * @param {number} value
      * @return {Array} list of items
    */
    getChildrenByItem(value){
        return this.list[value].children;
    }

    /**
      * Return the size of the set
      * @param {number} value
      * @return {boolean} 
    */
    getSizeSet(index){
        if(this.list[index]){
            if(this.list[index].isRoot){
                return this.list[index].size;
            }else{
                var parent = this.list[index].parent;
                return this.getSizeSet(parent);
            }
        }
    }

    /**
      * Return true if the item is root
      * @param {number} value
      * @return {boolean} 
    */
    isRoot(value){
        return this.list[value].isRoot;
    }

    /**
      * Action to find a specific set of given item x 
      * @param {number} x
      * @return {set}
    */
    find(x) {
        if (this.list[x].value != x) {
            this.list[x] = this.find(this.list[x].parent);
        }
        return this.list[x];
    }

      /**
      * Action to find a specific set of given item x 
      * @param {number} x
      * @return {set}
    */
   findRoot(x) {
        if (this.list[x] && !this.list[x].isRoot) {
            return this.findRoot(this.list[x].parent);
        }else{
            return this.list[x].value;
        }
    }

    /**
      * Action to do union of two sets 
      * @param {number} x
      * @param {number} y
    */
    union(x, y) {
        var rootOfX = this.find(x);
        var rootOfY = this.find(y);

        if (rootOfX == rootOfY) return;
        if (!rootOfY.isRoot) return false;
        
        rootOfY.parent = rootOfX.value;
        rootOfY.isRoot = false;
        var listParent = [];

        if(rootOfX.isRoot){
            rootOfX.children[rootOfY.value] = rootOfY;
            rootOfX.size += rootOfY.size;
            rootOfY.size = rootOfX.size;
            this.list[y].isRoot = false;
            this.list[y].parent = rootOfX.value;
        }else{
            while(!rootOfX.isRoot){
                listParent.push(rootOfX.value);
                rootOfX = this.find(rootOfX.parent);
                rootOfX.size += 1;
            }
            while(listParent.length > 0){
                var index = listParent.pop();
                rootOfX = rootOfX.children[index];
            }
            rootOfX.children[rootOfY.value] = rootOfY;
        }
    }

    /**
      * Action to list all sets
      * @return {Array} listSets
    */
    extractSets(){
        var listSets = [];
        for (var i = 0; i < this.size; i++) {
            var disjointSetNode = this.list[i];
            if(disjointSetNode.isRoot){
                var str = disjointSetNode.value ; 
                listSets.push(this._printSet(disjointSetNode, str));
            }
            this.list[i] = disjointSetNode;
        }
        return listSets;
    }

    _printSet(set, str){
        if(Object.keys(set.children).length > 0){
            var list = Object.keys(set.children);
            for (let index = 0; index < list.length; index++) {
                const element = set.children[list[index]];
                str += ' ' + element.value ; 
                str = this._printSet(element, str);
            }
            return str;
        }
        return str;
    }

    /**
      * Check if items are in the same set
      * @param {number} value1
      * @param {number} value2
      * @return {Boolean} 
    */
    isConnected(value1, value2){
        if(this.list[value1] && this.list[value1].children[value2]) return true;
        if(this.list[value2] && this.list[value2].children[value1]) return true;
        return false;
    }

    isEmpty(){
        return Object.keys(this.list).length > 0 ? false : true;
    }

    getSize(){
        return Object.keys(this.list).length;
    }

}

module.exports = DisjointSet;