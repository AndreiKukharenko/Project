
var multiply = (x, y) => x * y;

var makeItLazy = lazyEvaluation.makeItLazy;

var getItNow = makeItLazy(multiply, 5, 7);

document.writeln(getItNow());