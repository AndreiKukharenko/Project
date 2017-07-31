(function(global){
    "use strict";
    var LF = {
        linearfold : function(callback, initValue){
            if (!this instanceof Array){
                throw new TypeError();
            }
            var total = (initValue === undefined) ? undefined : initValue;
            let array = this;
            for(let i = 0; i < array.length; i++){
                total = (total !== undefined) 
                    ? callback.call(undefined, total, array[i], i, array) 
                    : array[i];
            }
            return total;
        }
    }
    Array.prototype.linearfold = LF.linearfold;
})(this);