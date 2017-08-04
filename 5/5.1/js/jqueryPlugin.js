(function($){
    $.fn.dragAndDropPlugin = function(){
        $(".success").hide();
        var data;
        //$(".preview").empty();

        $(".photo").on("change", handleImage, false);

        function handleImage(ev){
            var reader = new FileReader();
            reader.onload = function(event){
               $(".preview img").attr("src",event.target.result);
            }
            reader.readAsDataURL(e.target.files[0]);
            
        }


        //  передать в ф-ю пар-р, определяющий, заполнена ли форма. Если нет - вывести errormessage
        $(".button__submit--register").click(function(){
            $(".success").show();
        })


        $(".button__submit--Ok").click(function(){
            $(".success").hide();
        })



        return "something";
    }
})(jQuery);