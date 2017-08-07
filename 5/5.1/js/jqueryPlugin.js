(function($){
    "use strict";
    $.fn.dragAndDropPlugin = function(){
        var images;
        function sendFormToServer(formData){
            var uploadURL ="http://httpbin.org/post"; //Upload URL
            var jqXHR = $.ajax({
                url: uploadURL,
                type: "POST",
                contentType: false,
                processData: false,
                cache: false,
                data: formData,
                async: false //deprecated. only to avoid error when request goes to httpbin.org/post 
            }).done(function(data, textStatus, jqXHR){
                $(".success").show();
            }).fail(function(jqXHR, textStatus, errorThrown){
                alert("upload " + textStatus)
            });
        }

        function handleFormUpload(files,obj){
            var fd = new FormData();
            var login = $(".form-control__login").val();
            var password = $(".form-control__password").val();
            fd.append("login", login);
            fd.append("password", password);
            if(files){
                for (var i = 0; i < files.length; i++){
                    fd.append("img" + i, files[i]);
                }
                if(login && password){
                    sendFormToServer(fd);
                }
            }
        }

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
                images = e.originalEvent.dataTransfer.files;
                handleImagePreview(images);
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
            if (input){
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
            }
        };
        
        $(".button__submit--register").click(function(){
            handleFormUpload(images);
        });
    }
})(jQuery);

