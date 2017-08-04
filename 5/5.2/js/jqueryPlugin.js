(function($){
    "use strict";
    $.fn.lazyLoading = function(sourceURL){
        var selectorObject = $(this)[0];
        if(!selectorObject instanceof Object){
            throw new TypeError();
        }
        var selector;
        if(selectorObject.id.length >= 1){   // get selector (it can be id or a class)
            selector = document.getElementById(selectorObject.id);
        }
        if(selectorObject.className.length >= 1){
            selector = document.getElementsByClassName(selectorObject.className)[0];
        }

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
                    addImageToSelector(currentElement.id, currentElement.url, currentElement.title);
                }
            }else{
                let currentElement = arrImgInfJson[counter.count];
                addImageToSelector(currentElement.id, currentElement.url, currentElement.title);
            }
        };

        function addImageToSelector(id, src, title){
            var nextImage = document.createElement("img");
            $(nextImage).attr("src", src);
            $(nextImage).attr("title", title + id);
            $(selector).append(nextImage);            
        };

        function scrollControl(){
            var body = document.getElementsByClassName("body")[0];
            var contentHeight = $(body).outerHeight();
            var yOffset = $(body).scrollTop(); //Текущая прокрутка сверху
            var y = yOffset + window.innerHeight;
            if(y >= contentHeight){
                counter.count += 1;
                imageHandler();
            }
            //setTimeout(()=>{} , 500)
        };

    };
})(jQuery);