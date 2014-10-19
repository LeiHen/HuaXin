// JavaScript Document

/**
* @name		:shrinkNav
* @author	:Nice
* @dependent:展开收缩导航
*/
function shrinkNav(){   
    $("#shrinkNavBtn").click(function(event) {
    	var nav=$("#mianNav");
        var head=$('.header');
        var foot=$('.footer');
        var content=$('.content');

    	nav.toggleClass("nav_mini");
        head.toggleClass("header_ext");
        foot.toggleClass("footer_ext");
        content.toggleClass("content_ext");

        $(this).find('span').toggleClass('icon_left').toggleClass('icon_right');
    });
   
}
/* @end **/


/**
* @name		:
* @author	:百度
* @dependent:百度地图API
*/

//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
}

//创建地图函数：
function createMap(){
	var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(113.345453,23.146461);//定义一个中心点坐标
    map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.disableScrollWheelZoom();//禁用地图滚轮放大缩小，默认禁用(可不写)
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
    //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
	
	//向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
}
/* @end **/




/**
* @name		:listCut
* @author	:Nice
* @dependent:新闻切换
*/
function listCut(){
	$('.news_nav li').click(function() {
		/* Act on the event */
		var i=$('.news_nav li').index(this);
		$(this).addClass('pitch_on');
		// $('.news_nav li:not('+i+'))').removeClass('pitch_on');
		$('.news_nav li:not(li:eq('+i+'))').removeClass('pitch_on');

        $('.news_info .news_detail:not(li:eq('+i+'))').animate({opacity:0}, 200);
        $('.news_info .news_detail:not(li:eq('+i+'))').css('display', 'none');

        $('.news_info .news_detail:eq('+i+')').css('display', 'block');
        $('.news_info .news_detail:eq('+i+')').animate({opacity:1}, 200);
	});
}


/* @end **/

/**
* @name     :
* @author   :Nice
* @dependent:产品切换
*/
function productRoll(){
    var $wrap=$('#productImgs');
    var $next=$('#productImgs .next');
    var $previous=$('#productImgs .previous');
    var $imgs=$('#productImgs .imgs');
    var $img=$('#productImgs .imgs .img');
    var $imgLength=$img.length;
    for (var i = 0; i < $img.length; i++) {
        $img.eq(i).css('left', i*104+"%");
    };


    GLOBAL.namespace("PRODUCT.IMG");
    GLOBAL.PRODUCT.IMG.num=0;

    /*一个展示图片*/
    if ($imgLength<=1) {
        $next.addClass('hidden');
        $previous.addClass('hidden');
    }else{
        $next.removeClass('hidden');
    };

    $next.click(function() {
        GLOBAL.PRODUCT.IMG.num=GLOBAL.PRODUCT.IMG.num+1;
        var i=GLOBAL.PRODUCT.IMG.num;
        $imgs.css('left',i*-104+'%');

        if (GLOBAL.PRODUCT.IMG.num>0){
            $next.removeClass('hidden');
            $previous.removeClass('hidden');
            if (GLOBAL.PRODUCT.IMG.num+1>=$imgLength) {
                $next.addClass('hidden');
            };
        }

    });

    $previous.click(function() {
        GLOBAL.PRODUCT.IMG.num=GLOBAL.PRODUCT.IMG.num-1;
        var i=GLOBAL.PRODUCT.IMG.num;

        $imgs.css('left',i*-104+'%');
        if (GLOBAL.PRODUCT.IMG.num>=0){
            $next.removeClass('hidden');
            $previous.removeClass('hidden');
            if (GLOBAL.PRODUCT.IMG.num==0) {
                $previous.addClass('hidden');
            };
        }
    });
}
/* @end **/















/**
* @name		:
* @author	:Nice
* @dependent:
*/

/* @end **/


