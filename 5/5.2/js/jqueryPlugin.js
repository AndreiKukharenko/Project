(function($){
    "use strict";
    $.fn.lazyLoading = function(sourceURL){
        var $selector = $($(this)[0]);
        var arrayOfImagesInfoJSON;
        var counter = {
            count : 4 //initial count of images
        };

        $.ajax(sourceURL, { // TODO: promise
            type:"GET", 
            success: function(data) {
                imageHandler(data, counter.count);
                arrayOfImagesInfoJSON = data;
                $(window).scroll(scrollControl);
            }, 
            error: function(jqXHR, textStatus, errorThrown) {
                alert(jqXHR.status);
            },
            dataType: "json"
        });

        function imageHandler(data, count){
            let arrImgInfJson = data || arrayOfImagesInfoJSON;
            if (count){
                for(let i = 0; i < count; i++){
                    let currentImage = arrImgInfJson[i];
                    addImageToSelector(currentImage);
                }
            }else{
                let currentImage = arrImgInfJson[counter.count];
                addImageToSelector(currentImage);
                counter.count += 1;
            }
        };

        function addImageToSelector(currentImage){
            var $div = $("<div>", {
                class: $selector[0].className + "__image"})
                .appendTo($selector);

            $("<img>",{
                src: currentImage.url,
                title: currentImage.title + currentImage.id,
            }).appendTo($div);  
        };

        function scrollControl(){
            var body = document.getElementsByClassName("body")[0];
            var $contentHeight = $(body).outerHeight(); 
            var $yOffset = $(body).scrollTop(); //Текущая прокрутка сверху
            if($yOffset + window.innerHeight >= $contentHeight){
                imageHandler();
            }
        };
    };
})(jQuery);