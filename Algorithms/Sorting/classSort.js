class ClassSort {

    constructor() {
        this.data = [];
        this.size = 0;
    }

    setData(size){
        this.size = size;
        for (let index = 0; index < size; index++) {
            this.data[index] = (Math.random() * 10).toFixed(0);
        }
    }

}

module.exports = ClassSort;
