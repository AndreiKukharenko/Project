(function(global){
        /* YYYY YY MM M DD D HH H mm m ss s  */

    //Date.prototype.fromNow = dtf.fromNow();

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
           
            /*var parse1 = function(par){ // TODO:implement func for unix-time
            console.log("ONE PARAMETER");
            }*/

            if(exampleDate === undefined || parsePattern === undefined){
                return -2;
            }
            if (exampleDate.length != parsePattern.length){
                return -1;   // this breaks chaining. how to handle it in correct way?
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
            return value.toDateString();
        }, // override to avoid printing [object Object]

        format : function(formatPattern, exampleDate){
            var dd, mm, yyyy, formattedDate;
            var dateFormatter = window.dateFormatter;
            exampleDate = this.date;
            var order = 0 ;
            var searchEngine = window.searchEngine;
            formattedDateJSON =  {
                Year: {
                    order : "",
                    pattern : "",
                    value : "",
                },

                Month: {
                    order : "",
                    pattern : "",
                    value : "",
                },

                Date: {
                    order : "",
                    pattern : "",
                    value : "",
                },

                Hours: {
                    order : "",
                    pattern : "",
                    value : "",
                },

                Minutes: {
                    order : "",
                    pattern : "",
                    value : "",
                },

                Seconds: {
                    order : "",
                    pattern : "",
                    value : "",
                }
            };

            for (let index = 0; index < formatPattern.length; index++) { //check divider!!!!
                var patternSymbol = formatPattern[index];
                if(dateFormatter.hasOwnProperty(patternSymbol)){
                    var character = dateFormatter[patternSymbol];
                    order++;
                    character.formatterFunc(patternSymbol, formattedDateJSON, order, exampleDate);
                }
            }
            console.log(formattedDateJSON);
            var outputOrder = [];
            for (let i = 0; i < formatPattern.length-1; i++) {
                var search = searchEngine.searchOrder(formattedDateJSON, i)
                if(search[0]>1) {
                    document.write(search[0]+'/'); // fix THIS!!
                }
            }
            return formattedDateJSON; // fix THIS!!
        },

        from : function(){

            //считать интервал как разницу между большим и меньшим.
        },

        fromNow : function (userPrecision) {
            var date, now, time, timeAsDate; 
            var precision = userPrecision || 20; 
            date = this.date;
            roundTimeOff = window.roundTimeOff;

            if(!(date instanceof Date)) return -1;
            console.log(date.getHours());
            now = new Date();
            
            time = now - date;
            timeAsDate = new Date();
            timeAsDate.setTime(time);
            console.log(time);
            var roundedTime =  roundTimeOff.round(time, precision);
            console.log(roundedTime + 'rounded');
            return time/1000;
        },

    };

    global.DTF = dtf;
})(this);
