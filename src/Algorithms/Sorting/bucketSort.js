const ClassSort = require('./classSort');

class BucketSort extends ClassSort{

    constructor() {
        super();
    }

    sort(){
        var list = {};
        for (let index = 0; index < this.size; index++) {

            var index_b = (10 * this.data[index]);
            var digit = parseInt(index_b.toString()[0]);
            var liste = [];
            if(list[digit]){
                var element  = list[digit];
                element.forEach(value => {
                    liste.push(value);
                });
                liste.push(this.data[index]);
                var obj = {
                    value : liste,
                };
                list[digit] = obj.value;
            }else{
                liste.push(this.data[index]);
                var obj = {
                    value : liste
                };
                list[digit] = obj.value;
            }
        }
        this.data = list;

        var listKeys = Object.keys(this.data);
        for (let index = 0; index < listKeys.length; index++) {
            const element = listKeys[index];
            this.bubble(this.data[element]);
        } 

        var listTotal = [];
        for (let index = 0; index < listKeys.length; index++) {
            const element = listKeys[index];
            var listValues = this.data[element];
            for (let index = 0; index < listValues.length; index++) {
                const element = listValues[index];
                listTotal.push(element);
            } 
        } 
        this.data = listTotal;

    }

    bubble(data){
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length - i; j++) {
                if(data[j] > data[j + 1]){
                    var temp = data[j]; 
                    data[j] = data[j + 1]; 
                    data[j + 1] = temp;
                }
            }
        }
    }

}


module.exports = BucketSort;
