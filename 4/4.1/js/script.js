var partialApp = partialLibrary.partialApp;

var personalMessageCreator = function(){
  var message = "";
  var space = " ";
  for (var index = 0; index < arguments.length; index++) {
    message += arguments[index] + space;
  }
    return message;
}

var congratulation = partialApp(personalMessageCreator, "Happy", "New Year," );
var congratulationToMike = congratulation("Mike", "!");

document.writeln(congratulationToMike)
document.writeln("<br></br>");

document.writeln("using built-in methods:<br></br>");
// using built-in method bind()
var congratulation2 = personalMessageCreator.bind(null, "Happy", "New Year,");
var congratulationToAnnie = congratulation2("Annie", "!");

document.writeln(congratulationToAnnie);
document.writeln("<br></br>");

// using built-in method apply()
var congratulation3 = personalMessageCreator.apply(personalMessageCreator, ["Happy", "New Year,"]);
var congratulationToJohn = congratulation2("John", "!");

document.writeln(congratulationToJohn);
