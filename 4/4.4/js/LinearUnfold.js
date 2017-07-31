(function(global){
    "use strict";
    var LU = {
        linearUnfold : function(callback, initValue){
            var arr = [];
            var value = initValue;
            do{
                arr.push(value);
                value = callback(value);
            }while(value);
            return arr;
        }
    }
    global.linearUnfold = LU.linearUnfold;
})(this);