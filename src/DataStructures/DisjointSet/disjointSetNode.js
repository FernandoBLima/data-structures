
class DisjointSetNode {

    constructor(value) {
        this.value = value,
        this.children = {};
        this.rank = 1;
        this.parent = -1;
    }

}


module.exports = DisjointSetNode;