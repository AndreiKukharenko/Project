
var exampleDate = "2017/22/07 16:55:21";  

var parsePattern = "YYYY/DD/MM HH:mm:ss";

var formatPattern = "/MM.DD/YYYY YY";

document.writeln("exampleDate: " + exampleDate +"<br></br>");
document.writeln("parsePattern: " + parsePattern + "<br></br>");
document.writeln("formatPattern: " + formatPattern + "<br></br>");
document.writeln("<hr>");

document.writeln("parse():  " + DTF.parse(exampleDate, parsePattern));
document.writeln("<br></br>");

precision = 99.9;

document.writeln("parse.fromNow() with  precision " + precision + "   " + DTF.parse(exampleDate, parsePattern).fromNow(precision));
document.writeln("<br></br>");

dd = new Date('Sun Jul 23 2017 16:55:21 GMT+0300 (Russia TZ 2 Standard Time)');
document.writeln("parse.from( parse())  " + DTF.parse(exampleDate, parsePattern).from(DTF.parse("20170201", "YYYYMMDD")));
document.writeln("<br></br>");
document.writeln("parse.from( Sun Jul 23 2017 16:55:21)  " + DTF.parse("20170201", "YYYYMMDD").from(dd));
document.writeln("<br></br>");
document.writeln("parse.from( parse(concreteDate))  " + DTF.parse("20160201", "YYYYMMDD").from(dd));
document.writeln("<br></br>");
document.writeln("parse.format:  " + DTF.parse(exampleDate, parsePattern).format(formatPattern));


    /*  ERROR CODE
    DTF.parse, DTF.format : 
    return -1 : incorrect input: pattern and parsed string don't have the same length;
    return -2 : parameter undefined;

    */
