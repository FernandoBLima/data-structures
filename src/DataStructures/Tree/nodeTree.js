class NodeTree {
    constructor(key) {
        this.key = key;
        this.descendents = [];
        this.left = null;
        this.right = null;
        this.height = 1;
        this.balance = 0;
    }
}

module.exports = NodeTree;