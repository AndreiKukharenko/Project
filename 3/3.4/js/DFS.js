(function(global){
    'use strict';
    var dfs = { 
        depthFirst : function(obj, find, resultParent, pathParent){
            var path = pathParent || "";
            var result = resultParent || [];
            if(obj instanceof Array && !(obj instanceof String) ) {
                for(var i = 0; i < obj.length; i++) {
                    var currentValue = obj[i];
                    path = path + "[" + i + "].";
                    var createDescriptionOf = function(typeEl){
                            let element = {
                                value : currentValue,
                                path : path
                            };
                            return JSON.stringify(element);
                        };
                    
                    if (!(currentValue instanceof Array) && !(currentValue instanceof Object)
                        && (currentValue + "").search(find) >= 0) {
                            result.push(createDescriptionOf (currentValue));
                    }
                    this.depthFirst(currentValue, find, result, path);
                }
            }else{
                var keys = Object.keys(obj);
                for(let index = 0; index < keys.length; index++) {
                    let key = keys[index];
                    let value = obj[key];
                    path = path + key + ".";
                    var createDescriptionOf = function(typeEl){
                        let element = {
                            key : key,
                            value : obj[i],
                            type : typeEl,
                            path : path
                        };
                        return JSON.stringify(element);
                    }
                    if ((key + "").search(find) >= 0){
                        result.push(createDescriptionOf("key"));  
                    }  
                    if (!(value instanceof Object) && (value + "").search(find) >= 0){
                        result.push(createDescriptionOf("value"));
                    } 
                    if(value instanceof Object || value instanceof Array){
                        this.depthFirst(value, find, result, path);
                    }
                }
            }
            return result;
        }
    };
    global.DFS = dfs;
})(this);