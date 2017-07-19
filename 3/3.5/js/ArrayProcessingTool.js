var APT = {
    
    sort  : function(array) {
        let sortedArr = arr.sort(sortNumber);
        function sortNumber(a,b) {
        return a - b;
        }
    return sortedArr
    },

    min : function(array){
        return APT.sort(array)[0];
    },

    max : function(array){
        return APT.sort(array)[array.length-1];
    },
    
     //хорошо бы где-то хранить уже отсортированный массив
    median : function(array) {
        let len = array.length;
        if(len%2===1) return APT.sort(array)[len/2-0.5];
        else return (APT.sort(array)[len/2] + APT.sort(array)[len/2-1])/2;
        // если числа в массиве повторяются, их учитывать?
    },

    getMaxSumSum : function(array) {
        
    }

    //var arrAsString = sortedArray.join(";  ");
    
}

