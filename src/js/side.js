
$(function(){
	//使页面导航恢复到点击之前的状态
	function subNAV(){
		$('#index-nav').find(".index-sub").eq(parseInt($.cookie("nav-position"))).find('.index-sub-nav').css({"height":$.cookie("nav-height")});
	}
	$("#index-nav li").each(function(index,element){
		var a = $(this).children("a");
		var Oexpress=new RegExp($(a)[0].href);
		var Otarget=String(window.location);
		
		//获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
	    var curWwwPath=window.location.href;
	    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
	    var pathName=window.document.location.pathname;
	    var pos=curWwwPath.indexOf(pathName);
	    //获取主机地址，如： http://localhost:8083
	    var localhostPaht=curWwwPath.substring(0,pos);
	    //获取带"/"的项目名，如：/uimcardprj
	    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1)+"/";
	    var project=localhostPaht+projectName;
	    if(Otarget==project){
	    	if(Otarget.match(Oexpress)){
				$(this).addClass('active');
				if($(this).parents(".index-sub").length>0){
					$(this).parents(".index-sub").addClass("active");
				}
			}
	    }else{
	    	if(Otarget.match(Oexpress)){
	    		if($(a)[0].href!=project){
	    			$(this).addClass('active');
					if($(this).parents(".index-sub").length>0){
						$(this).parents(".index-sub").addClass("active");
					}
	    		}
				
			}
	    }
		
		
	});
	subNAV();
	//侧导航点击展开
	var $subNav=$('#index-nav').find(".index-sub");
		$subNav.each(function(index,element){
			$(this).click(function(){
				//保存当前点击按钮的状态
				//$(this).addClass("active").siblings().removeClass("active");
				var $height=$(this).find(".index-sub-nav").find('li').eq(0).height()*$(this).find(".index-sub-nav").find('li').length+"px";
				$.cookie("nav-position", index, { 
          			path: "/", expires: 1
        			});
				$.cookie("nav-height", $height, { 
          			path: "/", expires: 1 
        			});
				$(this).find('.index-sub-nav')
				.animate({height:$height},'normal');
				$(this).siblings().find(".index-sub-nav")
				.animate({height:0},'normal');
			});
		});
});