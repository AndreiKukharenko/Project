"use strict";

(function(global){
    var First = {
        first : function(fn){
            let result = "not found";
            if (!this instanceof Array){
                throw new TypeError();
            }
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
    global.first = First;
})(this)
