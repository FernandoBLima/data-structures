const Heap = require('./heap');


class HeapMin extends Heap {
    constructor() {
        super()
      }


      shouldSwap(childIndex, parentIndex) {
        return this.list[childIndex] < this.list[parentIndex]
    }


}

module.exports = HeapMin;
