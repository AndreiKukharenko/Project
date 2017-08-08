(function($){
    "use strict";
    $.fn.dragAndDropPlugin = function(){

        $(document).ready(function(){
            var obj = $(".dragandrophandler");
            obj.on("dragenter", function(e){
                e.stopPropagation();
                e.preventDefault();
                $(this).css("border", "2px solid #0B85A1");
            });

            obj.on("drop", function(e){
                $(this).css("border", "2px dotted #0B85A1");
                e.preventDefault();
                $.fn.images = e.originalEvent.dataTransfer.files;
                handleImagePreview($.fn.images);
            });

            obj.on("dragover", function(e){
                e.stopPropagation();
                e.preventDefault();
            });

            $(document).on("dragenter", function(e){
                e.stopPropagation();
                e.preventDefault();
            });

            $(document).on("dragover", function(e){
                e.stopPropagation();
                e.preventDefault();
                obj.css("border", "2px dotted #0B85A1");
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
                }
                reader.readAsDataURL(input[i]);
            }
        };
    }
})(jQuery);

