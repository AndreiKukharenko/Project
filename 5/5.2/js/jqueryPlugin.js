(function($){
    "use strict";
    $.fn.lazyLoading = function(selector){
        if(!selector instanceof String){
            throw new TypeError();
        }
        
        var jsonPlaceholder;
        var counter = {
            count : 4 //initial count of images
        };

        $.ajax({ // TODO: promise
            type:"GET", 
            url: "http://jsonplaceholder.typicode.com/photos", 
            success: function(data) {
                imageHandler(data, counter.count);
                jsonPlaceholder = data;
                window.onscroll = scrollControl;
            }, 
            error: function(jqXHR, textStatus, errorThrown) {
                alert(jqXHR.status);
            },
            dataType: "json"
        });

        function imageHandler(data, count){
            jsonPlaceholder = data || jsonPlaceholder;
            if (count){
                for(let i = 0; i < count; i++){
                    addImage(jsonPlaceholder[i].id, jsonPlaceholder[i].url, jsonPlaceholder[i].title);
                }
            }else{
                let i = counter.count;
                addImage(jsonPlaceholder[i].id, jsonPlaceholder[i].url, jsonPlaceholder[i].title);
            }
        };

        function addImage(id, src, title){
            var nextImage = document.createElement("img");
            nextImage.setAttribute("src", src);
            nextImage.setAttribute("title", title + id);
            document.getElementsByClassName("imagesSection")[0].appendChild(nextImage);            
        };

        function scrollControl(){
            var body = document.getElementsByClassName("body")[0];
            var contentHeight = body.offsetHeight;
            var yOffset = window.pageYOffset; //Текущая прокрутка сверху
            var y = yOffset + window.innerHeight;
            if(y >= contentHeight){
                counter.count += 1;
                imageHandler();
            }
        };
        console.log(counter.count);
    };
})(jQuery);