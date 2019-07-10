const ClassSort = require('./classSort')


class BubbleSort extends ClassSort{

    constructor() {
        super()
    }

    sort(){
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size - i; j++) {
                if(this.data[j] > this.data[j + 1]){
                    var temp = this.data[j]; 
                    this.data[j] = this.data[j + 1]; 
                    this.data[j + 1] = temp
                }
                console.log(this.data)
            }
        }
        return this.data;
    }

}


module.exports = BubbleSort;
