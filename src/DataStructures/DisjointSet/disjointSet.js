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

    // ****************************** 
    //        union functions
    // ****************************** 

    /**
      * Link the set x to set y
      * @param {number} x
      * @param {number} y
    */   
    union(x, y){
        var xRoot = this.findRoot(x);
        var yRoot = this.findRoot(y);

        yRoot.parent = -1;
        yRoot.children[xRoot.value] = xRoot;
        xRoot.parent = yRoot.value;
    }

    /**
      * Link the set x to set y using the path compression
      * @param {number} x
      * @param {number} y
    */   
    unionByPathCompression(x, y){
        var xRoot = this.findByPathCompression(x);
        var yRoot = this.findByPathCompression(y);

        yRoot.parent = -1;
        yRoot.children[xRoot.value] = xRoot;
        xRoot.parent = yRoot.value;
    }

    /**
      * Link root of smaller rank to root of larger rank
      * @param {number} x
      * @param {number} y
    */ 
    unionByRank(x, y){
        var xRoot = this.findRoot(x);
        var yRoot = this.findRoot(y);

        if(xRoot.value == yRoot.value)
            return;

        if(xRoot.rank < yRoot.rank){
            xRoot.parent = yRoot.value;
            yRoot.children[xRoot.value] = xRoot;
        } else if (xRoot.rank > yRoot.rank) {
            yRoot.parent = xRoot.value;
            xRoot.children[yRoot.value] = yRoot;
        } else {
            xRoot.parent = yRoot.value;
            yRoot.children[xRoot.value] = xRoot;
            yRoot.rank = xRoot.rank + 1;
        }
    }

    /**
      * Link root of smaller rank to root of larger rank using the path compression
      * @param {number} x
      * @param {number} y
    */ 
    unionByRankByPathCompression(x, y){
        var xRoot = this.findByPathCompression(x);
        var yRoot = this.findByPathCompression(y);

        if(xRoot == yRoot)
            return;

        if(xRoot.rank < yRoot.rank){
            xRoot.parent = yRoot.value;
            yRoot.children[xRoot.value] = xRoot;
        } else if (xRoot.rank > yRoot.rank) {
            yRoot.parent = xRoot.value;
            xRoot.children[yRoot.value] = yRoot;
        } else {
            xRoot.parent =  yRoot.value;
            yRoot.children[xRoot.value] = xRoot;
            yRoot.rank = xRoot.rank + 1;
        }
    }

    /**
      * Change ranks or move elements from one set to another.
      * @param {number} x
      * @returns {number}
    */ 
    findByPathCompression(x) {
        if (this.list[x].parent !== -1) {
            var parent = this.findByPathCompression(this.list[x].parent);
            var oldParent = this.list[x].parent;
            delete this.list[oldParent].children[this.list[x].value];
            this.list[x].parent = -1;
            this.list[x].parent = parent.value;
            this.list[parent.value].children[this.list[x].value] = this.list[x];
        }else{
            return this.list[x]
        }
        return this.list[this.list[x].parent];
    }

    /**
      * Link root of smaller tree to root of larger tree
      * @param {number} x
      * @param {number} y
    */ 
    unionBySize(x, y){
        var xRoot = this.findRoot(x);
        var yRoot = this.findRoot(y);

        if(xRoot == yRoot)
            return;

        if(this.getSetSize(xRoot.value) > this.getSetSize(yRoot.value)){
            yRoot.parent = xRoot.value;
            xRoot.children[yRoot.value] = yRoot;
        } else {
            xRoot.parent = yRoot.value;
            yRoot.children[xRoot.value] = xRoot;
        }
    }

    // ****************************** 
    //        find functions
    // ****************************** 

    /**
      * Action to get a specific value
      * @param {number} x
      * @return {DisjointSetNode}
    */
    findValue(x) {
        return this.list[x];
    }

    /**
      * Returns the root of the set that the value belongs to
      * @param {number} 
      * @return {DisjointSetNode} 
    */
    findRoot(x) {
        if (this.list[x] && this.list[x].parent !== -1) {
            return this.findRoot(this.list[x].parent);
        }else{
            return this.list[x];
        }
    }

    // ****************************** 
    //        support functions
    // ****************************** 

    /**
      * Returns the size of the set that the value belongs to
      * @param {number} 
      * @return {number} 
    */
    getSetSize(value){
        var rootValue = this.findRoot(value);
        var count = 0;
        var stack = [rootValue];
        while(stack.length > 0){
            var popValue = stack.pop();
            var count = count + 1;
            var item = this.list[popValue.value];
            var children = Object.keys(item.children)
            if(children.length > 0){
                for (let index = 0; index < children.length; index++) {
                    var element = children[index];
                    stack.push(this.list[element]);
                }
            }
        }
        return count;
    }


    /**
      * Action to list all sets
      * @return {Array} listSets
    */
     extractSets(){
        var listSets = [];
        for (var i = 0; i < this.size; i++) {
            var disjointSetNode = this.list[i];
            if(disjointSetNode.parent === -1){
                var str = disjointSetNode.value ; 
                listSets.push(this._printSet(disjointSetNode, str));
            }
        }
        return listSets;
    }

    _printSet(set, str){
        if(Object.keys(set.children).length > 0){
            var list = Object.keys(set.children);
            for (let index = 0; index < list.length; index++) {
                const element = set.children[list[index]];
                str += ' ' + element.value; 
                str = this._printSet(element, str);
            }
            return str;
        }
        return str;
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
     * Return the values from the set
     * @param {number} value
     * @return {boolean} 
    */
    getSetFromValue(value){
        var set = this.findRoot(value);
        return this._printSet(this.list[set.value], set.value);
    }

    /**
      * Check if items are in the same set
      * @param {number} value1
      * @param {number} value2
      * @return {Boolean} 
    */
    isConnected(value1, value2){
        if(this.findRoot(value1).value == this.findRoot(value2).value) return true;
        return false;
    }

    /**
     * Checks whether the list is empty or not
     * @return {boolean} 
    */
    isEmpty(){
        return Object.keys(this.list).length > 0 ? false : true;
    }

    /**
     * return the length of the list
     * @return {number} 
    */
    getSize(){
        return Object.keys(this.list).length;
    }

    /**
     * Defines the list as empty
    */
    clear(){
        this.list = {};
        this.size = 0;
    }

    /**
      * Return true if the item is root
      * @param {number} value
      * @return {boolean} 
    */
    isRoot(value){
        return this.list[value].parent == -1 ? true : false;
    }

}

module.exports = DisjointSet;