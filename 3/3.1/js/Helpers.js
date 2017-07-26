  RoundTime = {
    round : function(time, precision){
        // precision in %
        var lowBorder = time*(1 - (100 - precision)/100);
        var timeMS, temp;
        timeMS = temp = time;
        var roundExecutingFunctions = [
            timeAsDate => new Date (timeAsDate.setMilliseconds(0)),
            timeAsDate => new Date (timeAsDate.setSeconds(0)),
            timeAsDate => new Date (timeAsDate.setMinutes(0)),
            timeAsDate => new Date (timeAsDate.setHours(0)),
            timeAsDate => new Date (timeAsDate.setDate(0)),
            timeAsDate => new Date (timeAsDate.setMonth(0)),
            timeAsDate => new Date (timeAsDate.setFullYear(0)),
        ];
        var isInRange = value => (value >= lowBorder && value <= time);
            var timeAsData = new Date();
        for(let i = 0; i< roundExecutingFunctions.length; i++){
            timeAsData = new Date(timeMS);
            timeAsData = roundExecutingFunctions[i](timeAsData);
            timeMS = timeAsData.getTime();
            timeMS = (timeMS > 0 ) ? timeMS : 0;
            if (!isInRange(timeMS)){
                break;
            }
        console.log(timeMS);
            temp = timeMS;
        }
        return temp;
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