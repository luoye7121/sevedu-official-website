$(function(){

	 //侧导航出现一次s
	 function oneNAV(){

			$('.index-content').animate({
									 	"left": "0px"},
									 	2000, function() {
									 	/* stuff to do after animation is complete */
									 	$('.index-content').animate({
									 		"left": "-270px"},
									 		2000, function() {
									 		/* stuff to do after animation is complete */
									 		$(".nav-close").css({"display":"block"});

									 	});
									 });
		 
	}
	oneNAV();

	//旋转图片
	function  rotateIMG(){
		// $("#rotate").rotate(180);
	var angle=0;
	var  opacityIMG=1;
	var time=setInterval(function(){
	angle +=6;
	if(angle>60){
		clearInterval(time);
		$('.surface').animate({
			opacity:0},
			"nomal", function() {
			/* stuff to do after animation is complete */
			$(this).remove();
		});
	}else{
		opacityIMG=opacityIMG-0.005;
		
		$("#rotate").rotate({
 		animateTo: angle,
		easing: $.easing.easeInOutExpo
	});
		}
		// $('.surface').fadeOut();
	}, 200);

	}
	rotateIMG();
	setInterval(function(){
		var location=parseInt($("#arrow").css("left"));
		moveArrow(location);
	},1000);
	//侧导航---点击事件
	 	$('.nav-close').click(function(e){
	 		e.stopPropagation();
				$('.index-content').animate({
						 	left: 0},
						 	"slow", function() {
						 	/* stuff to do after animation is complete */
						 	$('.nav-close').css({"display":"none"});
							$('.slideout').css({"display":"block"});
									
						 });

	 	});
	 	$('.slideout').click(function(e){
	 		e.stopPropagation();
				$('.index-content').animate({
						 	left: "-270px"},
						 	"slow", function() {
						 	/* stuff to do after animation is complete */
						 	$('.nav-close').css({"display":"block"});
							$('.slideout').css({"display":"none"});
									
						 });

	 	});
//设置items为当前窗口的高度
var windowHeight=$(window).height();
$(".items").css({
height:windowHeight+"px"
});
$(window).resize(function(){
var windowHeight=$(window).height();
$(".items").css({
height:windowHeight+"px"
});
});


//切换背景图
var bg=['url("../images/bg-ecomonical.jpg") no-repeat center center','url("../images/bg-education.jpg") no-repeat center center','url("../images/bg-rode.jpg") no-repeat center center','url("../images/bg-jion.jpg") no-repeat center center'];
$(".items").find(".item").each(function(index,element){
$(this).mouseover(function(){
$('body').css({"background":bg[index],"backgroundSize":"cover"})
	})
});

//箭头左右移动

function moveArrow(location){
	if(location==10){
		$('#arrow').animate({
			"left": "20px"},
			"slow", function() {
			/* stuff to do after animation is complete */
		});
	}else{
		$('#arrow').animate({
			"left": "10px"},
			"slow", function() {
			/* stuff to do after animation is complete */
		});
	}
	
}
});


/*$('.index-surface').click(function(e){
									$('.index-content').animate({
									 	"left": "-270px"},
									 	2000, function(){
									 		$(".nav-close").css({"display":"block"});
									 	});
								})*/