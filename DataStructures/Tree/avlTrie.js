const BinaryTrie = require('../Tree/binaryTree');

const BalanceState = {
    UNBALANCED_RIGHT: 'UNBALANCED_RIGHT',
    UNBALANCED_LEFT: 'UNBALANCED_LEFT',
    BALANCED: 'BALANCED',
}

class AvlTree extends BinaryTrie {

    /**
     * Inserts a new node with a specific key into the tree.
     * @param key The key being inserted.
     */
    insert(key) {
        super.insert(key);
        let currentNode = super.findNode(key);
        while (currentNode != null) {
            this.balance(currentNode, key);
            currentNode = super.findParent(currentNode.key);
         };
    }

    /**
     * Remove a node with a specific key from the tree.
     * @param {number} value The key being deleted.
     */
    remove(value) {
      currentNode = super.findParent(value);
      super.remove(value);
      this.balance(currentNode, value);
    }
    
    /**
     * Update height and rebalance the tree
     * @param {number} node The node to be update.
     */
    balance(node, key){
        let balanceValue = this.getBalance(node);

        if(balanceValue == BalanceState.UNBALANCED_RIGHT){
            if(key < node.left.key){
                return this.rotateLeftLeft(node); 
            }else if(key > node.left.key){
                this.rotateLeftRight(node);
            }
        }else if( balanceValue == BalanceState.UNBALANCED_LEFT){
            if(key > node.right.key){
                return this.rotateRightRight(node); 
            }else {
                this.rotateRightLeft(node);
            }
        }

        console.log('currentNodeeeeeee',node)


    }


    rotateRightLeft(rootNode) {
        const rightNode = rootNode.right;
        rootNode.right = null ;
    
        const rightLeftNode = rightNode.left;
        rightNode.left = null;
    
        if (rightLeftNode.right) {
          rightNode.left = rightLeftNode.right;
          rightLeftNode.right = null;
        }
    
        rootNode.right = rightLeftNode;
        rightLeftNode.right = rightNode;

        rightLeftNode.right.height = this.updateHeigh(rightLeftNode.right);
        rootNode.height = this.updateHeigh(rootNode);

        this.rotateRightRight(rootNode);
      }


    rotateRightRight(rootNode) {
        const rightNode = rootNode.right;
        rootNode.right = null;

        // var parentNode = super.findParent(rootNode.key);
        // console.log('parentNode', parentNode)

        // if (parentNode) {
        //   console.log('HEEEEE')
        //   parentNode.right = rightNode;
        //   parentNode.right.left = rootNode;
        // } else 

        if (rootNode === this.root) {
          this.root = rightNode;
          let leftChild = this.root.left;
          this.root.left = rootNode;
          this.root.left.right = leftChild
        }else{
          var parentNode = super.findParent(rootNode.key);
          rightNode.left = rootNode
          parentNode.right = rightNode;

          parentNode.right.left.height = this.updateHeigh(parentNode.right.left);
          parentNode.left.height = this.updateHeigh(parentNode.left);
          parentNode.height = this.updateHeigh(parentNode);

        }
    
        // if (rightNode.left) {
        //   rootNode.right = rightNode.left;
        // }
    
        // rightNode.left = rootNode;

        rightNode.height = this.updateHeigh(rightNode);
        rootNode.height = this.updateHeigh(rootNode);
        this.root.height = this.updateHeigh(this.root);

      }


    rotateLeftLeft(rootNode) {
      const leftNode = rootNode.left;
      rootNode.left = null;

      if (rootNode === this.root) {
        this.root = leftNode;
        let leftChild = this.root.right;
        this.root.right = rootNode;
        this.root.right.left = leftChild
      }else{
        var parentNode = super.findParent(rootNode.key);
        leftNode.right = rootNode
        parentNode.left = leftNode;

        parentNode.left.right.height = this.updateHeigh(parentNode.left.right);
        parentNode.right.height = this.updateHeigh(parentNode.right);
        parentNode.height = this.updateHeigh(parentNode);

      }

        leftNode.height = this.updateHeigh(leftNode);
        rootNode.height = this.updateHeigh(rootNode);
        this.root.height = this.updateHeigh(this.root);
      }
    
    
    rotateLeftRight(rootNode) {
        let leftNode = rootNode.left;
        rootNode.left = null;

        let leftRightNode = leftNode.right;
        leftNode.right = null;

        if (leftRightNode.left) {
            leftNode.right = leftRightNode.left;
            leftRightNode.left = null;
        }

        rootNode.left = leftRightNode;
        leftRightNode.left = leftNode;
    

        rootNode.height = this.updateHeigh(rootNode);
        leftRightNode.left.height = this.updateHeigh(leftRightNode.left);

        this.rotateLeftLeft(rootNode);
    }

    /**
     * Calculates the height of a node based on height
     * @param {NodeTree} node The node to be updated.
     * @return {number} Number of heigth
     */
    updateHeigh(node){
        return 1 + this.maxHeight(this.getHeight(node.left), this.getHeight(node.right));
    }


    /**
     * Gets the balance state of a node that indicates if is unbalanced or not.
     * @param {NodeTree} node The node to get the balance state.
     * @return {BalanceState} The balance factor is defined as an integer in the range of [-1, 1]
     */
    getBalance(node) { 
        if (node == null) {
            return 0; 
        }
        var heightDifference =  super.getHeight(node.left) - super.getHeight(node.right); 

        if(heightDifference == 0 || heightDifference == 1 || heightDifference == -1){
            return BalanceState.BALANCED;
        }else if (heightDifference > -1) {
            return BalanceState.UNBALANCED_RIGHT;
        }else if(heightDifference < -1){
            return BalanceState.UNBALANCED_LEFT;
        }
    } 
    

}


module.exports = AvlTree;