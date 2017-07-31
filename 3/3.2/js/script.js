(function(global){
    "use strict";
    document.writeln("<p>Calculator supports brackets and commas</p>");
    var str = "((15+2.5)/5+19)";

    var str2 = "console.log(33)"

    document.writeln(StrCalc.calculate(str)+ "<br></br>");
    document.writeln(StrCalc.calculate(str2));
})(this);