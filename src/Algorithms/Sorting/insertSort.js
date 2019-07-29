const ClassSort = require('./classSort');

class InsertSort extends ClassSort{

    constructor() {
        super();
    }

    sort(){
        for (let i = 1; i < this.size; i++) {
            var aux = this.data[i];
            var pointer = i - 1;
            while(pointer >= 0 && aux < this.data[pointer]){
                this.data[pointer+1] = this.data[pointer];
                pointer = pointer - 1;
            }
            this.data[pointer+1] = aux;
            // console.log(this.data)
        }
    }

}


module.exports = InsertSort;
