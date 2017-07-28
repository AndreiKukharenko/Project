var first = first.first;

var low = 10; 
var high = 92;

var isInRange = value => (value >= low && value <= high);

var arr0 = [5, 15, 19, -45, 90, 0, -11, 90.5];
var res = arr0.first(isInRange);

document.writeln("initial array: " + arr0 + "<br></br>")
document.writeln(res + " is the first element that is in range [10, 92]")
