searchEngine = { 
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


dateFormatter = {
        'Y' : {
            formatterFunc: function(patternSymbol, formattedDateJSON, order, date){
                formattedDateJSON.Year.pattern += patternSymbol;
                formattedDateJSON.Year.order = order;
                formattedDateJSON.Year.value = date.getFullYear();
            }
        },
            
        'M' : {
            formatterFunc: function(patternSymbol, formattedDateJSON, order, date){
                formattedDateJSON.Month.pattern += patternSymbol;
                formattedDateJSON.Month.order = order;
                formattedDateJSON.Month.value = date.getMonth();
                }
        },

        'D' : {
            formatterFunc: function(patternSymbol, formattedDateJSON, order, date){
                formattedDateJSON.Date.pattern += patternSymbol;
                formattedDateJSON.Date.order = order;
                formattedDateJSON.Date.value = date.getDate();
            },
        },
        //TODO: add formats
    }; 


roundTimeOff ={
    round : 
       function(time, precision){
        // precision in %
        var lowBorder = time*(1 - precision/100);
        var highBorder = time*(1 + precision/100);
        var roundFunctions = [];
        var index = 0;
        while (time >=lowBorder && time <= highBorder){
            var t = roundFunctions[index];
            t(time);
            index++;
        }
        roundFunctions = [
            function(time){return Math.floor(time / 1000)},
            function(time){return Math.floor(time / 1000 * 60)},
            (time) => (Math.floor(time / 1000 * 60 * 60 )),
            time => Math.floor(time / 1000 * 60 * 60 * 24),
            function(time){Math.floor(time / 1000 * 60 * 60 * 24 * 30)}, // 
            function(time){Math.floor(time / 1000 * 60 * 60 * 24 * 30 * 12)},
        ];
        console.log(time);
       } 
    
}