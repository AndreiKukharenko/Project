var arr = new Array(5, 15, 65, 0, 54, 94, 77, 16, 5, -44, -5, 4, 13);
var arr1 = [5, -15, -65, 0, 56, 94, 27, -16, 5, -44, -5, 4, 13];

document.writeln("Initial array:  " + arr + "<br></br>");
document.writeln("Initial array1:  " + arr1 + "<br></br>");

document.writeln("<hr>" + "operations with array");

document.writeln(APT.min(arr));
document.writeln(APT.max(arr));
document.writeln(APT.median(arr)  + "<br></br>");

document.writeln("<hr>" + "operations with array1:");
document.writeln(APT.getMaxSubSum_N2(arr1));
document.writeln(APT.getMaxSubSum_N(arr1));


document.writeln("<hr>" + "examples from exercise");
document.writeln(APT.getMaxSubSum_N([-1, 2, 3, -9]));
document.writeln(APT.getMaxSubSum_N2([2, -1, 2, 3, -9]));
document.writeln(APT.getMaxSubSum_N([-1, 2, 3, -9, 11]))
document.writeln(APT.getMaxSubSum_N([-2, -1, 1, 2]))
document.writeln(APT.getMaxSubSum_N2([100, -9, 2, -3, 5]))
document.writeln(APT.getMaxSubSum_N([1, 2, 3]))
document.writeln(APT.getMaxSubSum_N([-1, -2, -3]))
