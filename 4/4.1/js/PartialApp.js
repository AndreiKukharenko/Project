(function(global){
  "use strict";
  var PartialLibrary = {
    partialApp : function(){
      var slice = Array.prototype.slice;
      var func = arguments[0];
      var args = slice.call(arguments, 1);
      return function(){
          return func.apply(this, args.concat(slice.call(arguments, 0)));
      }
    }
  }
  global.partialLibrary = PartialLibrary;
})(this)
