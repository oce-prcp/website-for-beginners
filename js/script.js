/* // JavaScript Document
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


      //typing animation script
    var typed = new Typed(".typing", {
        strings: ["étudiante", "développeuse", "programmeuse"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    }); */

    /* ------ jQuery Plugin: Scroll to Top ------ */


$(function(){
    $("#monBouton").click(function(){
        $("html, body").animate({scrollTop: 0},"slow");
    });
});
