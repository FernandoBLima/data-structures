
class DisjointSetNode {

    constructor(value) {
        this.isRoot = true,
        this.value = value,
        this.children = {};
        this.size = 1;

    }

}


module.exports = DisjointSetNode;