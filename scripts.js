jQuery(function($) {


// $(document).ready(function() {
    $('#back-1').addClass('back-1');
    $('#back-2').addClass('back-2');
    
    const logo = $('#main-logo > path');
    for(let i = 0; i<logo.length; i++){
        console.log(`path ${i} is ${logo[i].getTotalLength()}`);
    }

    
    anime({
        targets: ".pathMorphing",
        d: [ 
            {value: ['M1915.5 377.451C1677.4 309.194 1488.8 271.287 1282 262.5C820 242.965 567.2 357.837 345 354.699C130.1 351.717 0.7 290.679 0.5 290.6V6.74722C11.4 19.4571 87.7 84.4969 279 96.0299C892.1 133.14 1265.5 -71.5 1914.6 26.9104C1914.7 166.326 1915.5 238.035 1915.5 377.451Z']},
            {value: ['M1916 416.583C1677.9 348.327 1489.3 310.419 1282.5 301.632C820.5 282.097 567.7 396.969 345.5 393.831C130.6 390.85 1.2 329.811 1 329.733V86.5C1 86.5 89.2 34.3464 280.5 45.8794C893.6 82.989 1283.4 90.4574 1916 0.5C1916.1 139.916 1916 277.167 1916 416.583Z']
            },
            {value: ['M1915.5 377.451C1677.4 309.194 1488.8 271.287 1282 262.5C820 242.965 567.2 357.837 345 354.699C130.1 351.717 0.7 290.679 0.5 290.6V6.74722C11.4 19.4571 87.7 84.4969 279 96.0299C892.1 133.14 1265.5 -71.5 1914.6 26.9104C1914.7 166.326 1915.5 238.035 1915.5 377.451Z']}

        ],
        easing: 'linear',
        duration: 7500,
        loop: true
    });

    $('.hero-title > h1 > span').addClass('animate__fadeInLeft');

    var $navbar = $('.navbar');
    var $logoScroll = $('#main-logo');

    $(window).scroll(function(a, b, c) {
        const offset = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
        $('body').css('--scroll', offset);

        var stickyTop = $navbar.outerHeight();
        if (window.scrollY >= stickyTop) {
            $navbar.addClass('fixed-navbar');
            $logoScroll.addClass('navbar-brand-scroll');
        } else {
            $navbar.removeClass('fixed-navbar');
            $logoScroll.removeClass('navbar-brand-scroll');
        } 
    });
    // window.addEventListener('scroll', () => {
    //     document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    //   }, false);
    

    

    // document.addEventListener('scroll', function () {
        
    // });
});