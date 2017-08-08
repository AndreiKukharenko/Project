(function(global){
  "use strict";
    var registrForm = ".registration";
    var successMsgSelector = ".success";

    $(document).ready(
      function(){
        $().dragAndDropPlugin();

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
        };

        function handleFormUpload(images){
            var fd = new FormData();
            var login = $(".form-control__login").val();
            var password = $(".form-control__password").val();
            fd.append("login", login);
            fd.append("password", password);
            if(images){
                for (var i = 0; i < images.length; i++){
                    fd.append("img" + i, images[i]);
                }
                if(login && password){
                    sendFormToServer(fd);
                }
            }else{
                alert("please attach images to the form");
            }
        };

        $(".button__submit--register").click(function(e){
            let images = $.fn.images;
            handleFormUpload(images);
            e.preventDefault();
        });

        $(".button__submit--Ok").click(function(){
            $(successMsgSelector).hide();
            resetForm($(registrForm));
        });

        function resetForm($form){
            $form.find("input:text, input:password, input:file, select, textarea").val("");
            $(".preview").empty();
        };
    })
})(this);