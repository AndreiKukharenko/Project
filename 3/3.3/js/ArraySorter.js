

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

    sortedArr = arr.sort(sortNumber);
    function sortNumber(a,b) {
    return a - b;
    }

    
    arr.forEach(function(element){
        document.writeln(element)
    } )


document.writeln(
    "<p>bubble sort</p>"
)