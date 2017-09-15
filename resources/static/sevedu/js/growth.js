$(function(){
$top=['168px','206px','295px','326px','334px','220px','470px','492px','415px','544px']
	$('.item').each(function(index,element){
		$(this).animate({
			"top": $top[index],
			},
			200*index, function() {
			/* stuff to do after animation is complete */
		});
	});
});