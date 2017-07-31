(function(global){
    "use strict";
    var isPositive = function (arg){
        if (arg > 0) return true;
        else return false;   
    }

    var arr0 = [5, 46, 87, -45, 90, 0, -11];
    var arr1 = arr0.notBuiltInFilter(isPositive);

    document.writeln("initial array: " + arr0 + "<br></br>")
    document.writeln("array after filtration: " + arr1);

    // using built-in filter() method:
    var resultByBuiltInFilter = arr0.filter(isPositive);
    console.log(resultByBuiltInFilter);
})(this)