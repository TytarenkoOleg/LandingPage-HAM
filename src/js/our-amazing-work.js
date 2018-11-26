$(document).ready(function () {
    $(".our_amazing_work_images .our_amazing_work_img-item").slice(0, 12).show();
    $('.links.portfolio-category').click(function () {
        let category = $(this).attr("data-info");
        $(".our_amazing_work_img-item").hide();
        $(".our_amazing_work_img-item[data-info=" + category + "]").show();
        if (category == 'all_images') {
            $(".our_amazing_work_images .our_amazing_work_img-item").slice(0, 36).show();
        }
    });

    $(".btn_with_plus").on('click', function (e) {
        e.preventDefault();
        $(".our_amazing_work_images .our_amazing_work_img-item:hidden").slice(0, 12).slideDown();
        if ($(".our_amazing_work_images .our_amazing_work_img-item:hidden").length == 0) {
            $(".btn_with_plus").fadeOut('slow');
        }
    });
});
