(function(global){
    "use strict";
    var result;
    var arr = [2, -5, 1, 0, 4, 6];

    var squareSum = function(previousValue, currentValue, index, array){
        if(index == 1){
            previousValue = previousValue * previousValue;
        }
        return previousValue + currentValue * currentValue;
    }

    result = arr.linearfold(squareSum);
    document.writeln("array: " + arr + "<br></br>")
    document.writeln("sum of squares: " + result);

    //using JS built-in method is Array.prototype.reduce()
    var result2 = arr.reduce(squareSum);
    console.log(result2);
})(this);