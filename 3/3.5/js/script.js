var arr = new Array(5, 15, 65, 0, 56, 94, 77, 16, 555, -44, -5, 4);


document.writeln(APT.sort(arr) + "<br></br>");

document.writeln(APT.min(arr));
document.writeln(APT.max(arr));
document.writeln(APT.median(arr));

/*output = function (sortedArray){
    getClass(".result__output").innerHTML = arrAsString;
    }

    additional : function() {
    
   //accepts receivedClass as ".className"
    var getClass = function(receivedClass){
        var dd =  document.querySelector(receivedClass);
        console.log(dd);
        return dd;
    }
*/