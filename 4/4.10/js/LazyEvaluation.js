"use strict";
(function(global){
    var LazyEvaluation= {
        makeItLazy : function(func){
            return func.bind.apply(func, arguments);
        }
    }
    global.lazyEvaluation = LazyEvaluation;
})(this)
