
class TrieNode {
    constructor(isEnd, value ) {
        this.children = {};
        this.prefixes = 0;
        this.isEndOfWord = isEnd;
        this.character = value;
    }

}

module.exports = TrieNode;