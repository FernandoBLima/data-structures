const BinaryTrie = require('./binaryTree');
const NodeTree = require('./nodeTree')

const BalanceState = {
    UNBALANCED_RIGHT: 'UNBALANCED_RIGHT',
    UNBALANCED_LEFT: 'UNBALANCED_LEFT',
    BALANCED: 'BALANCED',
}

class AvlTree extends BinaryTrie {

    insert(value){
      this._insertAux(value);
      var node = this.findNode(value)
      if(node){
        this.rebalanceUp(node)
      }
    }

    _insertAux(value){
      if(value == null){
        return;
      }
      if(!this.root){
        this.root = new NodeTree(value);
      }else{
        this._insert(value, this.root);
      }
    }

    rebalanceUp(node) {
      if (node == null || node == null) return;
      this.rebalance(node);
      this.updateHeightUp()
      var parent = super.findParent(node.key);
      if (parent) {
        this.rebalanceUp(parent);
      }
    }

    rebalance(node) {
      var balanceOfNode = this.calculateBalance(node);
      if (balanceOfNode < -1) {
          if (this.calculateBalance(node.right) > 0) {
              leftRotation(node.getLeft());
          }
          this.rightRotation(node);
      }else if (balanceOfNode > 1) {
          if (this.calculateBalance(node.left) < 0) {
              rightRotation(node.getRight());
          }
          this.leftRotation(node);
      }
    }

    updateHeightUp(){
      var listLeaf = this.getLeaf();
      for (let index = 0; index < listLeaf.length; index++) {
        const element = listLeaf[index];
        var node = this.findNode(element);
        if(node){
          this._updateLeaf(node);
        }
      }
    }

    _updateLeaf(node){
      if (node != null){
        node.height = this.updateHeigh(node);
        var parent = super.findParent(node.key);
        if (parent) {
          this._updateLeaf(parent);
        }
      };
    }

    getLeaf(){
      if(!this.root){
        return false;
      }
      var list = []
      return this._getLeaf(this.root, list);
    }

    _getLeaf(node, listValues){
      if(!node.left && !node.right){
        listValues.push(node.key);
      }
      if(node.left){
        this._getLeaf(node.left, listValues)
      }
      if(node.right){
        this._getLeaf(node.right, listValues)
      }
      return listValues
    }


    calculateBalance(node) {
      var right, left;
      right = node.right == null ? 0 : node.right.height;
      left = node.left == null ? 0 : node.left.height;
      return left - right; 
    }



  leftRotation(rootNode){
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
      }
  }

  rightRotation(rootNode){
    const rightNode = rootNode.right;
    rootNode.right = null;
    if (rootNode === this.root) {
      this.root = rightNode;
      let leftChild = this.root.left;
      this.root.left = rootNode;
      this.root.left.right = leftChild
    }else{
      var parentNode = super.findParent(rootNode.key);
      rightNode.left = rootNode
      parentNode.right = rightNode;
    }
  }
  
    /**
   * Calculates the height of a node based on height
   * @param {NodeTree} node The node to be updated.
   * @return {number} Number of heigth
   */
    updateHeigh(node){
      return 1 + this.maxHeight(this.getHeight(node.left), this.getHeight(node.right));
  }


    _insert(value, currentNode){
      if(value < currentNode.key){
        if(!currentNode.left){
            currentNode.left = new NodeTree(value)
        }else{
          this._insert(value, currentNode.left)
        }
      } else {
        if(!currentNode.right){
            currentNode.right = new NodeTree(value)
        }else{
          this._insert(value, currentNode.right)
        }
      }
      currentNode.height = 1 + this.maxHeight(this.getHeight(currentNode.left), this.getHeight(currentNode.right));
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

  remove(value){
    if(value == null){
      return;
    }
    var node = this.findNode(value)
    this._remove(node)
  }

  _remove(node){
    var parent = super.findParent(node.key);
    if(node.right && node.left){

    }else if(!node.right && node.left){

    }else if(node.right && !node.left){

    }
    var parent = super.findParent(node.key);

    var balanceOfNode = this.calculateBalance(node);
  }


}


module.exports = AvlTree;