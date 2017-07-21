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
            if(exampleDate === undefined || parsePattern === undefined){
                return -2;
            }

            if (exampleDate.length != parsePattern.length){
                return -1;
            }
            var supportedSymbols = this.supportedSymbols;
            var parsedDateJSON = this.parsedDateJSON;
            
            for (var index = 0; index < parsePattern.length; index++) {
                var patternSymbol = parsePattern[index];
                if(supportedSymbols.hasOwnProperty(patternSymbol)){
                    var character = supportedSymbols[patternSymbol];
                    character.extractionFunc(exampleDate[index], parsedDateJSON);
                }
            }
            // установить выявление и вывод сообщений ошибок

            //console.log(JSON.stringify(parsedDateJSON));

            this.date = new Date(parsedDateJSON.year, parsedDateJSON.month - 1, parsedDateJSON.date);
            //date.toDateString();
            return this;
        },


        toString : function() {
            var ret = this.date;
           return ret.toDateString();
        },



        format : function(formatPattern, ){
            var dd, mm, yyyy;
            dd = mm = yyyy = true; //flags
            for (let index = 0; index < formatPattern.length; index++) {
                let value = formatPattern[index];
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
                }
            }
            return formattedDate;
        },

        from : function(){

        },

        fromNow : function () {
            var date, now, time; //timeAsDate;
            date = this.date;
            now = new Date();
            time = now - date;
            var timeAsDate = new Date();
            timeAsDate.setDate(time);

            console.log(timeAsDate);
            return time/1000;
            
        },


    };

    global.DTF = dtf;
        //document.writeln("<br></br>" + formattedDate);
})(this);