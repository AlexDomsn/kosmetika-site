$(document).ready(function () {
    $('.Carousel_slick').slick({
        dots: true,
        // dotsClass: 'Slick_dots',
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<a href="#" class="arrow_cont prev"><img src="images/arrow.png" alt="" class="customer_arrow" /></a>',
        nextArrow: '<a href="#" class="arrow_cont next"><img src="images/right-arrow.png" alt=""  class="customer_arrow" /></a>'

    });

    $("form").submit(function () {
        var a = $(this);
        $.ajax({type: "POST", url: "mail.php", data: a.serialize()}).done(function () {
            setTimeout(function () {
                document.querySelector(".modal-open").checked = !0
            }, 1E3);
            setTimeout(function () {
                $(".modal-open").attr("checked", !1).trigger("reset")
            }, 5E3)
        });
        return !1
    });
    $(".close_btn").click(function () {
        $(".modal-open").attr("checked", !1)
    });
    setTimeout(function () {
        $(".modal-open").attr("checked", !1)
    }, 5E3);
});
