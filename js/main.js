$(function () {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (iOS) {
        $('label').click(function (event) {
            $('#' + $(event.target).attr('for')).attr('checked', true).change();
        });
    }
});

$(function () {
    $('.rage_people').slick({
        centerMode: true,
        centerPadding: '225px 100px',
        slidesToShow: 1,
        dots:false,
        arrows:true
    });
});

$(function(){
    $('.tab-nav li:first').addClass('select');
    $('.tab-panels>.media-cont>div').hide().filter(':first').show(400);
    $('.tab-nav a[href^="#"]').click(function(){
        $('.tab-panels>.media-cont>div').hide().filter(this.hash).show(400);
        $('.tab-nav li').removeClass('select');
        $(this).parent().addClass('select');
        return (false);
    });
});
$(function(){
    $('.shop-nav li:first').addClass('select');
    $('.tab-panels>.media-cont>div').hide().filter(':first').show(400);
    $('.shop-nav a[href^="#"]').click(function(){
        $('.tab-panels>.media-cont>div').hide().filter(this.hash).show(400);
        $('.shop-nav li').removeClass('select');
        $(this).parent().addClass('select');
        return (false);
    });
});

