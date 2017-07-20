var arr = new Array(5, 15, 65, 0, 56, 94, 77, 16, 5, -44, -5, 4, 13);
var arr1 = [5, -15, -65, 0, 56, 94, 77, -16, 5, -44, -5, 4, 13];

document.writeln(arr1 + "<br></br>");

/*document.writeln(APT.min(arr));
document.writeln(APT.max(arr));
document.writeln(APT.median(arr)  + "<br></br>");
document.writeln(APT.getMaxSubSum_N2(arr1));
document.writeln(APT.getMaxSubSum_N(arr1));*/

document.writeln(APT.getMaxSubSum_N([-1, 2, 3, -9]));
document.writeln(APT.getMaxSubSum_N2([2, -1, 2, 3, -9]));
document.writeln(APT.getMaxSubSum_N([-1, 2, 3, -9, 11]))
document.writeln(APT.getMaxSubSum_N([-2, -1, 1, 2]))
document.writeln(APT.getMaxSubSum_N2([100, -9, 2, -3, 5]))
document.writeln(APT.getMaxSubSum_N([1, 2, 3]) + "<br></br>")
document.writeln(APT.getMaxSubSum_N([-1, -2, -3]))
