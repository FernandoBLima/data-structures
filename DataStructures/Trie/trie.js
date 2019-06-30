const TrieNode = require('../Trie/trieNode');

class Trie {
    constructor() {
       this.root = new TrieNode(true, '*')
    }

    insert(key){
        var currentValue = this.root;

        for (let index = 0; index < key.length; index++) {
            const element = key[index];
            if (currentValue.children[element]) {
                currentValue = currentValue.children[element];
            } else {
                const newNode = new TrieNode(false, element);
                currentValue.children[element] = newNode;
                currentValue = newNode;
            }
          }
          currentValue.isEndOfWord = true;
    }

    insertRecursive(key){
        if(!this.root) {
            return null;
        }
        this._addNode(this.root, key);
    }


    _addNode(node, word) {
        if(!node || !word) return null;

        node.prefixes++;
        var child = node.children[word[0]];
        if(!child) {
          child = new TrieNode(false, word[0]);
          node.children[word[0]] = child;
        }
        var remainder = word.substring(1);
        if(!remainder) {
          child.isEndOfWord = true;
        }
        this._addNode(child, remainder);
      };


    search(key){
        var currentValue = this.root;

        for (let index = 0; index < key.length; index++) {
            const element = key[index];
            if (currentValue.children[element]) {
                currentValue = currentValue.children[element];
            } else{
                return false;
            }
          }

          return (currentValue != null && currentValue.isEndOfWord);
    }

    isEmpty(){
        return this.root.children.length > 0 ? false : true;
    }


      remove(key) {
        if(this.search(key)){
            this._removeNode(this.root ,key, key, 0);
        }else{
            return false;
        }
      };

      _removeNode(node, keySlice ,key, index) {
       if(index == key.length){
            if(node.isEndOfWord && !this.hasChild(node.children)){
                node.remove = true;
                return true;
            }
            return false;
        }
        var letter = key[index];
        var current = node.children[letter]
        if(current){
            var keySlice = key.slice(index + 1, key.length);
            var shouldRemove = this._removeNode(current, keySlice, key, index + 1 );
            if(shouldRemove && !this.hasChild(node.children[letter].children)){
                delete node.children[letter];
                key = keySlice;
                return true
            }
        }
        return true

    }


    hasChild(obj) {
        var count = 0;
        for(var key in obj) {
            if(obj.hasOwnProperty(key)){
                count = count + 1;
            }
        }
        return count > 0 ? true : false;
    }

    suggestionWord(key) {
        var search = this.searchWord(key)
        var suggestions = [];
        return this._suggestionWord(search,key , key, key, suggestions);
      };


    searchWord(key){
        var currentValue = this.root;

        for (let index = 0; index < key.length; index++) {
            const element = key[index];
            if (currentValue.children[element]) {
                currentValue = currentValue.children[element];
            } else{
                return false;
            }
          }

          return currentValue
    }

    _suggestionWord(node, key, word, lastWord, arra){

        var letters = Object.keys(node.children); 

        for (let index = 0; index < letters.length; index++) {
            const element = letters[index];
            if(node.children[element].isEndOfWord){
                arra.push(lastWord + node.children[element].character)
                this._suggestionWord(node.children[element], key, word, '', arra)
            }else{
                var rest = lastWord + node.children[element].character;
                this._suggestionWord(node.children[element], key, word, rest, arra)
            }

        }
        return arra

    }


}

module.exports = Trie;