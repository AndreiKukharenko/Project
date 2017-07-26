(function(global){

    var dtf = {

        supportedSymbols : {
            'Y' : {
                extractionFunc: function(extractedChar, parsedDate){
                    parsedDate.year += extractedChar;
                    parsedDate.yearPattern += 'Y';
                }
            },

            'y' : {
                extractionFunc: function(extractedChar, parsedDate){
                    parsedDate.year += extractedChar;
                    parsedDate.yearPattern += 'Y';
                }
            },

            'M' : {
                extractionFunc: function(extractedChar, parsedDate){
                    parsedDate.month += extractedChar;
                    parsedDate.monthPattern += 'M';
                }
            },

            'D' : {
                extractionFunc: function(extractedChar, parsedDate){
                    parsedDate.date += extractedChar;
                    parsedDate.datePattern += 'D';
                }
            },

            'H' : {
                extractionFunc: function(extractedChar, parsedDate){
                    parsedDate.hours += extractedChar;
                    parsedDate.hoursPattern += 'H';
                }
            },

            'm' : {
                extractionFunc: function(extractedChar, parsedDate){
                    parsedDate.minutes += extractedChar;
                    parsedDate.minutesPattern += 'm';
                }
            },

            's' : {
                extractionFunc: function(extractedChar, parsedDate){
                    parsedDate.seconds += extractedChar;
                    parsedDate.secondsPattern += 's';
                }
            }
        },

        parse : function(exampleDate, parsePattern){
            var supportedSymbols = this.supportedSymbols;
            var date; // contains result of function execution
            var parsedDateJSON = {
                year:"", 
                month:"",
                date:"",
                hours: "",
                minutes:"",
                seconds: "",
                datePattern : "",
                yearPattern : "",
                monthPattern : "",
                hoursPattern: "",
                minutesPattern:"",
                secondsPattern: ""
            };
           
            if(exampleDate === undefined || parsePattern === undefined){
                return -2;
            }
            if (exampleDate.length != parsePattern.length){
                return -1;
            }
            
            for (var index = 0; index < parsePattern.length; index++) {
                var patternSymbol = parsePattern[index];
                if(supportedSymbols.hasOwnProperty(patternSymbol)){
                    var character = supportedSymbols[patternSymbol];
                    character.extractionFunc(exampleDate[index], parsedDateJSON);
                }
            }
            this.date = new Date(parsedDateJSON.year, parsedDateJSON.month - 1,
                 parsedDateJSON.date, parsedDateJSON.hours, parsedDateJSON.minutes,
                  parsedDateJSON.seconds);
            return this;
        },

        toString : function() {
            var value = this.date;
            //return timeIntervalHandler.stringify(value); // as an alternative 
            return value.toString();         
        }, // override to avoid printing [object Object]

        format : function(formatPattern, exampleDate){
            var formattedDate = formatPattern;
            exampleDate = exampleDate || this.date;

            var YYYY, YY, MM, M, DD, D, HH, H, mm, m, ss, s;
            var patterns = [ "YYYY", "YY", "MM", "M", "DD", "D", "HH", "H", "mm", "m", "ss", "s" ];
            YYYY = exampleDate.getFullYear()+"";
            YY = YYYY.slice(-2);
            MM = (exampleDate.getMonth() + 1) + "";
            M = MM.slice(-2);
            DD = exampleDate.getDate() + "";
            HH = exampleDate.getHours() + "";
            mm = exampleDate.getMinutes() + "";
            ss = exampleDate.getSeconds() + "";
            var values = [YYYY, YY, MM, M, DD, D, HH, H, mm, m, ss, s]
             
            for (let i = 0; i < patterns.length; i++) {
                let regex = new RegExp(patterns[i], "g");
                formattedDate = formattedDate.replace(regex, values[i]+"");
            }
            return formattedDate; 
        },

        from : function(date0){
            var timeDifference, date1;
            date1 = this.date;
            var result = new Date();
            const precision = 90; // fixed precision = 90%
            timeIntervalHandler = window.timeIntervalHandler;
            roundTimeOff = window.roundTimeOff;
            
            timeDifference = date0 - date1;
            timeDifference = (timeDifference > 0) ? timeDifference : -timeDifference; 
            var roundedTime =  roundTimeOff.round(timeDifference, precision)
            result.setTime(roundedTime);
            result.setFullYear(result.getFullYear() - 1970); // -1970, т.к. это нулевая точка для Date

            var resultAsAString = timeIntervalHandler.stringify(result);
            return resultAsAString;
        },

        fromNow : function (userPrecision) {
            var date, now, time, timeAsDate;
            var precision = userPrecision || 80; // default precision = 80%

            now = time = timeAsDate = new Date();
            date = this.date;
            roundTimeOff = window.roundTimeOff;
            timeIntervalHandler = window.timeIntervalHandler;

            if(!(date instanceof Date)) return -1;
            time = now - date;
            var roundedTime =  roundTimeOff.round(time, precision); // округляемся
            timeAsDate.setTime(roundedTime);
            timeAsDate.setFullYear(timeAsDate.getFullYear() - 1970); // -1970, т.к. это нулевая точка для Date
            var result = timeIntervalHandler.stringify(timeAsDate);
            return result;
        },
    };
    global.DTF = dtf;
    Date.prototype.parse = dtf.parse;
    
})(this);
