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
    addMarker();//向地图中添加marker
}

//创建地图函数：
function createMap(){
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(112.88447,22.596268);//定义一个中心点坐标
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
    //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
    map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
}

//标注点数组
var markerArr = [{title:"华信金属制品有限公司",content:"广东省鹤山市共和镇新兴路305-306号",point:"112.884443|22.596301",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
     ];
//创建marker
function addMarker(){
    for(var i=0;i<markerArr.length;i++){
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0,p1);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point,{icon:iconImg});
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
        marker.setLabel(label);
        map.addOverlay(marker);
        label.setStyle({
                    borderColor:"#808080",
                    color:"#333",
                    cursor:"pointer"
        });
        
        (function(){
            var index = i;
            var _iw = createInfoWindow(i);
            var _marker = marker;
            _marker.addEventListener("click",function(){
                this.openInfoWindow(_iw);
            });
            _iw.addEventListener("open",function(){
                _marker.getLabel().hide();
            })
            _iw.addEventListener("close",function(){
                _marker.getLabel().show();
            })
            label.addEventListener("click",function(){
                _marker.openInfoWindow(_iw);
            })
            if(!!json.isOpen){
                label.hide();
                _marker.openInfoWindow(_iw);
            }
        })()
    }
}
//创建InfoWindow
function createInfoWindow(i){
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
    return iw;
}
//创建一个Icon
function createIcon(json){
    var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
    return icon;
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


