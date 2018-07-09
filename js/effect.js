$(document).ready(function () {
    console.log("            0000   000")
    console.log("          000 00   00")
    console.log("         00   00   00")
    console.log("        00    000  00")
    console.log("      00000000000  00    0000    00  000")
    console.log("      00      000  00  00   00   00 0  00")
    console.log("     00       000  00  00   00   000   00")
    console.log("    00        000  00   0000  00 00    00")
    
    $('.portfolio-item .item-inner a,.form_list .instant_messaging li a').fancybox({
        selector: '[data-fancybox="filter"]:visible',
        thumbs: {
            autoStart: true
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
var h1 = document.querySelector('h1');
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

insertSpan(h1, wordsToArray(h1.textContent));
insertSpan(h2, wordsToArray(h2.textContent), .5);

document.addEventListener('mousemove', function (e) {
    var xpos = e.layerX || e.offsetX;
    var ypos = e.layerY || e.offsetY;

    var ax = -(window.innerWidth / 2 - xpos) / 20;
    var ay = (window.innerHeight / 2 - ypos) / 10;

    //sentence.style.transform = 'rotateY(' + ax + 'deg) rotateX(' + ay + 'deg)';
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
