(function(global){
    "use strict";
    var Filter = {
            notBuiltInFilter : function(fn){
                if (!this instanceof Array){
                    throw new TypeError();
                }
                let result = [];
                let array = this;
                for (let i = 0; i < array.length; i++){
                    if (fn(array[i])) result.push(array[i]); 
                }
                return result;
            }
        }
    Array.prototype.notBuiltInFilter = Filter.notBuiltInFilter;
})(this);