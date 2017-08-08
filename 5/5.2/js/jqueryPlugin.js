(function($){
    "use strict";
    var settings = {  // default settings
        count: 4,
        imageId: "lazyImage__",
        selectorToScroll: "body",
        cssClassOfImage: "__image",
        maxCount: 1000,
        preloadHeight: 900
    }
    var $selectorToScroll = $(settings.selectorToScroll);

    $.fn.lazyLoading = function(data, userSettings){
        $.extend(settings, userSettings) //get users settings
        var $selector = this;
        var arrayOfImagesInfoJSON = data;
        $(window).scroll(scrollControl);
        imageHandler(data, settings.count); //load first *settings.count* images

        function imageHandler(data, count){
            for(let i = 0; i < count; i++){
                let currentImage = data[i];
                addImageToSelector(currentImage);
            }
        };

        function singleImageHandler(){
            addImageToSelector(data[settings.count]);
            settings.count += 1;
             // stop if there is maximum count of images
            if(settings.count == settings.maxCount){
                $(window).off("scroll");
                var $div = $("<div>All images has been loaded<div>").appendTo($selector);
            }
        }

        function addImageToSelector(currentImage){
            var $div = $("<div>", {
                class: settings.cssClassOfImage})
                .appendTo($selector);

            $("<img>",{
                id: settings.imageId + currentImage.id ,
                src: currentImage.url,
                alt: currentImage.title,
                title: currentImage.title + currentImage.id,
            }).appendTo($div);
        };

        function scrollControl(){
            var $contentHeight = $selectorToScroll.outerHeight(); 
            var $yOffset = $selectorToScroll.scrollTop(); //Текущая прокрутка сверху
            var determinedHeight = $yOffset + window.innerHeight + settings.preloadHeight;
            if(determinedHeight >= $contentHeight){
                singleImageHandler();
            }
        };
    };
})(jQuery);