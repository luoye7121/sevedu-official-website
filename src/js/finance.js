$(function(){
	//页面高度
	var itemHeight=$(window).height();
	$(".index-content").height(itemHeight);
	$(".item").height(itemHeight);
	$(window).resize(function(){
	// itemHeight=$(window).height();
	$(".index-content").height(itemHeight);
	$(".item").height(itemHeight);
	})
	// alert(itemHeight);
	jQuery(function(){
			var iPagerCount=$(".item").length;
			var iPageNumber=0;
			var aTop=[];
			for(var i=0;i<$('.item').length;i++){
				aTop.push(itemHeight*i);
			}
			var sTop=$(window).scrollTop();
			if(sTop>=aTop[0]&&sTop<aTop[1]){iPageNumber=0;}
			if(sTop>=aTop[1]&&sTop<aTop[2]){iPageNumber=1;}
			if(sTop>=aTop[2]){iPageNumber=2;}
			
			//美化浏览器的滚动条
			// $("html").niceScroll({
			// 	touchbehavior:false,cursorcolor:"#0966ce",cursoropacitymax:1,cursorwidth:8,horizrailenabled:true,cursorborderradius:5,autohidemode:true,background:'none',cursorborder:'solid 1px #0966ce'
			// });
			
			//滑动滚动条翻屏效果
			$("html,body").bind("mousewheel",function(event,intDelta){
					var $this=$(this),
					timeoutId=$(this).data('timeoutId');
					if(timeoutId){
						clearTimeout(timeoutId);
					}
					$this.data('timeoutId',setTimeout(function(){
							intDelta>0?pageUp():pageDown();$this.removeData('timeoutId');$this=null;
						},150));
					return false;
				});
			
			function pageUp(){
				iPageNumber=iPageNumber<=0?0:iPageNumber-1;slide(aTop[iPageNumber]);
			}
			function pageDown(){
				iPageNumber=iPageNumber>=iPagerCount-1?iPageNumber:iPageNumber+1;slide(aTop[iPageNumber]);
			}	

			function slide(length){
				 var dot=length / itemHeight;
				$(".dot").find("ul li").eq(dot).addClass('dot-one').siblings().addClass('dot-transparent').removeClass('dot-one');
				$("body,html").stop().animate({scrollTop:length},1000,'easeOutExpo');
			}
			$(".dot").find("ul li").each(function(index,element){
				var dotPosition=parseInt($('.dot ul').find('.dot-one').attr('data-index'));
				$(this).click(function(){
					
					var  step=index-dotPosition;
					// console.log($.type(itemHeight));
					$("body,html").stop().animate({scrollTop:step*itemHeight+'px'},1000,'easeOutExpo');
					$('.dot ul li').eq(index).addClass('dot-one').siblings().removeClass('dot-one').addClass('dot-transparent');
				})
			});
			//扩展动画
			$.extend($.easing,{
					easeOutExpo:function(e,f,a,h,g){
						return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a
					},easeOutBounce:function(x,t,b,c,d){
					if((t/=d)<(1/2.75)){
						return c*(7.5625*t*t)+b;
					}else if(t<(2/2.75)){
						return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;
					}else if(t<(2.5/2.75)){
						return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;
					}else{
						return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;
					}
				}
			});
	});	
})