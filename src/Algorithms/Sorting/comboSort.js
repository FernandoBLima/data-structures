const ClassSort = require('./classSort')


class ComboSort extends ClassSort{

    constructor() {
        super()
    }

    getGap(gap) 
    { 
        gap = (gap * this.size) / 13; 
        if (gap < 1) return 1; 
        return gap; 
    } 

    sort(){
        var size = this.data.length;
        var gap = size; 
        var swapped = true; 
        while (gap != 1 || swapped == true) 
        { 
            gap = this.getGap(gap); 
            swapped = false; 
            for (var i = 0; i < size - gap; i++) 
            { 
                if (this.data[i] > this.data[i+gap]) 
                { 
                    var temp = this.data[i]; 
                    this.data[i] = this.data[i+gap]; 
                    this.data[i+gap] = temp; 
                    swapped = true; 
                } 
            } 
        } 
    }

}


module.exports = ComboSort;