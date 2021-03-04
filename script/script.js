$(document).ready(function(){
    $("#click").on('click',function(event){
        event.preventDefault();
        //console.log("Hello");
        $("#open-menu").slideToggle();
    });
    $(".item").on('click', function(){
        $("#open-menu").slideUp();
    })

    $("#scroll").on('click', function(event){
        event.preventDefault();
        //console.log("Hello");
        $("html,#body").animate({scrollTop: 0}, 500);
        //$("#scroll").animate({"top":"-=300"}, 500);
        // Moves the scrool arrow up until its out of the page.
    });
})