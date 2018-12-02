$(document).ready(function () {
    $(".our-amazing-work__block-images .our-amazing-work__image").slice(0, 12).show();
    $(".links .portfolio-category").click(function () {
        let category = $(this).attr("data-info");
        $(".our-amazing-work__image").hide();
        $(".our-amazing-work__image[data-info=" + category + "]").show();
        if (category == "all_images") {
            $(".our-amazing-work__block-images .our-amazing-work__image").slice(0, 36).show();
        }
    });

    $(".btn-with-plus").on('click', function (e) {
        e.preventDefault();
        $(".our-amazing-work__block-images .our-amazing-work__image:hidden").slice(0, 12).slideDown();
        if ($(".our-amazing-work__block-images .our-amazing-work__image:hidden").length == 0) {
            $(".btn-with-plus").fadeOut('slow');
        }
    });
});