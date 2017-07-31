(function(global){
    "use strict";
    var First = {
        first : function(fn){
            if (!this instanceof Array){
                throw new TypeError();
            }
            let result = "not found";
            let array = this;
            for (let i = 0; i < array.length; i++){
                if (fn(array[i])) {
                    result = array[i];
                    break;
                }
            }
            return result;
        }
    }
    Array.prototype.first = First.first;
})(this)