(function(global){
  "use strict";
    var registrForm = ".registration";
    var successMsgSelector = ".success";
    var selector = ".dragandrophandler";

    $(document).ready(function(){
        $(selector).dragAndDropPlugin();
        $(".button__submit--register").click(function(e){
            let images = $(selector).data().images;
            handleFormUpload(images);
            e.preventDefault();
        });

        function handleFormUpload(images){
            var login = $(".form-control__login").val();
            var password = $(".form-control__password").val();
            if(images && login && password){
                var fd = new FormData();
                fd.append("login", login);
                fd.append("password", password);
                for (var i = 0; i < images.length; i++){
                    fd.append("img" + i, images[i]);
                }
            sendFormToServer(fd);
            }else{
                alert("please fill form and attach images to the form");
            }
        };

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
                $(successMsgSelector).show();
            }).fail(function(jqXHR, textStatus, errorThrown){
                alert("upload " + textStatus);
            });
        };

        $(".button__submit--Ok").click(function(){
            $(successMsgSelector).hide();
            resetForm($(registrForm));
        });

        function resetForm($form){
            $form.find("input:text, input:password, input:file, select, textarea").val("");
            $(".preview").empty();
        };
    });
})(this);