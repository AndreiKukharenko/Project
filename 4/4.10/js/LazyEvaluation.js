(function(global){
    "use strict";
    var LazyEvaluation= {
        makeItLazy : function(func){
            return func.bind.apply(func, arguments);
        }
    }
    global.lazyEvaluation = LazyEvaluation;
})(this);
