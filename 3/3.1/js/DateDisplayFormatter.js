(function(global){
        /* YYYY YY MM M DD D HH H mm m ss s  */
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
                secondsPattern: "",
            }
           
            /*var parse1 = function(par){ // TODO:implement func for unix-time
            console.log("ONE PARAMETER");
            }*/

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
            return value.toDateString();
        }, // override to avoid printing [object Object]


        dateFormatter : {
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
            }
        },

        format : function(formatPattern, exampleDate){
            var dd, mm, yyyy, formattedDate;
            var dateFormatter = this.dateFormatter;
            if(exampleDate==undefined) exampleDate = this.date;
            var order = 0 ;
            var dfs = window.dfs;
            console.log(dfs);
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
                var search = dfs.searchOrder(formattedDateJSON, i)
                if(search[0]>1) {
                    outputOrder.push(i);
                }
            }
            console.log(outputOrder);
            
            return formattedDateJSON;
        },

        from : function(){

        },

        fromNow : function () {
            var date, now, time, timeAsDate; 
            date = this.date;
            console.log(date.getHours());
            now = new Date();
            
            time = now - date;
            timeAsDate = new Date();
            timeAsDate.setTime(time);
            //считать интервал как разницу между большим и меньшим.

            console.log(timeAsDate.getFullYear());
            return time/1000;
        },

    };

    global.DTF = dtf;
})(this);
