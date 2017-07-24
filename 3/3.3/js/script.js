
var arr = new Array(5, 15, 65, 0, 56, 94, 77, 16, 555, 44, -5, 4, 0);

document.writeln("<p>Initial array:</p>") 
    
    writeArr = function(array){
            array.forEach(function(element){
                document.writeln(element)
            })
            document.write("<br>");
    }

    writeArr(arr);

document.writeln("<p>bubble sort:</p>");
document.writeln(Sorter.bubbleSort(arr) + "<br>");
/*document.writeln("<p>insertion sort:</p>");
document.writeln(Sorter.insertionSort(arr) + "<br>");
document.writeln("<p>selection sort:</p>");
document.writeln(Sorter.selectionSort(arr) + "<br>");
document.writeln("<p>quick sort + reverse:</p>");
document.writeln(Sorter.quickSort(arr) + "<br>");
document.writeln(Sorter.quickSort(arr).reverse() + "<br>");*/
    
    writeArr([arr]);

