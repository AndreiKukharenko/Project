(function(global){
  "use strict";
  var curry  = currying.curry;

  var createConcreteDate = function(year, month, date){
    return new Date(year, month, date).toDateString();
  }

  var curried = curry(createConcreteDate, 2017);
  var concreteDate = curried(2)(11);
  document.writeln(concreteDate);
})(this);