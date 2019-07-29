const ClassSort = require('./classSort');

class QuickSort extends ClassSort{

    constructor() {
        super();
    }

    sort(){
        if(!this.data){
            return;
        }
        this._sort(this.data, 0, this.size-1);
    }
    

    _sort(data, left, right){
        if(left < right){
            var index = this._partitionRandom(data, left, right); 
            this._sort(data, left, index - 1);
            this._sort(data, index, right);
        }
    }


    _partitionLast(items, left, right){
        var pivot = items[right]; 
        var i = (left - 1);
        for (let j = left; j < right; j++) {
            const element = items[j];
            if(element <= pivot){
                i++;
                this.swap(items, i, j); 
            }
            
        }
        this.swap(items, i + 1, right); 
        return i + 1;
    }

    _partitionRandom(items, left, right){
        var pivot = items[Math.floor(Math.random() * right)]; 
        while (left <= right) {
            while (items[left] < pivot) {
                left++;
            }
            while (items[right] > pivot) {
                right--;
            }
            if (left <= right) {
                this.swap(items, left, right); 
                left++;
                right--;
            }
        }
        return left;
    }

    _partition(items, left, right){
        var pivot = items[Math.floor((right + left) / 2)]; 
        while (left <= right) {
            while (items[left] < pivot) {
                left++;
            }
            while (items[right] > pivot) {
                right--;
            }
            if (left <= right) {
                this.swap(items, left, right); 
                left++;
                right--;
            }
        }
        return left;
    }

    swap(items, leftIndex, rightIndex){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }

}


module.exports = QuickSort;