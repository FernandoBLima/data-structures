const NodeTree = require('./nodeTree');

class BinarySearchTree {
    constructor() {
        this.length = 0;
    }

    /**
     * Action to insert a new node in tree.
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
     * @param {number} value The value to be inserted.
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
            currentNode.height = 1 + this._maxHeight(this._getHeight(currentNode.left), this._getHeight(currentNode.right));
            currentNode.balance = this._getBalanceNode(currentNode);
            return;
        }
    }

    _getBalanceNode(node){
        var left, right = 0;
        if(node.left !== null){
            left = node.left.height;
        }
        if(node.right !== null){
            right = node.right.height;
        }
        return left - (right);
    }
  
    /**
     * Function to get the max height value in the sub-tree
     * @param {NodeTree} leftValue
     * @param {NodeTree} rightValue
     * @returns {NodeTree} 
     */
    _maxHeight(leftValue, rightValue){
        return (leftValue > rightValue) ? leftValue : rightValue;
    }

    /**
     * Function to get the height value in the node
     * @param {NodeTree} noe
     * @returns {number} 
     */
    _getHeight(node){
        if(node == null){
            return 0;
        }
        return node.height;
    }

    /**
     * Returns the node if it exists on the tree
     * @param {number} value The value to be searched.
     * @return {Node}
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
                return node.key;
            }
        }else{
            return null;
        }
    }

    /**
     * Returns the parent node if it exists in the tree
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
            return null; 
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
            return null; 
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
     * @return {Boolean} the minimum value in the tree.
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
        return this.root != null ? false : true;
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
            return null; 
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
            return null; 
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
            return null; 
        var listValues = [];
        return this._posOrder(this.root, listValues); 
    } 

    _posOrder(node, listValues){
        if(node.left != null) this._posOrder(node.left, listValues);
        if(node.right != null) this._posOrder(node.right, listValues);
        if(node.key != null) listValues.push(node.key);
        return listValues;
    }

    /**
     * Returns how many node are in the tree
     * @return {number} 
     */
    getLength() {
        return this.length;
    }

    /**
     * Function to return weather a tree is complete or not
     * @return {Boolean} 
     */
    isComplete(){
        if (this.root == null)         
            return true; 
        let numberNodes = this.countNode();
        return this._isComplete(this.root, 0, numberNodes);
    }

    _isComplete(root, index, numberNodes) {
        if (root == null)         
            return true; 

        if (index >= numberNodes) 
            return false; 

        return (this._isComplete(root.left, 2 * index + 1, numberNodes) 
            && this._isComplete(root.right, 2 * index + 2, numberNodes));
    }

    /**
     * Function to return weather a tree is full or not
     * @return {Boolean} 
     */
    isFull(){
        if(this.root == null || this.root.left == null && this.root.right == null ) 
            return true; 
        return this._isFull(this.root);
    }

    _isFull(root){
        if(root == null || root.left == null && root.right == null ) 
            return true; 

        if ((root.left == null && root.right != null) ||
            (root.left != null && root.right == null))
                return false; 

        if((root.left != null) && (root.right != null)) 
            return (this._isFull(root.left) && this._isFull(root.right));
            
    }

    /**
     * Function to return weather a tree is perfect or not
     * @return {Boolean} 
     */
    isPerfect() {  
        if (this.root == null)  
            return true;  
        let leftMostLeaf = this.leftMostLeaf(this.root);  
        return this._isPerfect(this.root, leftMostLeaf, 0);  
    }  

    leftMostLeaf(node) {  
        let depth = 0;  
        while (node != null)  
        {  
            depth++;  
            node = node.left;  
        }  
        return depth;  
    }  

    _isPerfect(root, d, level) {  
        if (root == null)  
            return true;  
    
        if (root.left == null && root.right == null)  
            return (d == level+1);  
    
        if (root.left == null || root.right == null)  
            return false;  
    
        return this._isPerfect(root.left, d, level+1) && this._isPerfect(root.right, d, level+1);  
    }  
  
    /**
     * Function to get the number of node in the tree
     * @return {Number}
     */
    countNode(){
        if (this.root == null)
            return 0;
    
        var listOrderQueue = [];
        listOrderQueue.push(this.root);
        var nodes = 0;

        while (listOrderQueue.length > 0) {
            var n = listOrderQueue.shift();

            if (n.left != null)
                listOrderQueue.push(n.left);

            if (n.right != null)
                listOrderQueue.push(n.right);
            
            nodes = nodes + 1;
        }
        return nodes;
    }

    /**
     * Function to list all leafs in the tree
     * @return {Array} List of leaf values
     */
    listLeafNodes(){
        if (this.root == null)
            return null;
    
        var listLeafNode = [];
        listLeafNode.push(this.root);
        var listLeaf = [];

        while (listLeafNode.length > 0) {
            var n = listLeafNode.shift();

            if (n.left != null){
                listLeafNode.push(n.left);
            }

            if (n.right != null){
                listLeafNode.push(n.right);
            }

            if(n.left == null && n.right == null){
                listLeaf.push(n.key)
            }
            
        }
        return listLeaf;
    }



    /**
     * Returns whether the tree is empty or not
     * @return {boolean} Whether the tree is empty.
    */
    clear(){
        return this.root = null;
    }


    /**
     * Function to list all nodes in level order
     * @return {Array} List of leaf values
     */
    levelOrderQueue() {
        if (this.root == null)
            return null;
        
        var listOrderQueue = [];
        listOrderQueue.push(this.root);
        var listValues = []

        while (listOrderQueue.length > 0) {
            var n = listOrderQueue.shift();

            if (n.left != null)
                listOrderQueue.push(n.left);

            if (n.right != null)
                listOrderQueue.push(n.right);
            
            listValues.push(n.key)
        }
        return listValues;
    }


}

module.exports = BinarySearchTree;