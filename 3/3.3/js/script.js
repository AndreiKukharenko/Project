
var arr = new Array(5, 15, 65,0, 56, 94, 77, 16, 555, 44, -5, 4, 0);
var arr1 = [5, 15, 65, 0, 56, 94, 77, 16, 555, 44, -5, 4, 0];
var sortedArr=0;

    document.writeln(
        "<p>Initial array</p>"
    ) 

    arr.forEach(function(element){
        document.writeln(element)
    } )

    document.write("<br>");


    function output(sortedArray){
        var arrAsString = sortedArray.join(";  ");
        getClass(".result__output").innerHTML = arrAsString;
    }

    /** for convenience) 
    accepts receivedClass as ".className"*/   /*
    var getClass = function(receivedClass){
        var dd =  document.querySelector(receivedClass);
        console.log(dd);
        return dd;
    }
    
*/
    document.writeln("<p>bubble sort</p>");
    document.writeln(Sorter.bubbleSort(arr));
    document.writeln("<br>" + Sorter.insertionSort(arr));
    document.writeln("<br>" + Sorter.selectionSort(arr));
    document.writeln("<br>" + Sorter.quickSort(arr));
    
