//slider pro
$(document).ready(function(){
    $( '#slider-main' ).sliderPro({
    width: 1040 ,
    height: 470 ,
    arrows: true, //矢印の有無
    buttons: true, //ページャーの有無
    autoplay: true, //自動再生
	slideDistance:0,//スライド同士の距離
	visibleSize: '100%' //サイドの画像
    });
});

//smooth scroll
$(function() {
    var headerHight = 0;
    $('.linkInThePage[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

//global nav accordion
//$(function(){
//	var Accordion = function(el, multiple) {
//		this.el = el || {};
//		this.multiple = multiple || false;
//
//		// Variables privadas
//		var links = this.el.find('.toggle');
//		// Evento
//		links.on('mouseover', {el: this.el, multiple: this.multiple}, this.dropdown)
//	}
//	
//	Accordion.prototype.dropdown = function(e) {
//		var $el = e.data.el;
//			$this = $(this),
//			$next = $this.next();
//
//		$next.slideToggle();
//		$this.parent().toggleClass('open');
//
//		if (!e.data.multiple) {
//		$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
//		};
//		$('html').click(function() {
//         $('ul.ddmenu ul').slideUp(150);
//      });
//	}	
//
//	var accordion = new Accordion($('nav.global_nav'), false);
//});

//   $(function(){
//      // ▼マウスが載ったらサブメニューを表示
//      $("nav.global_nav li").mouseenter(function(){
//         $(this).siblings().find("ul.submenu").hide();  // 兄弟要素に含まれるサブメニューを全部消す。
//         $(this).children().slideDown(300);     // 自分のサブメニューを表示する。
//      });
//      // ▼どこかがクリックされたらサブメニューを消す
//      $('html').click(function() {
//         $(' ul.submenu').slideUp(300);
//      });
//   });


$(function () {
	var nav = $('nav.global_nav');
	$('li', nav)
		.mouseover(function (e) {
			$('ul.submenu', this).stop().slideDown('200');
		})
		.mouseout(function (e) {
			$('ul.submenu', this).stop().slideUp('200');
		});
});

//$(function () {
//	$('nav.global_nav li').hover( 
//		function(){$(this).addClass('open');},  
//		function(){$(this).removeClass('open');}
//	);
//});

//header transform
$(function() {
  var dist = 80;
  $(window).scroll(function() {
    if ($(window).scrollTop() > dist) {
      $('#global_nav').addClass('scrol');
    }
    else {
      $('#global_nav').removeClass('scrol');
    }
  });
});
//header transform
$(function() {
  var dist = 650;
  $(window).scroll(function() {
    if ($(window).scrollTop() > dist) {
      $('#global_nav.home').addClass('scrol');
    }
    else {
      $('#global_nav.home').removeClass('scrol');
    }
  });
});
