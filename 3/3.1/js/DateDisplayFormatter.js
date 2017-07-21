(function(global){

    var dtf = {
        monthNames : ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ],

        /* YYYY YY MM M DD D HH H mm m ss s  */


        parsedDateJSON : {
            year:"", 
            month:"",
            date:"",
            datePattern : "",
            yearPattern : "",
            monthPattern : ""
        },

        formattedDateJSON : {
            year:"", 
            month:"",
            date:"",
            datePattern : "",
            yearPattern : "",
            monthPattern : ""
        },

        formattedDate : {
            toString : function() {
            return "";
            }, // override to aviod printing [Object Object]
        },

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
                    parsedDate.hoursPattern += 'D';
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
            var parsedDateJSON = this.parsedDateJSON;
           
            var parse1 = function(par){ // TODO:implement func for unix-time
            console.log("ONE PARAMETER");
            }

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

            this.date = new Date(parsedDateJSON.year, parsedDateJSON.month - 1, parsedDateJSON.date);
            //date.toDateString();
            return this;
        },

        toString : function() {
            var value = this.date;
           return value.toDateString();
        },

        format : function(formatPattern, exampleDate){
            var dd, mm, yyyy, formattedDate, parsedDateJSON;
            var supportedSymbols = this.supportedSymbols;
            formattedDateJSON = this.formattedDateJSON;
            //dd = mm = yyyy = true; //flags
            for (let index = 0; index < formatPattern.length; index++) { //check divider!!!!
                /*let value = formatPattern[index];
                
                if (value=="/" || value=="." || value=="-") {
                    formattedDate += value; 
                    continue;
                }
                if(value === "Y" && yyyy) {
                    formattedDate += parsedDateJSON.year; 
                    yyyy=false;
                    continue;
                }
                else if(value === "M" && mm) {
                    formattedDate += parsedDateJSON.month;
                    mm = false;
                    continue;
                }
                else if(value === "D" && dd) {
                    formattedDate += parsedDateJSON.date;
                    dd=false;
                    continue;
                }*/

                 var patternSymbol = formatPattern[index];
                if(supportedSymbols.hasOwnProperty(patternSymbol)){
                    var character = supportedSymbols[patternSymbol];
                    character.extractionFunc(exampleDate[index], formattedDateJSON);
                }
            }
            console.log(formattedDateJSON);
            return formattedDateJSON.toString();
        },

        from : function(){

        },

        fromNow : function () {
            var date, now, time, timeAsDate;
            date = this.date;
            now = new Date();
            time = now - date;
            timeAsDate = new Date();
            timeAsDate.setTime(time);

            // see http://javascript.ru/Date.parse
            //считать интервал как разницу между большим и меньшим.

            console.log(timeAsDate.getFullYear());
            return time/1000;
        },

    };

    global.DTF = dtf;
        //document.writeln("<br></br>" + formattedDate);
})(this);