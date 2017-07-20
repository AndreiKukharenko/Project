(function(global){

    var sorter = {
        bubbleSort : function(arr){
            let length = arr.length;
            let temp = 0;
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

        insertionSort : function(arr){
            let length = arr.length;
            let temp = 0;
            for (let index = 1; index < length; index++) {
                temp = arr[index];
                for (var j = index-1; j>=0 && arr[j] > temp; j--) {
                    arr[j+1] = arr[j];
                }
                arr[j+1] = temp;            
            }
            return arr;
        },

        selectionSort : function(arr){
            let length = arr.length;
            let temp = 0;
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

        quickSort : function(arr){
            let length = arr.length;


            
            return arr;
        }

    }
    Sorter = sorter;
})(this)