$(document).ready(function(){
    $(".click-image").on('click',function(event){
        event.preventDefault();
        //console.log("Hello");
        $(".zoom").css("display","block");
        $(".stadium").css("display","block");
    });
    
    $(".click-image2").on('click',function(event){
        event.preventDefault();
        //console.log("Hello");
        $(".zoom2").css("display","block");
        $(".stadium").css("display","block");
    });

    $(".click-image3").on('click',function(event){
        event.preventDefault();
        //console.log("Hello");
        $(".zoom3").css("display","block");
        $(".stadium").css("display","block");
    });
    
    $(".click-image4").on('click',function(event){
        event.preventDefault();
        //console.log("Hello");
        $(".zoom4").css("display","block");
        $(".stadium").css("display","block");
    });
    
    $(".click-image5").on('click',function(event){
        event.preventDefault();
        //console.log("Hello");
        $(".zoom5").css("display","block");
        $(".stadium").css("display","block");
    });

    $(".zoom").on("click", function(event) {
        event.preventDefault();
        $(".zoom").css("display","none");
    })

    $(".zoom2").on("click", function(event) {
        event.preventDefault();
        $(".zoom2").css("display","none");
    })

    $(".zoom3").on("click", function(event) {
        event.preventDefault();
        $(".zoom3").css("display","none");
    })

    $(".zoom4").on("click", function(event) {
        event.preventDefault();
        $(".zoom4").css("display","none");
    })

    $(".zoom5").on("click", function(event) {
        event.preventDefault();
        $(".zoom5").css("display","none");
    })

    
    









    // $(".item").on('click', function(){
    //     $("#open-menu").slideUp();
    // })

    // $("#scroll").on('click', function(event){
    //     event.preventDefault();
    //     //console.log("Hello");
    //     $("html,#body").animate({scrollTop: 0}, 500);
    //     //$("#scroll").animate({"top":"-=300"}, 500);
    //     // Moves the scrool arrow up until its out of the page.
    // });
});