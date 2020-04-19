const NodeTree = require('./nodeTree');

class Tree {
    constructor() {
        this.root = null;
        this.length = 0;
    }


    /**
     * Action to insert a new node in tree.
     * @param {number} value The value to be inserted.
     * @param {NodeTree} root The current node.
     */
    add(value, root = null) {
        if(!this.root){
            this.root = new NodeTree(value);
        } else {
            if(!root){
                this.root.descendents.push(new NodeTree(value));
            } else {
                var currentRoot = this.getValue(root);
                currentRoot.descendents.push(new NodeTree(value));
            }
        }
    }

    /**
     * Action to remove a node with a specific key.
     * @param {Number} value The key to be deleted.
     */
    remove(value) {
        var queue = [this.root];
        while(queue.length) {
            var node = queue.shift();
            for(var i = 0; i < node.descendents.length; i++) {
                if(node.descendents[i].key === value) {
                    node.descendents.splice(i, 1);
                } else {
                    queue.push(node.descendents[i]);
                }
            }
        }
    }

    /**
     * Returns the size of the tree
     * @return {number}
     */
    getSize(){ 
        if(!this.root)
            return 0;

        var count = 0;
        var stack = [this.root];
        while(stack.length > 0){
            var node = stack.pop();
            var count = count + 1;
            if(node.descendents !== null && node.descendents.length > 0){
                for (let index = 0; index < node.descendents.length; index++) {
                    var element = node.descendents[index];
                    stack.push(element);
                }
            }
        }
        return count;
    } 

    /**
     * Checks whether the list is empty or not
     * @return {boolean} 
    */
    isEmpty(){
        return this.root == null ? true : false;
    }

    getValue(value) {
        var item = null;
        var stack = [this.root];
        while(stack.length > 0 & item == null){
            var node = stack.pop();
            if(value == node.key){
                item = node.key;
                break;
            }
            if(node.descendents.length > 0){
                for (let index = 0; index < node.descendents.length; index++) {
                    var element = node.descendents[index];
                    if(element.key == value){
                        item = element;
                        break;
                    }else{
                        stack.push(element);
                    }
                }
            }
        }
        return item;
    }

}

module.exports = Tree;