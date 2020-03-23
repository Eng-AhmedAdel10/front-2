//start slide down
$(".arrow i").click(slide_down);
    
    function slide_down(){
    $(".discription").slideDown(1000 ,function(){
      $(".arrow i").css({animation:"none",color:"#fff"})  
    }),
        $(".text").addClass("active");
    };

    $(".arrow i").dblclick(slide_up);

  function slide_up(){
      $(".text").removeClass("active"); 
    $(".discription").slideUp(2000 ,function(){
      $(".arrow i").css({animation:"discrip_color .3s infinite ease"})
         
    });  
}
//end slide down

//start about
$(".slide_about").click(function(){
    $("html,body").animate({
        scrollTop:$(".about").offset().top
    },2000)
});
//end about

//start services
$(".slide_services").click(function(){
    $("html,body").animate({
        scrollTop:$(".services").offset().top
    },2000)
});
//end servises

//start gallary
$(".slide_gallary").click(function(){
    $("html,body").animate({
        scrollTop:$(".gallary").offset().top
    },2000)
});
//end gallary

//start lecture
$(".slide_lectures").click(function(){
    $("html,body").animate({
        scrollTop:$(".lecture").offset().top
    },2000)
})
//end lecture

// start contact
$(".slide_contact").click(function(){
    $("html,body").animate({
        scrollTop:$(".contact").offset().top
    },2000)
})
//end contact