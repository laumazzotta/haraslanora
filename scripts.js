jQuery(function($) {

    var $homehero = $('#home-hero');
    var $logoScroll = $('#main-logo');
    var $navbar = $('.navbar');

    $(window).scroll(function(a, b, c) {
        const offset = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
        $('body').css('--scroll', offset);

        var stickyTop = $homehero.outerHeight();
        if (window.scrollY >= stickyTop) {
            $logoScroll.addClass('position-fixed');
            $navbar.addClass('position-fixed');
        } 
        // else {
        //     $logoScroll.addClass('d-none');
        // } 
    });

    $('#openNav').on('click', function() {
        $('#myNav').css("height", "100%");
    });
      
    $('#closeNav').on('click', function() {
        $('#myNav').css("height", "0%");
    });

    $('#navLinks').on('click', function() {
        $('#myNav').css("height", "0%");
    });
   
      var $textoHaras = $('.texto-haras'); 
      var $plusButton = $('.plusButton'); 

      $plusButton.click(function(){
        $(this).removeClass('d-block');
        $(this).addClass('d-none');
        $textoHaras.removeClass('pb-5');
    });

});