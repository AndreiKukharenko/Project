(function(global){
    //'use strict';
    var apt = {
        sort  : function(array) {
            let sortedArr = arr.sort(function(a,b) {return a - b});
            return sortedArr
        },

        min : function(array){
            let minVal = Number.MAX_VALUE;
            for (var index = 0; index < array.length; index++) {
                if(minVal > array[index]) {
                    minVal = array[index];
                }
            }
            return minVal;
        },

        max : function(array){
            let maxVal = Number.MIN_VALUE;
            for (var index = 0; index < array.length; index++) {
                if(maxVal < array[index]) {
                    maxVal = array[index];
                }
            }
            return maxVal;
        },
        
        median : function(array) {
            let len = array.length;
            if(len%2===1) {
                return apt.sort(array)[len/2-0.5]
            }
            else {
                return (apt.sort(array)[len/2] + apt.sort(array)[len/2-1])/2
            }
        },

        getMaxSubSum_N2 : function(array) {
            var subSum;
            subSum = 0;
            for (var index = 0; index < array.length; index++) {
                var temp = 0;
                for (var j = index; j < array.length; j++) {
                    temp += array[j];
                    if (temp > subSum) {
                        subSum = temp;
                    }
                }
            }
            return subSum;         
        },

        getMaxSubSum_N : function(array) {
            var subSum, partialSum;
            subSum = partialSum = 0; 
            for (var index = 0; index < array.length; index++) {
                partialSum += array[index];
                if (subSum < partialSum) {
                    subSum = partialSum;
                }
                if (partialSum < 0) {
                    partialSum = 0; 
                }
            }
            return subSum;         
        }
    }; 

    global.APT = apt; //example of closure

})(this);