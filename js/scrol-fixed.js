
// sidenav transrate
$(function(){
    var target = $("#sidenav_affix");
    var footer = $("#banner")
    var targetHeight = target.outerHeight(true);
    var targetTop = target.offset().top;
 
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > targetTop){
            // 動的にコンテンツが追加されてもいいように、常に計算する
            var footerTop = footer.offset().top;
             
            if(scrollTop + targetHeight > footerTop){
                customTopPosition = footerTop - (scrollTop + targetHeight)
                target.css({position: "fixed", top:  customTopPosition + "px"});
            }else{
                target.css({position: "fixed", top: "85px"});
            }
        }else{
            target.css({position: "static", top: "auto"});
        }
    });
});

// bs scrollspy
$('body').scrollspy({
	target: '#year-btns'
})

//smooth scroll
$(function() {
    var headerHight = 0;
    $('ul.year_btns li a[href^="#"]').click(function(){
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});