
class MergeSort {

    constructor() {
        this.data = []
        this.size = 4;
    }


    setData(size){
        this.size = size;
        for (let index = 0; index < size; index++) {
            this.data[index] = Math.floor(Math.random() * 100);
        }
    }

    sort(){
        if(!this.data){
            return;
        }
        this._sort(this.data, 0, this.size-1);
    }
    

    _sort(data, left, right){
        if(left < right){
            var middle = Math.floor((right + left) / 2)
            this._sort(data, left, middle);
            this._sort(data, middle + 1, right);
            this._merge(data, left, middle, right);

        }
    }

    _merge(array, indiceInicio, meio, indiceFim){
        var i = indiceInicio;
        var j = meio + 1;
        var k = indiceInicio;

        var auxiliar = []

        for (var u = indiceInicio; u <= indiceFim; u++) {
            auxiliar[u] = array[u];
        }
        console.log(indiceInicio)
        console.log(meio)
        console.log(indiceFim)

        console.log(auxiliar)
        console.log(array)
        console.log(auxiliar[i])
        console.log(auxiliar[j])
        console.log('-----------')

        while (i <= meio && j <= indiceFim) {
            if (auxiliar[i] >= (auxiliar[j]) ) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                i++;
            } else {
                // array[k] = auxiliar[j];
                j++;
            }
            k++;
        }

        // // //Append de itens que não foram usados na Junção
        while (i <= meio) {
            // array[k] = auxiliar[i];
            i++;
            k++;
        }

        // // //Append de itens que não foram usados na Junção
        while (j <= indiceFim) {
            // array[k] = auxiliar[j];
            j++;
            k++;
        }
    }



    swap(items, leftIndex, rightIndex){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }

}


module.exports = MergeSort;