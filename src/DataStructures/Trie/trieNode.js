
class TrieNode {
    constructor(isEnd, value ) {
        this.children = {};
        this.isEndOfWord = isEnd;
        this.character = value;
    }

}

module.exports = TrieNode;