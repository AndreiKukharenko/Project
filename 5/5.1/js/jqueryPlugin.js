(function($){
    "use strict";
    $.fn.dragAndDropPlugin = function(){
        var images;

        function sendFormToServer(formData){
            var uploadURL ="http://local"; //Upload URL
            var jqXHR = $.ajax({
/*xhr: function() {
                    var xhrobj = $.ajaxSettings.xhr();
                    if (xhrobj.upload) {
                            xhrobj.upload.addEventListener('progress', function(event) {
                                var percent = 0;
                                var position = event.loaded || event.position;
                                var total = event.total;
                                if (event.lengthComputable){
                                    percent = Math.ceil(position / total * 100);
                                }
                            }, false);
                        }
                    return xhrobj;
},*/
                url: uploadURL,
                type: "POST",
                contentType: false,
                processData: false,
                cache: false,
                data: formData,
                //success: function(data){ }
            }); 

            // http://api.jquery.com/jquery.ajax/  The jqXHR Object and promise
            jqXHR.fail(function(jqXHR, textStatus, errorThrown) {
                alert("upload " + textStatus)
            });

            jqXHR.done(function(data, textStatus, jqXHR){
                $(".success").show();
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
            var obj = $("#dragandrophandler");
            obj.on("dragenter", function (e){
                e.stopPropagation();
                e.preventDefault();
                $(this).css('border', '2px solid #0B85A1');
            });

            obj.on('drop', function (e){
                $(this).css('border', '2px dotted #0B85A1');
                e.preventDefault();
                images = e.originalEvent.dataTransfer.files;
                handleImagePreview(images);
            });

            obj.on('dragover', function (e){
                e.stopPropagation();
                e.preventDefault();
            });

            $(document).on('dragenter', function(e){
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
                        $(".preview img").attr('src', event.target.result).appendTo("preview");
                    }
                    reader.readAsDataURL(input[i]);
                }
            }
        };

        
        $(".button__submit--register").click(function(){
            handleFormUpload(images)
        });
    }
})(jQuery);
