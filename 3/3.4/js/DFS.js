(function(global){
    'use strict';
    var dfs = { 
        depthFirst : function(obj, find, resultParent, pathParent){

            var result = resultParent || [];
            if(obj instanceof Array && !(obj instanceof String) ) {
            for(var i = 0; i < obj.length; i++) {
                var path = pathParent || "";
                path = path +"[" + i + "].";

               var createDescriptionOf = function(typeEl){
                    let element = new Object();
                    element['value'] = obj[i];
                    element['path'] = path;
                    return JSON.stringify(element);
                }

                
                if (!(obj[i] instanceof Array) && !(obj[i] instanceof Object)
                    && (obj[i]+"").search(find) >= 0) {
                        result.push(createDescriptionOf (obj[i]));
                }
                this.depthFirst(obj[i], find, result, path);
                }
            }
            else{
                var keys = Object.keys(obj);
                for(let index = 0; index < keys.length; index++) {
                    let key = keys[index];
                    let value = obj[key];
                    var path = pathParent || "";
                    var createDescriptionOf = function(typeEl){
                        let element = new Object();
                        element['key'] = key;
                        element['value'] = value;
                        element['type'] = typeEl;
                        element['path'] = path;
                        return JSON.stringify(element);
                    }
                    path = path + key+".";
                    if ((key + "").search(find) >= 0){
                        result.push(createDescriptionOf("key"));  
                    }  
                    if (!(value instanceof Object) && (value+"").search(find) >= 0){
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