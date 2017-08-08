(function(global){
    "use strict";
    $(document).ready(function(){
        var sourceURL = "http://jsonplaceholder.typicode.com/photos";
        var settings = {
            initialCount: 4,
            imageId: "lazyImage__",
            selectorToScroll: "body",
            cssClassOfImage: "The__image", 
            maxCount: 20,
            preloadHeight: 600 // pixels
        }

        // loads info
        $.ajax(sourceURL, {
            type:"GET", 
            dataType: "json"
        }).done(function(data, textStatus, jqXHR){
                $(".imagesSection").lazyLoading(data, settings);
        }).fail(function(jqXHR, textStatus, errorThrown){
                alert(jqXHR.status + " data loading fail");
        });
    })
})(this);