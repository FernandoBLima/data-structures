const TrieNode = require('../Trie/trieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(true, '*');
        this.length = 0;
    }

    /**
     * Action to insert a string.
     * @param {number} key The string to be inserted.
     */
    insert(key){
        var currentValue = this.root;
        
        for (let index = 0; index < key.length; index++) {
            const element = key[index];
            if (currentValue.children[element]) {
                currentValue = currentValue.children[element];
            } else {
                this.length++;
                const newNode = new TrieNode(false, element);
                currentValue.children[element] = newNode;
                currentValue = newNode;
            }
        }
        currentValue.isEndOfWord = true;
    }

    /**
     * Action to insert a string.
     * @param {number} key The string to be inserted.
     */
    insertRecursive(key){
        this.length++;
        this._addNode(this.root, key);
    }


    _addNode(node, word) {
        if(!node || !word) return null;

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
    }

    /**
     * Returns the node, if it exists on the trie
     * @param {string} key The string to be searched in the structure.
     * @return {TrieNode} Node found if it exists
    */   
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

    /**
     * Checks whether the list is empty or not
     * @return {boolean} 
    */
    isEmpty(){
        return this.length > 0 ? false : true;
    }

    /**
     * Returns the size of the tree
     * @return {number}
     */
    getLength(){
        return this.length;
    }

    /**
     * Clear the structure
     */
    clear(){
        this.root = new TrieNode(true, '*');
    }

    /**
     * Action to remove string with a specific prefix.
     * @param {Boolean}
     */
    remove(key) {
        if(this.search(key)){
            this._removeNode(this.root ,key, key, 0);
            return true;
        }else{
            return false;
        }
    }

    _removeNode(node, keySlice ,key, index) {
        var letter = key[index];
        var current = node.children[letter];
        if(current){
            keySlice = key.slice(index + 1, key.length);
            var shouldRemove = this._removeNode(current, keySlice, key, index + 1 );
            if(shouldRemove && !this._hasChild(node.children[letter].children)){
                this.length--;
                delete node.children[letter];
                key = keySlice;
                return true;
            }else{
                return false;
            }
        }
        return true;
    }


    _hasChild(obj) {
        var count = 0;
        for(var key in obj) {
            count = count + 1;
        }
        return count > 0 ? true : false;
    }

    /**
     * Returns a list of words, if it exists on the trie
     * @param {string} key The string to be searched in the structure.
     * @return [strings] Array of strings if if exists on the
    */   
    suggestionWord(key) {
        var word = this.searchWord(key);
        if(word){
            var suggestions = [];
            if(word.isEndOfWord){
                suggestions.push(key);
            }
            return this._suggestionWord(word, key, suggestions);
        }
        return [];
    }


    searchWord(key){
        var currentValue = this.root;
        for (let index = 0; index < key.length; index++) {
            const element = key[index];
            if (currentValue.children[element]) {
                currentValue = currentValue.children[element];
            } else{
                return null;
            }
        }
        return currentValue;
    }

    _suggestionWord(node, lastWord, suggestions){

        var letters = Object.keys(node.children); 
        for (let index = 0; index < letters.length; index++) {
            const element = letters[index];
            if(node.children[element].isEndOfWord){
                suggestions.push(lastWord + node.children[element].character);
                this._suggestionWord(node.children[element], lastWord + node.children[element].character, suggestions);
            }else{
                var rest = lastWord + node.children[element].character;
                this._suggestionWord(node.children[element], rest, suggestions);
            }
        }

        return suggestions;
    }

}

module.exports = Trie;