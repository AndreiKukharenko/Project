document.querySelector(".buttons__confirm").addEventListener('click', function() {
    var userInput = document.querySelector(".form__form-for-text");
    document.writeln(userInput.value)
}, false);

    var exampleDate = "2017/20/07";  

    var parsePattern = "YYYY/DD/MM";

    var formatPattern = "MM.DD.YYYY";

    //document.writeln(DTF.parse(exampleDate, parsePattern).fromNow());
    //document.writeln(DTF.parse(exampleDate, parsePattern));
    //document.writeln(DTF.parse(44));
    document.writeln(DTF.parse(exampleDate, parsePattern).format(formatPattern, exampleDate));

    /*
    DTF.parse, DTF.format : 
    return -1 : pattern and parsed string don't have the same length;
    return -2 : undefined;

    */