
var exampleDate = "2017/02/07 16:55:21";  

var parsePattern = "YYYY/DD/MM HH:mm:ss";

var formatPattern = "/MM.DD/YYYY YY";

document.writeln("exampleDate: " + exampleDate +"<br></br>");
document.writeln("parsePattern: " + parsePattern + "<br></br>");
document.writeln("formatPattern: " + formatPattern + "<br></br>");
document.writeln("<hr>");

document.writeln("parse():  " + DTF.parse(exampleDate, parsePattern));
document.writeln("<br></br>");
document.writeln("parse.fromNow()  " + DTF.parse(exampleDate, parsePattern).fromNow(100));
//document.writeln(DTF.parse(44));
document.writeln("<br></br>");
//document.writeln("<br></br>" + DTF.parse(exampleDate, parsePattern).format(formatPattern));


    /*  ERROR CODE
    DTF.parse, DTF.format : 
    return -1 : incorrect input: pattern and parsed string don't have the same length;
    return -2 : parameter undefined;

    */
