const ClassSort = require('./classSort');

class SelectionSort extends ClassSort{

    constructor() {
        super();
    }

    sort(){
        for (let i = 0; i < this.size; i++) {
            var minIndex = i;
            for (let j = i + 1; j <= this.size; j++) {
                if(this.data[minIndex] > this.data[j]){
                    minIndex = j;
                }
            }
            var temp = this.data[i]; 
            this.data[i] = this.data[minIndex]; 
            this.data[minIndex] = temp;
        }
    }

}
module.exports = SelectionSort;
