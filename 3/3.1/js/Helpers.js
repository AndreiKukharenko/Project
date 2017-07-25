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
    round : function(time, precision){
        // precision in %
        var lowBorder = time*(1 - precision/100);
        var highBorder = time*(1 + precision/100);
        var index = 0;
        var roundedTime = time;
        var roundExecutingFunctions = [
            time => Math.round(time / 1000) * 1000,
            time => ((Math.round(time / (1000 * 60))) || 1) * 1000 * 60,
            time => ((Math.round(time / (1000 * 60 * 60))) || 1 ) * 1000 * 60 * 60,
            time => ((Math.round(time / (1000 * 60 * 60 * 24))) || 1) * 1000 * 60 * 60 * 24,
            time => ((Math.round(time / (1000 * 60 * 60 * 24 * 30))) || 1) * 1000 * 60 * 60 * 24 * 30,
            time => ((Math.round(time / (1000 * 60 * 60 * 24 * 30 * 12))) || 1) * 1000 * 60 * 60 * 24 * 30 * 12,
            //time => time // после года не округляем, но можно добавить.
        ];

        var isInRange = value => (value >= lowBorder && value <= highBorder);

        for(var i = 0; i < roundExecutingFunctions.length; i++){
           var temp = roundExecutingFunctions[i](roundedTime);
            console.log(temp);
            if (!isInRange(temp)){
                break;
            }
            roundedTime = temp;
        }
    return roundedTime;
    } 
    
}