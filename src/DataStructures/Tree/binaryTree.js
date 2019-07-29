const NodeTree = require('./nodeTree');

class BinaryTrie {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Action to insert a new node in tre with a value.
     * @param {number} value The value to be inserted.
     */
    insert(value){
        if(!this.root){
            this.root = new NodeTree(value);
            this.length++;
        }else{
            this._insertNode(this.root, value);
            this.length++;
        }
    }

    /**
     * Recursive function to insert a new node in the tree.
     * @param {number} value The value being inserted.
     * @param {Node} currentNode Current node of the tree.
     */
    _insertNode(currentNode, value){

        if(currentNode.key){
            if(value < currentNode.key){
                if(!currentNode.left){
                    currentNode.left = new NodeTree(value);
                }else{
                    this._insertNode(currentNode.left, value);
                }
            } else {
                if(!currentNode.right){
                    currentNode.right = new NodeTree(value);
                }else{
                    this._insertNode(currentNode.right, value);
                }
            }
            currentNode.height = 1 + this.maxHeight(this.getHeight(currentNode.left), this.getHeight(currentNode.right));
            currentNode.balance = this.getBalanceNode(currentNode);
        }
    }

    getBalanceNode(node){
        var left = 0; 
        var right = 0;
        if(node.left === null && node.right === null){
            return 0;
        }
        if(node.left !== null){
            left = node.left.height;
        }
        if(node.right !== null){
            right = node.right.height;
        }
        return left - (right);
    }
  
    /**
     * Recursive function to insert a new node in the tree.
     * @param {NodeTree} leftValue
     * @param {NodeTree} rightValue
     * @returns {NodeTree} The .
     */
    maxHeight(leftValue, rightValue){
        return (leftValue > rightValue) ? leftValue : rightValue;
    }

    getHeight(node){
        if(node == null){
            return 0;
        }
        return node.height;
    }


    /**
     * Returns the node, if it exists on the tree
     * @param {number} value The value in the node.
     * @return {Node} Node found if it exists
    */   
    search(value){
        if(!this.root){
            return null;
        }else{
            return this._search(this.root, value);
        }
    }

    _search(node, value){
        if(node){
            if(node.key != value){
                if(value < node.key){
                    return this._search(node.left, value);
                }else{
                    return this._search(node.right, value);
                }
            }else{
                return true;
            }
        }else{
            return false;
        }
    }


    /**
     * Returns the parent node, if it exists on the tree
     * @param {number} value The value in child node.
     * @return {Node} Parent node.
    */   
    findParent(value){
        if (this.root == null) 
            return false; 
        return this._findParent(this.root, value);
    }

    _findParent(node, value){
        if(value < node.key){
            if(!node.left){
                return null;
            }else if(node.left.key == value){
                return node;
            } else {
                return this._findParent(node.left, value);
            }
        }else{
            if(!node.right){
                return null;
            }else if(node.right.key == value){
                return node;
            } else {
                return this._findParent(node.right, value);
            }           
        }
    }


    /**
     * Returns the specific node if it exists
     * @param {number} value The value to be found.
     * @return {Node} Specific node found.
    */    
    findNode(value){
        if (this.root == null) 
            return false; 
        return this._findNode(this.root, value);
    }

    _findNode(node, value) {
        if(node){
            if(value == node.key){
                return node;
            }else{
                if(value < node.key){
                    return this._findNode(node.left, value);
                }else{
                    return this._findNode(node.right, value);
                }           
            }
        }else{
            return false;
        }
    }

    /**
     * Returns the maximum value in the tree.
     * @return {Number} the maximum value in the tree.
    */
    findMinimum(){
        if (this.root == null) 
            return; 
        return this._findMinimum(this.root);        
    }

    _findMinimum(node){
        if (node.left != null) {
            return this._findMinimum(node.left);        
        }else{
            return node.key; 
        }
    }


    /**
     * Returns the minimum value in the tree.
     * @return {Number} the minimum value in the tree.
    */
    findMaximum(){
        if (this.root == null) {
            return; 
        }
        return this._findMaximum(this.root);    
    }

    _findMaximum(node){
        if (node.right != null){
            return this._findMaximum(node.right);        
        } else{
            return node.key;
        }
    }


    /**
     * Action to delete a node with a specific key.
     * @param {number} value The key to be deleted.
     */
    delete(value){
        if(!this.findNode(value)){
            return false;
        }
        this._delete(this.root, value);
        return true;
    }


    _delete(node, value){
        if(node == null) return node;

        var parent = this.findParent(value);
        if(!parent && node.left == null && node.right == null){
            return this.root.key = null;
        }

        if(value < node.key){
            node.left = this._delete(node.left, value);
        }else if(value > node.key){
            node.right = this._delete(node.right, value);
        }else{
            if(node.left == null){
                return node.right;
            }else if(node.right == null){
                return node.left;
            }
            node.key = this._minValue(node.right); 
            node.right = this._delete(node.right, node.key);
        }
        return node;
    }

    /**
     * Returns whether the tree is empty or not
     * @return {boolean} Whether the tree is empty.
     */
    isEmpty(){
        return this.root ? true : false;
    }

    _minValue(node){
        var current = node.key;
        while(node.left != null){
            current = node.left.key;
            node = node.left;
        }
        return current;
    }


    // Traversal
    /**
     * Returns Inorder traversal of a binary tree
     * @return {[number]} List of values.
     */
    inOrder(){ 
        if (this.root == null) 
            return; 
        var listValues = [];
        return this._inOrder(this.root, listValues); 
    } 


    /* Inorder traversal of a binary tree*/
    _inOrder(node, listValues){
        if(node.left != null) 
            this._inOrder(node.left, listValues);
        if(node.key != null) 
            listValues.push(node.key);
        if(node.right != null) 
            this._inOrder(node.right, listValues);
        return listValues;
    }


    /**
     * Returns PreOrder traversal of a binary tree
     * @return {[number]} List of values.
     */
    preOrder(){ 
        if (this.root == null) 
            return; 
        var listValues = [];
        return this._preOrder(this.root, listValues); 
    } 

    _preOrder(node, listValues){
        if(node.key != null) 
            listValues.push(node.key);
        if(node.left != null) 
            this._preOrder(node.left, listValues);
        if(node.right != null) 
            this._preOrder(node.right, listValues);
        return listValues;
    }

    /**
     * Returns PosOrder traversal of a binary tree
     * @return {[number]} List of values.
     */
    posOrder(){ 
        if (this.root == null) 
            return; 
        var listValues = [];
        return this._posOrder(this.root, listValues); 
    } 

    _posOrder(node, listValues){
        if(node.left != null) this._posOrder(node.left, listValues);
        if(node.right != null) this._posOrder(node.right, listValues);
        if(node.key != null) listValues.push(node.key);
        return listValues;
    }


    getLength() {
        return this.length;
    }

    /**
     * Returns whether the tree is empty or not
     * @return {boolean} Whether the tree is empty.
    */
    isEmpty(){
        return this.length > 0 ? false : true;
    }
}

module.exports = BinaryTrie;