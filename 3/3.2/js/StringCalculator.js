(function(global){
    strCalc = {
        calculate : function(str){
            var result;
            var regex = '[a-zA-Z;\]'; //anti-hack)
            str = str.replace(/(,)/g , '.'); // supports commas as well
            if (str.match(regex)) return -1; // error : string is not a math expression!
            result = new Function('return ' + str)();
            return result;
        },
    }
    global.StrCalc = strCalc;
})(this)