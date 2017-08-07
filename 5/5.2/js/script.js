(function(global){
    "use strict";
    $(document).ready(function(){
        var url = "http://jsonplaceholder.typicode.com/photos";
        $(".imagesSection").lazyLoading(url,{count:8});
    })
})(this);