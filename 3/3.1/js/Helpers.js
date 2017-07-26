
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
            //Для повышения точности (например, на декаду) нужно определить промежуточные функции
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


  newRoundTime = {
    round : function(time, precision){
        // precision in %
        var lowBorder = time*(1 - (100 - precision)/100);
        var highBorder = time*(1 + (100 - precision)/100);
        var index = 0;
        var roundedTime = time;

        var roundExecutingFunctions = [ ];
        var array = [ time.getFullYear(), time.getMonth(),
             time.getDate(), time.getHours(), 
            time.getMinutes(). time.getSeconds() ];

        

        var isInRange = value => (value >= lowBorder && value <= highBorder);

            time.setSeconds(0);

            if (!isInRange(time)){
                break;
            }

            roundedTime = temp;
        
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