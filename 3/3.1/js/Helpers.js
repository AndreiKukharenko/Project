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
        var lowBorder = time*(1 - (100 - precision)/100);
        var highBorder = time*(1 + (100 - precision)/100);
        var index = 0;
        var roundedTime = time;
        var roundExecutingFunctions = [
            time => Math.round(time / 1000) * 1000,
            time => ((Math.round(time / (1000 * 60))) || 1) * 1000 * 60,
            time => ((Math.round(time / (1000 * 60 * 60))) || 1 ) * 1000 * 60 * 60,
            time => ((Math.round(time / (1000 * 60 * 60 * 24))) || 1) * 1000 * 60 * 60 * 24,
            time => ((Math.round(time / (1000 * 60 * 60 * 24 * 30))) || 1) * 1000 * 60 * 60 * 24 * 30,
            time => ((Math.round(time / (1000 * 60 * 60 * 24 * 30 * 12))) || 1) * 1000 * 60 * 60 * 24 * 30 * 12,
            // после года не округляем, но можно добавить. 
            //Для повышения точности нужно определить промежуточные функции
        ];

        var isInRange = value => (value >= lowBorder && value <= highBorder);

        for(var i = 0; i < roundExecutingFunctions.length; i++){
           var temp = roundExecutingFunctions[i](roundedTime);
            if (!isInRange(temp)){
                break;
            }
            roundedTime = temp;
        }
        return roundedTime;
    } 
  },

timeIntervalHandler = {
    stringify: function(dateToHandling){
        var year = dateToHandling.getFullYear();
        var month = dateToHandling.getMonth();
        var date = dateToHandling.getDate();
        var hours = dateToHandling.getHours();
        var minutes = dateToHandling.getMinutes();
        var seconds = dateToHandling.getSeconds();
        var intervalValues = [];
        var intervalDescriptions = [];
        var arrayHelper = [ year, month, date, hours, minutes, seconds ];
        var wordsHelper = [ "years", "month", "days", "hours", "minutes", "seconds" ];
        var result, space;
        result = space = " ";

        for (var i = 0; i < arrayHelper.length; i++){
            if (arrayHelper[i]  !== 0) {  //this code deletes redundat (equal to 0) elements
                intervalValues.push(arrayHelper[i]);
                intervalDescriptions.push(wordsHelper[i]);
            }
        }
        for(let i = 0; i < intervalValues.length; i++){
            result += intervalValues[i] + space + intervalDescriptions[i] + space;
        }
        return result;
    }
}