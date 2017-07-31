(function(global){
    "use strict";
    function DateWrapper(date){
        var self = this;
        self.date = date;
        self.fromNow = function(precision){
            return dtf.fromNow(self.date, precision);
        }

        self.parse = function(exampleDate, parsePattern){
            return dtf.parse(exampleDate, parsePattern);
        }

        self.from = function(date0){
            return dtf.from(date0, self.date);
        }

        self.format = function(formatPattern, exampleDate){
            return dtf.format(formatPattern, self.date);
        }

        self.toString = function() {
            return dtf.toString(self.date);
        }
        return self;
    }

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
            date = new Date(parsedDateJSON.year, parsedDateJSON.month - 1,
                 parsedDateJSON.date, parsedDateJSON.hours, parsedDateJSON.minutes,
                  parsedDateJSON.seconds);
            return new DateWrapper(date);
        },

        toString : function(value) {
            //return timeIntervalHandler.stringify(value); // as an alternative 
            return value.toString();         
        }, // override to avoid printing [object Object]

        format : function(formatPattern, exampleDate){
            var formattedDate = formatPattern;

            var YYYY, YY, MM, M, DD, HH, mm, ss;
            var patterns = [ "YYYY", "YY", "MM", "M", "DD",  "HH", "mm", "ss" ];
            YY = (YYYY = exampleDate.getFullYear() + "").slice(-2); 
            MM = (exampleDate.getMonth() + 1) + "";
            M = MM.slice(-1);
            DD = exampleDate.getDate() + "";
            HH = exampleDate.getHours() + "";
            mm = exampleDate.getMinutes() + "";
            ss = exampleDate.getSeconds() + "";
            var values = [YYYY, YY, MM, M, DD, HH, mm, ss]
             
            for (let i = 0; i < patterns.length; i++) {
                let regex = new RegExp(patterns[i], "g");
                formattedDate = formattedDate.replace(regex, values[i] + "");
            }
            return formattedDate; 
        },

        from : function(date0, date1){
            var timeDifference;
            var result = new Date();
            const precision = 90; // fixed precision = 90% here
            if(date0 instanceof DateWrapper){
                date0 = date0.date;
            }
            
            timeDifference = date0 - date1;
            timeDifference = (timeDifference > 0) ? timeDifference : -timeDifference; 
            var roundedTime =  roundTime.round(timeDifference, precision)
            result.setTime(roundedTime);
            result.setFullYear(result.getFullYear() - 1970); // -1970, it's a starting point for Date

            var resultAsAString = timeIntervalHandler.stringify(result);
            return resultAsAString;
        },

        fromNow : function (date, usersPrecision) {
            var now, time, timeAsDate;
            var precision = usersPrecision || 80; // default precision = 80%

            now = time = timeAsDate = new Date();
            if(!(date instanceof Date)) return -1;
            time = now - date;
            var roundedTime =  roundTime.round(time, precision);
            timeAsDate.setTime(roundedTime);
            timeAsDate.setFullYear(timeAsDate.getFullYear() - 1970);
            var result = timeIntervalHandler.stringify(timeAsDate);
            return result;
        }
    };
    global.DTF = dtf;
})(this);
