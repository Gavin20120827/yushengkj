﻿$(function(){
	$('#scroll').owlCarousel({
		items: 2,
		autoPlay: true,
		navigation: true,
		navigationText: ["",""],
		scrollPerPage: true
	});
	
	$('#scroll1').owlCarousel({
		items: 3,
		autoPlay: true,
		navigation: true,
		navigationText: ["",""],
		scrollPerPage: true
	});
	
	 $("ul.menu li").hover(menu);
                function menu() {
                    $(this).addClass("cur").siblings().removeClass("cur");
                    var index = $(this).index();
                    $(".d3").eq(index).fadeIn().siblings(".d3").hide();
                };
				
 $("ul.tab li").hover(tab);
                function tab() {
                    $(this).addClass("on").siblings().removeClass("on");
                    var index = $(this).index();
                    $(".d4").eq(index).fadeIn().siblings(".d4").hide();
                };

 var w=new Navbh(".menu_box");	//顶部导航
 w.Navigation("menu_demo");
 w.menuboxAdd("menus");
 var s=new Navbh(".nav_menu");   //左边导航
 s.Navigation("nav_demo");
 s.menuboxAdd("navs");
  reSize();
  
$(window).resize(function(){  //放大缩小时判断
	reSize();
});




function reSize()
{
	var $windows=$(window).innerWidth();
	if($windows>=1000){
		w.reSizeMove();
		w.move("menu");
		/*s.dqfys();
                s.shou_xs();*/
	}else
	{
		w.ycreSizeMove();
		w.minreSize();
		s.ycreSizeMove();
		s.minreSize();
s.dqfys();
                s.shou_xs();
	};
}





});



function Navbh(name)
{
	this.name=name;
}
Navbh.prototype={
	constructor:Navbh,
	Navigation:function(Demo)
	{
		var $obj_name=$(this.name).children('ul').find('li');
		$obj_name.each(function(i) {
            if($(this).children("ul").length>=1)
			{
				$(this).children("ul").addClass("collapse").attr("id",Demo+i);
				$(this).append('<i data-toggle="collapse" class="n_right" data-target="#'+(Demo+i)+'"></i>');
				$(this).children("i.n_right").click(function(){
					if(typeof($(this).attr("aria-expanded"))=="undefined"){
						$(this).css({"transform":"rotate(180deg)"});};
					
					if($(this).attr("aria-expanded")=="false"){
						$(this).css({"transform":"rotate(180deg)"});
					}else if($(this).attr("aria-expanded")=="true"){
						$(this).css({"transform":"rotate(0deg)"});
					};
				});
				$(this).children("i.n_right").click('show.bs.collapse', function () {
					$(this).siblings("ul").hide();
				});
				$(this).children("i.n_right").click('hide.bs.collapse', function () {
					$(this).siblings("ul").show();
				});
			};

        });
	},
	menuboxAdd:function(Name)
	{
		var str='<div class="navbar-header">'
			str+='<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#'+Name+'">'
			str+='<span class="sr-only">切换导航</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>'
			str+='</button></div>'
		
		$(this.name).attr("id",Name).addClass("collapse navbar-collapse").before(str);
	},
	
	reSizeMove:function()
	{
		var $obj_name=$(this.name).children('ul').find('li');
		$obj_name.children("ul").css({"height":"auto","display":"none"});
		$obj_name.bind("mouseenter",function(){
			$(this).children("ul").stop().slideDown()
		});
		$obj_name.bind("mouseleave",function(){
			$(this).children("ul").stop().slideUp();
		});
	},
	ycreSizeMove:function()
	{
		var $obj_name=$(this.name).children('ul').find('li');
		$obj_name.mouseenter().unbind();
		$obj_name.mouseleave().unbind();
	},
	minreSize:function()
	{
		var $obj_name=$(this.name).children('ul').find('li');
		$obj_name.each(function(i) {
            if($(this).children("ul").length>=1)
			{
				$(this).children("ul").css({"display":""});
			};
        });
	},
	shou_xs:function()
	{
		var $obj_name=$(this.name).children("ul").find("li");
		$obj_name.each(function(){
if($(this).children("a").hasClass("current")==true)
{
  if($(this).children("i.n_right").length>=1)
  {
    $(this).children("i.n_right").click();
  };
};

			
		})
	},
	dqfys:function()
	{
		var $current_ul=$(".current").parents("ul")
		if($current_ul.length>1 && $current_ul.siblings("i.n_right").attr("aria-expanded")!="true")
		{
			$current_ul.siblings("i.n_right").click();
		};
	}
};


