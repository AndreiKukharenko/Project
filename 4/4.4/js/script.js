(function(global){
    "use strict";
    var minusOne = function(current){
        return --current;
    }

    var res = linearUnfold(minusOne, 7);
    document.writeln("result: " + res);
})(this)