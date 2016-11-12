

    $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(100).fadeOut('slow');
    });


$(function() {
    $(window).resize(function (){
        $('.block').width($('.block').height());
    });
    $('.block').width($('.block').height());

    $(window).resize(function (){
        var $width = $('.block').width();
        $('.before-block').width($width);
        $('.after-block').width($width);
    });
    var $width = $('.block').width();
    $('.before-block').width($width );
    $('.after-block').width($width );

    $(window).resize(function (){
        var $width2 = $('.before-block').height();
        var $heightmenu = $('.block').height();
        $('.test1').width($width2 * 1);
        $('.test2').width($width2 * 1);
        $('.lefttabs').height($heightmenu * 0.1);
        $('.news').height($heightmenu * 0.1);
        $('.img-cont').height($heightmenu * 0.5);
    });
    var $width2 = $('.before-block').height();
    var $heightmenu = $('.block').height();
    $('.test1').width($width2 * 1);
    $('.test2').width($width2 * 1);
    $('.lefttabs').height($heightmenu * 0.1);
    $('.news').height($heightmenu * 0.1);
    $('.img-cont').height($heightmenu * 0.5);



    var $hid = $(".media-cont");
    $(".logo-animate").click(function(){
        if ($(".media-cont").hasClass("hidden-kube")) {
             $hid.removeClass("hidden-kube");
            $(".media-cont").fadeIn(2000);
        }
        else {
            $hid.addClass("hidden-kube");
            $(".media-cont").fadeOut(1);
        }
    });

    var $leftblock = $("#test2");
    $("#test2").fadeOut(1);
    $(".logo-animate").click(function(){
        if ($("#test2").hasClass("dis-none2")) {
            $leftblock.removeClass("dis-none2");
        } else {
            $leftblock.addClass("dis-none2");
        }

    });
    var $topbox = $('#before-block');
    $("#before-block").fadeOut(1);
    $(".logo-animate").click(function(){
        if ($("#before-block").hasClass("dis-none3")) {
            $topbox.removeClass("dis-none3");
        } else {
            $topbox.addClass("dis-none3");
        }

    });

    var $rightblock = $("#test1");
    $("#test1").fadeOut(1);
    $(".logo-animate").click(function(){
        if ($("#test1").hasClass("dis-none1")) {
            $rightblock.removeClass("dis-none1");
        } else {
            $rightblock.addClass("dis-none1");
        }

    });

    var $botbox = $('#after-block');
    $("#after-block").fadeOut(1);
    $(".logo-animate").click(function(){
        if ($("#after-block").hasClass("dis-none4")) {
            $botbox.removeClass("dis-none4");
        } else {
            $botbox.addClass("dis-none4");
        }

    });

    $(function(){
        $('.tab-nav li:first').addClass('select');                // Первой вкладке добавляетсякласс select
        $('.tab-panels>.media-cont>div').hide().filter(':first').show();      // Скрываются все блоки с описанием вкладок кроме первого
        $('.tab-nav a').click(function(){                         // При клике на вкладку
            $('.tab-panels>.media-cont>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
            $('.tab-nav li').removeClass('select');                 // - удаляется класс 'select' у активной ранее вкладки
            $(this).parent().addClass('select');                    // - добавляется класс 'select' для выбранной вкладки
            return (false);                                         // - прерывается обработка события onClick
        })
    })
});
