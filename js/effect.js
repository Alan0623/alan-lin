/*------------------------------------------------------------------
fancybox
------------------------------------------------------------------*/
$(document).ready(function () {
    console.log("Hello!! Nice to see you.(・∀・).");
    console.log("Front-end programming By Alan Lin  www.alan-lin.com");
    /*
    console.log("            0000   000")
    console.log("          000 00   00")
    console.log("         00   00   00")
    console.log("        00    000  00")
    console.log("      00000000000  00    0000    00  000")
    console.log("      00      000  00  00   00   00 0  00")
    console.log("     00       000  00  00   00   000   00")
    console.log("    00        000  00   0000  00 00    00")*/
    /*
    $('.portfolio-item .item-inner a,.form_list .instant_messaging li a').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        next: {
            39: 'left'
        },
        prev: {
            37: 'right'
        },
        selector: '[data-fancybox="filter"]:visible',
        thumbs: {
            autoStart: true
        },
        afterLoad: function () {
            var el, id = $(this.element).data('title-id');
            if (id) {
                el = $('#' + id);

                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });*/
    $('.portfolio-item .item-inner a:not(.overlay2),.form_list .instant_messaging li a').fancybox({
        //selector: '[data-fancybox="filter"]',
        openEffect: 'elastic',
        closeEffect: 'elastic',
        next: {
            39: 'left'
        },
        prev: {
            37: 'right'
        },
        infobar: false,
        caption: function (instance, item) {
            var caption = $(this).data('caption') || '';

            return (caption.length ? caption + '<br />' : '') + '第 <span data-fancybox-index></span> 張 / 共 <span data-fancybox-count></span> 張';
        }
    });
    // Show/hide selected links
    $('#filter').on('change', function () {
        var $visible, val = this.value;

        if (val) {
            $visible = $('[data-fancybox="filter"]').hide().filter('.' + val);

        } else {
            $visible = $('[data-fancybox="filter"]');
        }

        $visible.show();
    });
});
/*------------------------------------------------------------------
頁籤
------------------------------------------------------------------*/
jQuery(function ($) {
    //portfolio
    $(window).load(function () {
        $portfolio_selectors = $('.portfolio-filter >li>a');
        $portfolio_selectors.focus(function () {
            $(this).click();
        });
        if ($portfolio_selectors != 'undefined') {
            $portfolio = $('.portfolio-items');
            $portfolio.isotope({ filter: ".WEDDESIGN" });
            $portfolio.isotope({
                itemSelector: 'li',
                layoutMode: 'fitRows'
            });
            $portfolio_selectors.on('click', function () {
                $portfolio_selectors.removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({ filter: selector });
                return false;
            });
        }
    });
    //goto top
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });
    

});
/*------------------------------------------------------------------
拿掉網頁無js狀態
------------------------------------------------------------------*/
jQuery(window).load(function () {
      $("body").removeClass("no_js");    
});
/*------------------------------------------------------------------
手機板 主選單 按鈕 icon效果
------------------------------------------------------------------*/
$(".open_nav").click(function() {
    $(this).toggleClass("open");
    $(".main_menu").slideToggle(500);
    window.addEventListener('resize', function () {
        if ($(window).width() > 768) {
            $(".main_menu").removeAttr("style");
            $(".open_nav").removeClass("open");  
        }
        else {
        }
    });
});
/*------------------------------------------------------------------

------------------------------------------------------------------*/
var sentence = document.querySelector('.sentence');
//var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');

var wordsToArray = function wordsToArray(str) {
    return str.split('').map(function (e) {
        return e === ' ' ? '&nbsp;' : e;
    });
};

function insertSpan(elem, letters, startTime) {
    elem.textContent = '';
    var curr = 0;
    var delay = 20;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = letters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var letter = _step.value;

            var span = document.createElement('span');
            span.innerHTML = letter;
            span.style.animationDelay = ++curr / delay + (startTime || 0) + 's';
            elem.appendChild(span);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

//insertSpan(h1, wordsToArray(h1.textContent));
insertSpan(h2, wordsToArray(h2.textContent), .5);

document.addEventListener('mousemove', function (e) {
    var xpos = e.layerX || e.offsetX;
    var ypos = e.layerY || e.offsetY;

    var ax = -(window.innerWidth / 2 - xpos) / 20;
    var ay = (window.innerHeight / 2 - ypos) / 10;

    //sentence.style.transform = 'rotateY(' + ax + 'deg) rotateX(' + ay + 'deg)';
});
/*------------------------------------------------------------------
主選單下滑
------------------------------------------------------------------*/
$(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    var adscrtop = 60;
    if (scrollVal > adscrtop) {
        $("#head").css({ "background": "white" });
    } else {
        $("#head").css({ "background": "none" });
    }
});
/*------------------------------------------------------------------
jfontsize 2.0 網頁字型大小縮放jQuery套件
------------------------------------------------------------------*/
$(function(){
    $('#content').jfontsize({
        btnMinusMaxHits: 1, // 最多可被縮小的次數
        btnPlusMaxHits: 5, // 最多可被放大的次數
        sizeChange: 5 // 每次縮放字體變化像素
    });
});

$(window).scroll(function () {
    if (window.innerWidth > 769) { 
        var scrollVal = $(this).scrollTop();
        var adscrtop = 60;
        if (scrollVal > adscrtop) {
            $(".font_size").css({ "display": "none" });
            $("#head_bar").css({ "margin": "0 auto" });
        } else {
            $(".font_size").css({ "display": "block" });
            $("#head_bar").css({ "margin": "20px auto" });
        }
    }
    if (window.innerWidth < 768) { 
        $(".font_size").css({ "display": "none" });
        $("#head_bar").css({ "margin": "0 auto" });
    }
});
$(window).resize(function () {
    if (window.innerWidth > 769) {
        var scrollVal = $(this).scrollTop();
        var adscrtop = 60;
        if (scrollVal > adscrtop) {
            $(".font_size").css({ "display": "none" });
            $("#head_bar").css({ "margin": "0 auto" });
        } else {
            $(".font_size").css({ "display": "block" });
            $("#head_bar").css({ "margin": "20px auto" });
        }
    }
    if (window.innerWidth < 768) {
        $(".font_size").css({ "display": "none" });
        $("#head_bar").css({ "margin": "0 auto" });
    }
});

$('#jfontsize-plus').focus(function () {
    $("body").keydown(function () {
        if (event.keyCode == "13") {//keyCode=13是回车键
            $('#jfontsize-plus').click();
        }
    });
});
$('#jfontsize-default').focus(function () {
    $("body").keydown(function () {
        if (event.keyCode == "13") {//keyCode=13是回车键
            $('#jfontsize-default').click();
        }
    });
});
/*------------------------------------------------------------------
色盲 高反差
------------------------------------------------------------------*/
$(function () {
    var mode = localStorage.colorBlindMode || "no",
        $color_blind_span = $("#color_blind_span"),
        $color_blind_style = $("#color_blind_style"),
        switch_color_blink = function () {
            if (!$color_blind_style.html()) {
                $color_blind_style.html($color_blind_span.html());
            } else {
                $color_blind_style.html("");
            }
        };

    if (mode == "yes") {
        $("#color_blind_btn").addClass("turn_on");
        $("body").addClass("high_contrast");
        $color_blind_style.html($color_blind_span.html());
        
    } else {
        $("#color_blind_btn").removeClass("turn_on");
        $("body").removeClass("high_contrast");
        $color_blind_style.html("");
    }

    $("#color_blind_btn").click(function () {
        $("#color_blind_btn").toggleClass("turn_on");
        switch_color_blink();
        localStorage.colorBlindMode = mode == "no" ? "yes" : "no";
        window.location.reload();
    });
});
/*------------------------------------------------------------------

------------------------------------------------------------------*/
