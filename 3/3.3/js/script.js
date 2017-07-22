
var arr = new Array(5, 15, 65,0, 56, 94, 77, 16, 555, 44, -5, 4, 0);
var arr1 = [5, 15, 17, 0, 56, 94, 77, 1, 77755, -5, 4, 0];
var arr2 = [21, 34, -5, 0, -7]; 

var arrayOfArrays = [arr, arr1, arr2]

document.writeln("<p>Initial arrays:</p>") 
    
    writeArr = function(arrays){
        arrays.forEach(function (array){
            array.forEach(function(element){
                document.writeln(element)
            })
            document.write("<br>");
        })
    }

    writeArr(arrayOfArrays);

document.writeln("<p>bubble sort:</p>");
document.writeln(Sorter.bubbleSort(arr));
document.writeln("<p>insertion sort:</p>");
document.writeln(Sorter.insertionSort(arr1) + "<br>");
document.writeln("<p>selection sort:</p>");
document.writeln(Sorter.selectionSort(arr) + "<br>");
document.writeln("<p>quick sort + reverse:</p>");
document.writeln(Sorter.quickSort(arr2) + "<br>");
document.writeln(Sorter.quickSort(arr2).reverse() + "<br>");
    

