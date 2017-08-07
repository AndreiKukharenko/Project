(function($){
    "use strict";

    var $body = $("body");

    $.fn.lazyLoading = function(sourceURL, settings){
        //  TODO  $.extend(counter, settings)
        var $selector = this; //$($(this)[0]);
        var arrayOfImagesInfoJSON;
        var counter = {
            count : 4, //initial count of images,
            //a:6
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
                class: $selector + "__image"})// отвязаться от конкретного селектора, передавать лучше настройкой
                .appendTo($selector);

            $("<img>",{
                id: "lazyImage__" +  currentImage.id ,
                src: currentImage.url,
                alt: currentImage.title,
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