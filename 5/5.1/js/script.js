(function(global){
  "use strict";
    $(document).ready(
      function(){
          $().dragAndDropPlugin();

          $(".button__submit--Ok").click(function(){
              $(".success").hide();
              resetForm($(".registration"));
          });

          function resetForm($form) {
              $form.find("input:text, input:password, input:file, select, textarea").val("");
              $(".preview").empty();
          };
    })
})(this);