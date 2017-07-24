    dfs = { 
        searchOrder : function(obj, find, resultParent){
            var result = resultParent || [];
            var keys = Object.keys(obj);
                for(let index = 0; index < keys.length; index++) {
                    let key = keys[index];
                    let value = obj[key];

                    if((key+"") === 'order' && value === find){
                        result.push(obj['value'])
                    } 

                    if(value instanceof Object || value instanceof Array){
                        this.searchOrder(value, find, result);
                    }
                }
                
            return result;
        }
    };

