"use strict";
(function(global){
    var CustomMapper = {
            mapper : function(fn){
                let result = [];
                let array = this;
                if (!array instanceof Array){
                    throw new TypeError();
                }
                for (let i = 0; i < array.length; i++){
                    result[i] = fn(array[i]); 
                }
                return result;
            }
        }
    Array.prototype.mapper = CustomMapper.mapper;
    //global.customMapper = CustomMapper;
})(this)
