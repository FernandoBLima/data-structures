const ClassSort = require('./classSort');


class CocktailSort extends ClassSort{

    constructor() {
        super();
    }

    sort(){
        var swapped = true; 
        var start = 0; 
        var end = this.data.length;
        while(swapped){
            swapped = false; 
            for (let i = 0; i < end ; i++) {
                if(this.data[i] > this.data[i + 1]){
                    swapped = true;
                    var temp = this.data[i]; 
                    this.data[i] = this.data[i + 1]; 
                    this.data[i + 1] = temp;
                }
            }
            if (!swapped) 
                break;
            swapped = false; 
            end--;
            for (let j = end; j >=  start; j--) {
                if(this.data[j] < this.data[j - 1]){
                    swapped = true;
                    var temp = this.data[j - 1]; 
                    this.data[j -  1] = this.data[j]; 
                    this.data[j] = temp;
                }
            }
            start++;
        }
    }

}


module.exports = CocktailSort;