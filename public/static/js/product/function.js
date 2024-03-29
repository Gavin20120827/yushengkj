﻿
/*滚动插件
使用方法：var marquee=new Marquee("对象id","Direction",Step,Width,Height,Timer,DelayTime,ScrollStep,WaitTime);
参数说明:
		ID		"marquee"	容器ID		(必选)
		Direction	(left)		滚动方向	(可选,默认为left向左滚动,可设置的值包括:"top","bottom","left","right")
		Step		(1)		滚动的步长	(可选,默认值为1,数值越大,滚动越快)
		Width		(760)		容器可视宽度	(可选,默认值为容器初始设置的宽度)
		Height		(52)		容器可视高度	(可选,默认值为容器初始设置的高度)
		Timer		(50)		定时器		(可选,默认值为30,数值越小,滚动的速度越快,1000=1秒,建议不小于20)
		DelayTime	(5000)		间歇停顿延迟时间(可选,默认为0不停顿,1000=1秒)
		ScrollStep	(52)		间歇滚动间距	(可选,默认为翻屏宽/高度,该数值与延迟均为0则为鼠标左右滑动悬停控制(效果不是很好),-1禁止鼠标控制)
		WaitTime	(3000)		开始时的等待时间(可选,默认或0为不等待,1000=1秒)
*/

function Marquee()
{
 this.ID=document.getElementById(arguments[0]);if(!this.ID){alert("\""+arguments[0]+"\"初始化错误\r\n请检查标签ID设置是否正确!");this.ID=-1;return;}this.Width=this.Height=this.DelayTime=this.WaitTime=this.CTL=this.StartID=this.Stop=this.MouseOver=0;this.Direction="left";this.Step=1;this.Timer=30;if(typeof arguments[1]=="number"||typeof arguments[1]=="string"){this.Direction=arguments[1];}if(typeof arguments[2]=="number"){this.Step=arguments[2];}if(typeof arguments[3]=="number"){this.Width=arguments[3];}if(typeof arguments[4]=="number"){this.Height=arguments[4];}if(typeof arguments[5]=="number"){this.Timer=arguments[5];}if(typeof arguments[6]=="number"){this.DelayTime=arguments[6];}if(typeof arguments[7]=="number"){this.ScrollStep=arguments[7];}if(typeof arguments[8]=="number"){this.WaitTime=arguments[8];}this.ID.style.overflow=this.ID.style.overflowX=this.ID.style.overflowY="hidden";this.ID.noWrap=true;this.IsNotOpera=(navigator.userAgent.toLowerCase().indexOf("opera")==-1);if(arguments.length>=1){this.Start();}
}
Marquee.prototype.Start = function()
{
if(this.ID==-1)return;if(this.WaitTime<800)this.WaitTime=800;if(this.Timer<1)this.Timer=1;
if(this.Width==0)
{
 if(this.ID.style.width.indexOf("px")>0){this.Width = parseInt(this.ID.style.width);}else{this.Width = parseInt(this.ID.offsetWidth);}
}
if(this.Height==0)
{
 if(this.ID.style.height.indexOf("px")>0){this.Height = parseInt(this.ID.style.height);}else{this.Height =parseInt(this.ID.offsetHeight);}
}
this.HalfWidth=Math.round(this.Width/2);this.HalfHeight=Math.round(this.Height/2);this.BakStep=this.Step;if(this.Width>0){this.ID.style.width=this.Width+"px";}if(this.Height>0){this.ID.style.height=this.Height+"px";}if(typeof this.ScrollStep!="number")this.ScrollStep=(this.Direction=="left" || this.Direction=="right")?this.Width:this.Height;var templateLeft="<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;display:block'><tr><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td></tr></table>";var templateTop="<div>MSCLASS_TEMP_HTML</div><div>MSCLASS_TEMP_HTML</div>";var msobj=this;msobj.tempHTML=msobj.ID.innerHTML;if(msobj.Direction=="top" || msobj.Direction=="bottom"){msobj.ID.innerHTML=templateTop.replace(/MSCLASS_TEMP_HTML/g,msobj.ID.innerHTML);}else{msobj.ID.innerHTML=templateLeft.replace(/MSCLASS_TEMP_HTML/g,msobj.ID.innerHTML);}
	var timer = this.Timer;var delaytime = this.DelayTime;var waittime = this.WaitTime;msobj.StartID = function(){msobj.Scroll()}
	msobj.Continue = function(){if(msobj.MouseOver==1){setTimeout(msobj.Continue,delaytime);}else{clearInterval(msobj.TimerID);msobj.CTL=msobj.Stop=0;msobj.TimerID=setInterval(msobj.StartID,timer);}}
	msobj.Pause = function(){msobj.Stop = 1;clearInterval(msobj.TimerID);setTimeout(msobj.Continue,delaytime);}
	msobj.Begin = function()
		{     
                        msobj.ClientScroll = (msobj.Direction=="left" || msobj.Direction=="right")? msobj.ID.scrollWidth / 2 : msobj.ID.scrollHeight / 2;
			if(((msobj.Direction=="top" || msobj.Direction=="bottom") && msobj.ClientScroll <= msobj.Height + msobj.Step) || ((msobj.Direction=="left" || msobj.Direction=="right") && msobj.ClientScroll <= msobj.Width + msobj.Step))
                        {msobj.ID.innerHTML = msobj.tempHTML;delete(msobj.tempHTML);return;}
			delete(msobj.tempHTML);
			msobj.TimerID = setInterval(msobj.StartID,timer);
			if(msobj.ScrollStep < 0)return;
			msobj.ID.onmousemove = function(event){if(msobj.ScrollStep==0&&(msobj.Direction=="left" || msobj.Direction=="right")){var event=event||window.event;if(window.event){if(msobj.IsNotOpera){msobj.EventLeft=event.srcElement.id==msobj.ID.id?event.offsetX-msobj.ID.scrollLeft:event.srcElement.offsetLeft-msobj.ID.scrollLeft+event.offsetX;}else{msobj.ScrollStep=null;return;}}else{msobj.EventLeft=event.layerX-msobj.ID.scrollLeft;}msobj.Direction=msobj.EventLeft>msobj.HalfWidth?"right":"left";msobj.AbsCenter=Math.abs(msobj.HalfWidth-msobj.EventLeft);msobj.Step=Math.round(msobj.AbsCenter*(msobj.BakStep*2)/msobj.HalfWidth);}}
			msobj.ID.onmouseover = function(){if(msobj.ScrollStep == 0)return;msobj.MouseOver = 1;clearInterval(msobj.TimerID);}
			msobj.ID.onmouseout = function(){if(msobj.ScrollStep==0){if(msobj.Step==0)msobj.Step=1;return;}msobj.MouseOver=0;if(msobj.Stop==0){clearInterval(msobj.TimerID);msobj.TimerID=setInterval(msobj.StartID,timer);}}
		}
setTimeout(msobj.Begin,waittime);}
Marquee.prototype.Scroll=function(){
switch(this.Direction){case "top":this.CTL+=this.Step;if(this.CTL>=this.ScrollStep&&this.DelayTime>0){this.ID.scrollTop+=this.ScrollStep+this.Step-this.CTL;this.Pause();return}else{if(this.ID.scrollTop>=this.ClientScroll){this.ID.scrollTop-=this.ClientScroll}this.ID.scrollTop+=this.Step}break;case "bottom":this.CTL+=this.Step;if(this.CTL>=this.ScrollStep&&this.DelayTime>0){this.ID.scrollTop-=this.ScrollStep+this.Step-this.CTL;this.Pause();return}else{if(this.ID.scrollTop<=0){this.ID.scrollTop+=this.ClientScroll}this.ID.scrollTop-=this.Step}break;case "left":this.CTL+=this.Step;if(this.CTL>=this.ScrollStep&&this.DelayTime>0){this.ID.scrollLeft+=this.ScrollStep+this.Step-this.CTL;this.Pause();return}else{if(this.ID.scrollLeft>=this.ClientScroll){this.ID.scrollLeft-=this.ClientScroll}this.ID.scrollLeft+=this.Step}break;case "right":this.CTL+=this.Step;if(this.CTL>=this.ScrollStep&&this.DelayTime>0){this.ID.scrollLeft-=this.ScrollStep+this.Step-this.CTL;this.Pause();return}else{if(this.ID.scrollLeft<=0){this.ID.scrollLeft+=this.ClientScroll}this.ID.scrollLeft-=this.Step}break}
}

//tab封装
function tabs(tid,cid,tag1,tag2,addclass,theevent)
{
        if(arguments.length==3){theevent=arguments[2];tag1="dd";tag2=tag1;addclass="current";}
	var defaultindex=0,checkNav="",checkWrap="";
	var o1=document.getElementById(tid),o2=document.getElementById(cid),ElementNav=new Array();ElementWrap=new Array();
	chk=function(e,n){var v=eval("/"+n+"/gi");if(v==undefined){return true}else if(v.test(e.className)){return true};}
	function ser(e,arr,g,n,t)
         {
	    var tags=e.getElementsByTagName(g),v=0;
	    for(i=0;i<tags.length;i++)
                {
	           if(chk(tags[i],n)==true)
                   {
                    arr[v]=tags[i];v++;
                    if(t=="wrap")
                     {
                      if(tags[i].style.display=="block"){defaultindex=i;}
                      else{tags[i].style.display="none";}
                     }
                   }
		}
             if(t=="wrap"){tags[defaultindex].style.display="block";}
             else{$(tags[defaultindex]).addClass(addclass);}
	}
	function Start(e,f){
		var s=e.length;
		for(i=0;i<s;i++)
                   {
                       switch(theevent)
                        {
                          case "onclick":
                           {
			    e[i].onclick=function(){EV(this)}
                           }
                          break;

                          default:
                           {
			    e[i].onmouseover=function(){EV(this)}
                           }
                          break;
                        }      
		    }
		function EV(obj){
			for(var i=0;i<s;i++){
				f[i].style.display="none";
				$(e[i]).removeClass(addclass);
			}
			for(var i=0;i<s;i++){
				if(e[i]==obj){f[i].style.display="block";$(e[i]).addClass(addclass);}
			}
		}
	}
	ser(o2,ElementWrap,tag2,checkWrap,'wrap');
	ser(o1,ElementNav,tag1,checkNav,'nav');
	Start(ElementNav,ElementWrap)
}

//滚动函数
function marquee(boxid,direction,ITimes)
 {
   var movedistance=0,alldistance=0;
   var $boxid=$("#"+boxid);
   var $inner=$boxid.children(".inner")
   var $boxid_ul=$inner.children("ul");
   var $boxid_ul_li=$boxid_ul.children("li");
   var $prevarr=$boxid.children(".prev");
   var $nextarr=$boxid.children(".next");
   if(direction=="left" || direction=="right")
    {
     movedistance=parseInt($boxid_ul_li.eq(0).innerWidth());
     $boxid_ul_li.addClass("hx");
    }
   else
    {
     movedistance=parseInt($boxid_ul_li.eq(0).innerHeight());
     $boxid_ul_li.addClass("zx");
    }
   var nums=$boxid_ul_li.size();
   var alldistance=movedistance*nums;
   if(direction=="left" || direction=="right")
    {
     if(alldistance<$inner.innerWidth())
      {
       return;
      }
    }
   else
    {
     if(alldistance<$inner.innerHeight())
      {
       return;
      }
    }
   var itemwidth=$boxid_ul_li.eq(0).css("width");
   var itemheight=$boxid_ul_li.eq(0).css("height");
   var con=$boxid_ul.html();
   $boxid_ul.prepend(con);
   $boxid_ul.append(con);
   if(direction=="left" || direction=="right")
    {
     $boxid_ul.css("width",nums*movedistance*3+"px");
     $inner.scrollLeft(alldistance);
     $prevarr.click(function(){scroll("left");});
     $nextarr.click(function(){scroll("right");});
    }
   else
    {
     $boxid_ul.css("height",nums*movedistance*3+"px");
     $inner.scrollTop(alldistance);
     $prevarr.click(function(){scroll("up");});
     $nextarr.click(function(){scroll("down");});
    }
   function scroll(dir)
   {
    if(dir=="left")
     {
     $inner.animate({scrollLeft:"+="+movedistance+"px"},"normal",function(){reduction();});
     }
    else if(dir=="right")
     {
      $inner.animate({scrollLeft:"-="+movedistance+"px"},"normal",function(){reduction();});
     }
    else if(dir=="up")
     {
     $inner.animate({scrollTop:"+="+movedistance+"px"},"normal",function(){reduction();});
     }
    else if(dir=="down")
     {
      $inner.animate({scrollTop:"-="+movedistance+"px"},"normal",function(){reduction();});
     }
   }

  function reduction()
   {
     var scrolledLength=0;
     if(direction=="left" || direction=="right")
      {
        scrolledLength=$inner.scrollLeft();
        if(scrolledLength>=alldistance*2 || scrolledLength<=0)
        {
          $inner.scrollLeft(alldistance);
        }
     }
    else
      {
        scrolledLength=$inner.scrollTop();
        if(scrolledLength>=alldistance*2 || scrolledLength<=0)
        {
          $inner.scrollTop(alldistance);
        }
      }
    }
   
   var it=setInterval(function(){scroll(direction);},ITimes);
   $boxid.mouseenter(function(){
        clearInterval(it);
    });
   $boxid.mouseleave(function(){
       it=setInterval(function(){scroll(direction);},ITimes);
    });

 }
