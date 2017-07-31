(function(global){
    "use strict";
    var factorial = (x) => {
        if(isNaN(x) || !x instanceof Number) {
            throw TypeError();
        }
        if(x <= 1) {
            return 1;
        }
        else {
            return x * factorial(x - 1);
        }
    };
    var memFactorial = memo.memoize(factorial);

    var f = memFactorial(4);
    document.writeln(f);
    document.writeln("<br></br>")

    var f = memFactorial(5);
    document.writeln(f);
    document.writeln("<br></br>")

    var f = memFactorial(4);
    document.writeln(f);
})(this);