$(document).ready(function() {
     $("#field-return-back").click(function(){
      $('html, body').animate({
        scrollTop: 0}, 2000);
    });
    
     $("#go-home").click(function(){
      $('html, body').animate({
        scrollTop: 0}, 2000);
    });
    
    $("#go-about").click(function(){
      $('html, body').animate({
        scrollTop: $("#field-template-aboutus").offset().top
    }, 2000);
    });
    
    $("#go-projects").click(function(){
      $('html, body').animate({
        scrollTop: $("#field-template-projects").offset().top
    }, 2000);
    });
    
        $("#go-social").click(function(){
      $('html, body').animate({
        scrollTop: $("#field-template-social").offset().top
    }, 2000);
    });
    
       $("#go-con").click(function(){
        $('html, body').animate({
          scrollTop: $("#field-template-contact").offset().top
      }, 1000);
      });
  });

