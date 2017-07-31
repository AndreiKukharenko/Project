(function(global){
    "use strict";
    var isEven = function (arg){
        if (arg%2 == 0) return true;
        else return false;   
    }

    var calcAverage = function(previousValue, currentValue, index, array){
        var avg = previousValue;
        var length = array.length - 1;
        avg = (index == length) ? avg/(length +1) : avg + currentValue;
        return avg;
    }

    var arr0 = [1, 23, 2, 6, 12, 0];
    var arr1 = arr0.notBuiltInFilter(isEven);
    var avg = arr1.linearfold(calcAverage);

    document.writeln("initial array: " + arr0 + "<br></br>")
    document.writeln("array after filtration: " + arr1);
    document.writeln("average: " + avg);
})(this);