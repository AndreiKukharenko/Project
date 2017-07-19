var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
/* YYYY YY MM M DD D HH H mm m ss s  */
var exampleDate = "03/06/19";  // change this name, THAT'S AN INPUT

var parsePattern = "DD/MM/YY YYYY";

var parsedDateJSON={
    year:"", 
    month:"",
    date:""
}


var supportedSymbols ={
    'Y' : {
        extractionFunc: function(extractedChar, parsedDate){
            parsedDate.year += extractedChar;
            parsedDate.yearPattern += 'Y';
        }
    }

};

document.querySelector(".buttons__confirm").addEventListener('click', function() {
    var userInput = document.querySelector(".form__form-for-text");
    document.writeln(userInput.value)
}, false);


//document.write("The month name: " + monthNames[dd.getMonth()]);

for (var index = 0; index < parsePattern.length; index++) {

    var character = parsePattern[index];
    var symbol = supportedSymbols[character];
    symbol.extractionFunc(exampleDate[index], parsedDateJSON);

    if(parsePattern[index]==="Y") parsedDateJSON.year+=exampleDate[index];
    if(parsePattern[index]==="M") parsedDateJSON.month+=exampleDate[index];
    if(parsePattern[index]==="D") parsedDateJSON.date+=exampleDate[index];
    //TODO: check  parsed data (is it a number or . or / and so on)
    // create mapping
}
var parsedDate = new Date(parsedDateJSON.year, parsedDateJSON.month, parsedDateJSON.date);




//document.writeln(parsedDate.getFullYear() + "<br></br>" + /*parsedDate.getMonth()*/ monthNames[parsedDate.getMonth()] + "<br></br>" + parsedDate.getDate() );

document.writeln(parsedDate.getFullYear());

var formattedDate = "";

var dd = mm = yyyy = true; //flags

for (var index = 0; index < formatPattern.length; index++) {
    let value = formatPattern[index];
    if (value=="/" || value=="." || value=="-") {
        formattedDate += value; 
        continue;
    }
    if(value==="Y"&& yyyy) {
        formattedDate += parsedDateJSON.year; 
        yyyy=false;
        continue;
    }
    else if(value==="M" && mm) {
        formattedDate += parsedDateJSON.month;
        mm = false;
        continue;
    }
    else if(value==="D" && dd) {
        formattedDate += parsedDateJSON.date;
        dd=false;
        continue;
    }
}
document.writeln("<br></br>" + formattedDate);
