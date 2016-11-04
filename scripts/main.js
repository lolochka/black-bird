$(document).ready(function () {
    $(window).scroll(function () {
        'use strict';
    /*    
    wScroll > (position - window) = bottom
    wScroll > (position - window / 3) = top of image in 1/3 of the screen
    wScroll > position = top
    */

        var wScroll = $(this).scrollTop();//px from top

        $('.logo').css({
            'transform': 'translateY(' + wScroll / 2 + '%)'
        });

        $('.fore-bird').css({
            'transform': 'translateY(-' + wScroll / 50 + '%)'
        });

        $('.back-bird').css({
            'transform': 'translateY(' + wScroll / 5 + '%)'
        });


        if (wScroll > $('.clothes-pics').offset().top - $(window).height() / 1.5 && wScroll < ($('.clothes-pics').offset().top + $('.clothes-pics').height())) {

            $('.clothes-pics figure').each(function (i) {
                var self = $(this);
                setTimeout(function () {
                    self.addClass('is-shown');
                }, 100 * (i + 1));

            });

        } else {
            $('.clothes-pics figure.is-shown').removeClass('is-shown');
        }

        if (wScroll > $('.periscope').offset().top - $(window).height()) {
            $('.periscope').css({'background-position': 'center ' + (wScroll - $('.periscope').offset().top) + 'px'});

            var opacity = 5 * (wScroll - $('.periscope').offset().top + 400) / wScroll;
            $('.periscope-tint').css({'opacity': opacity});
        }


        if (wScroll > $('.blog-posts').offset().top - $(window).height()) {

            var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 350)).toFixed();

            $('.post_1').css({'transform': 'translate(' + offset  + 'px, ' + Math.abs(offset * 0.2) + 'px)'});

            $('.post_3').css({'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)'});

        }


    });

    $('.bird-box').mousemove(function (e) {
        var coef = ($(this).width() / 2 - e.pageX) / 10;
        $('.bg1').css('transform', 'translateX(' + 2 * coef + 'px)');
        console.log($('.fore-bird'));
        $('.bg2').css('transform', 'translateX(' + coef + 'px)');
    });
});
