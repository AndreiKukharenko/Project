(function(global){
    "use strict";
    var strCalc;
    strCalc = {
        calculate : function(str){
            var regex = '[a-zA-Z;\]'; //prevent any js code as an argument)
            if (str.match(regex)) return NaN; // error : string is not a math expression!
            str = str.replace(/(,)/g , '.'); // supports commas as well
            str = str.replace(/( )/g , ''); // fix empty spaces

            try {
                var res = new Function('return ' + str);
                res();
            }
            catch(ReferenceError) { 
                //catch if there are ANY wrong symbols (other alphabet, for example)
                return NaN;
            }
            return new Function('return ' + str)();
        }
    };
    global.StrCalc = strCalc;
})(this);