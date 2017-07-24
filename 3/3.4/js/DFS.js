(function(global){
    'use strict';
    var dfs = { 
        depthFirst : function(obj, find, resultParent){

            var result = resultParent || [];

            if(obj instanceof Array && !(obj instanceof String) ) {
            for(var i = 0; i < obj.length; i++) {
                if ((obj[i]+"").search(find) >= 0) result.push(obj[i]);
                this.depthFirst(obj[i], find, result);
                }
            }
            else{
                var keys = Object.keys(obj);
                for(let index = 0; index < keys.length; index++) {
                    let key = keys[index];
                    let value = obj[key];

                    if ((key + "").search(find) >= 0){
                        result.push(key);  
                    }  
                    if (!(value instanceof Object) && (value+"").search(find) >= 0){
                        result.push(value);
                    } 
                    if(value instanceof Object || value instanceof Array){
                        this.depthFirst(value, find, result);
                    }
                }
            }
            return result;
        }
    };
    global.DFS = dfs;
})(this);