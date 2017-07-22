(function(global){
    var dfs = { 

        res: new Array(),

        depthFirst : function(obj, find){

            var result = this.res;

            if(obj instanceof Array) {
            for(var i = 0; i < obj.length; i++) {

                if (obj[i].search(find) >= 0) result.push(obj[i]);
                this.depthFirst(obj[i], find);
                }
            }
            else{
                for(var prop in obj) {
                    var f = obj[prop];
                    if (f.search(find) >= 0) result.push(obj[prop]); // a little problem here
                    if (prop.search(find) >= 0) result.push(prop);
                    if(obj[prop] instanceof Object || obj[prop] instanceof Array)
                    this.depthFirst(obj[prop], find);
                }
            }
        console.log(result);

        }
    }

    global.DFS = dfs;
})(this)