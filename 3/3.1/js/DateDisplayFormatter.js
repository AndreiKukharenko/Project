


/*
document.getElementsByClassName("buttons__confirm")[0].addEventListener("click", function(){
    userInput = document.getElementsByClassName("form__form-for-text");
    document.writeln(userInput[0].value)
});      both are runable :))           */

  
document.querySelector('.buttons__confirm').addEventListener('click', function() {
    var userInput = document.querySelector(".form__form-for-text");
    document.writeln(userInput.value)
}, false);

