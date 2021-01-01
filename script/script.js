$(document).ready(function(){
    $("#click").on('click',function(event){
        event.preventDefault();
        //console.log("Hello");
        $("#open-menu").slideToggle();
    });
    $(".item").on('click', function(){
        $("#open-menu").slideUp();
    })
})