class IndexHash {
    constructor(data, key) {
        this.value = data;
        this.key = key;
        this.next = null;
    }
}
module.exports = IndexHash;