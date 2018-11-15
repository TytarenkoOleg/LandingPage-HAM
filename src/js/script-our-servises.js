// our Services block for

        console.log(5);
(function ($) {
    $(function () {
        console.log($('ul.our-services__menu'));
        $('ul.our-services__menu').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.our-servises__tabs').find('div.our-services__item').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
})(jQuery);
