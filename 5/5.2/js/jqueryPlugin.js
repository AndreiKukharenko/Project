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
                    let currentElement = arrImgInfJson[i];
                    addImageToSelector(currentElement.id, currentElement.url, currentElement.title);// передать объектом
                }
            }else{
                let currentElement = arrImgInfJson[counter.count];
                addImageToSelector(currentElement.id, currentElement.url, currentElement.title);
            }
        };

        function addImageToSelector(id, src, title){
            var nextImage = $("<img>",{
                src: src,
                title: title + id,
            }).appendTo($selector);          
        };

        function scrollControl(){
            //debugger;
            var body = document.getElementsByClassName("body")[0];
            var contentHeight = $(body).outerHeight(); //TODo no body
            var yOffset = $(body).scrollTop(); //Текущая прокрутка сверху
            var y = yOffset + window.innerHeight;
            if(y >= contentHeight){
                counter.count += 1;
                imageHandler();
                console.log(counter.count)
            }
        };
    };
})(jQuery);