document.querySelector(".buttons__confirm").addEventListener('click', function() {
    var userInput = document.querySelector(".form__form-for-text");
    document.writeln(userInput.value)
}, false);

//document.writeln(parsedDate.getFullYear() + "<br></br>" + /*parsedDate.getMonth()*/ monthNames[parsedDate.getMonth()] + "<br></br>" + parsedDate.getDate() );


    var exampleDate = "2017$20$07";  // change this name, THAT'S AN INPUT

    var parsePattern = "YYYY/DD/MM";

    var formatPattern = "MM.DD.YYYY";

    document.writeln(DTF.parse(exampleDate, parsePattern).fromNow());
    document.writeln("<br></br>");
    document.writeln(DTF.parse(exampleDate, parsePattern));


    /*
    DTF.parse(exampleDate, parsePattern) : 
    return -1 : pattern and parsed string don't have the same length;
    return -2 : undefined
    */