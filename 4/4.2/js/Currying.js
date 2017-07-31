(function(global){
  "use strict";
    var Currying = {
      curry : function(func, a) {
        return function(b){
          return function(c){
            return func.call(func, a, b, c);
          }
        }
      }
    }
  global.currying = Currying;
})(this)