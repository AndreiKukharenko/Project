(function(global){
   "use strict";
    var sorter = {
        bubbleSort : function(array){
            var arr = array.slice(0);;
            var length = arr.length;
            var temp = 0;
            for (let index = length - 1; index >= 0 ; index--) {
                for (let j = 0; j < index; j++) {
                    if(arr[j] > arr[j+1]) {
                        temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
            return arr;
        },

        insertionSort : function(array){
            var arr = array.slice(0);;
            var length = arr.length;
            var temp = 0;
            for (let index = 1; index < length; index++) {
                temp = arr[index];
                for (var j = index-1; j>=0 && arr[j] > temp; j--) {
                    arr[j+1] = arr[j];
                }
                arr[j+1] = temp;            
            }
            return arr;
        },

        selectionSort : function(array){
            var arr = array.slice(0);;
            var length = arr.length;
            var temp = 0;
            for (let index = 0; index < length - 1; index++) {
                let indexMin = index;
                for (var j = index + 1; j < length; j++) {
                    if (arr[j] < arr[indexMin]) indexMin = j;
                } 
                temp = arr[index];
                arr[index] = arr[indexMin];
                arr[indexMin] = temp;
            }
            return arr;
        },

        quickSort : function(arr, left, right){
            var i, j, pivot;
            if (left == right) {
                left = 0;
                right = arr.length - 1;
            }
            i = left; 
            j = right;
            pivot = arr[Math.floor((i + j)/2)];

            do {
                while (arr[i] < pivot) {
                    i++;
                }
                while (arr[j] > pivot) {
                    j--;
                }
                if (i <= j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]]; //nice swap))
                    i++;
                    j--;
                }  
            } while (i <= j)

            if (i < right) {
                this.quickSort(arr, i, right);
            }
            if (left < j) {
                this.quickSort(arr, left, j);
            }   
        return arr;
        }
    };
    global.Sorter = sorter;
})(this)