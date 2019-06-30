
class TrieNode {
    constructor(isEnd, value ) {
        this.children = {};
        this.prefixes = 0;
        this.isEndOfWord = isEnd;
        this.character = value;
    }

    getCharacter(){
        return this.character;
    }

    getEnd(){
        return this.isEndOfWord;
    }

    getChild(){
        return this.children;
    }
}

module.exports = TrieNode;