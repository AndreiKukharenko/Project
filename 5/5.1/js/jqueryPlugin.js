(function($){
    "use strict";
    $.fn.dragAndDropPlugin = function(){
        var $selector = $(this);
        var $uploadfileDiv = $(".uploadfile"); 
        var images;

        $(document).ready(function(){
            $selector.on("dragenter", function(e){
                e.stopPropagation();
                e.preventDefault();
                $(this).css("border", "2px solid #0B85A1");
            });

            $selector.on("drop", function(e){
                $(this).css("border", "2px dotted #0B85A1");
                e.preventDefault();
                images = e.originalEvent.dataTransfer.files;
                $selector.data("images", images);
                handleImagePreview(images);
            });

            $selector.on("dragover", function(e){
                e.stopPropagation();
                e.preventDefault();
            });
            
            $selector.click(function () {
                $uploadfileDiv.click();
                $uploadfileDiv.on("change", function() {
                    var files = $uploadfileDiv[0].files;
                    $selector.data("images", files);
                    handleImagePreview(files);
                })
            });            

            $(document).on("dragenter", function(e){
                e.stopPropagation();
                e.preventDefault();
            });

            $(document).on("dragover", function(e){
                e.stopPropagation();
                e.preventDefault();
                $selector.css("border", "2px dotted #0B85A1");
            });

            $(document).on("drop", function (e){
                e.stopPropagation();
                e.preventDefault();
            });
        });

        function handleImagePreview(input){
            var filesAmount = input.length;
            for (let i = 0; i < filesAmount; i++){
                var reader = new FileReader();
                reader.onload = function(event){
                    var $img = $("<img>", {
                        src: event.target.result
                    });
                    $img.appendTo(".preview");
                    $("img").click(function(){$(this).remove();});
                }
                reader.readAsDataURL(input[i]);
            }
        };
    }
})(jQuery);

