(function(global){
    "use strict";
    var addHundred = function (arg){
        return arg + 100;   
    }

    var arr0 = [5, 46, 87];
    var arr1 = arr0.mapper(addHundred);

    document.writeln("initial array: " + arr0 + "<br></br>");
    document.writeln("array after mapping (add 100): " + arr1);

    // using built-in map() method:
    var arr2 = [25, 4, 9, 3];
    var roots = arr2.map(Math.sqrt);
    console.log(roots);
})(this)