(function(global){
    "use strict";
    var Memo = {
        memoize : function(func){
            if(!func) {
                throw new TypeError;
            }
            const cache = {};
            return function(arg){
                arg = JSON.stringify(arg);
                if(cache[arg]){
                    return cache[arg];
                }
                else{
                    cache[arg] = func(arg);
                    return cache[arg];
                }
            }
        }
    };
    global.memo = Memo;
})(this)