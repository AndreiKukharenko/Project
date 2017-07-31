(function(global){
  "use strict";
  var partialApp = partialLibrary.partialApp;

  var generator = function(quantity, factor){
      var array = [];
      for(let i = 0; i < quantity; i++){
        array.push(Math.floor(Math.random() * factor));
      }
      return array;
  }
  var getSum = (x, y) => x + y;

  var tenRandomNumbers = partialApp(generator, 7);
  var randomNumbers = tenRandomNumbers(10);
  var sum = randomNumbers.linearFold(getSum);

  document.writeln(randomNumbers);
  document.writeln("<br></br>");
  document.writeln("sum of elements:  " + sum);
})(this);