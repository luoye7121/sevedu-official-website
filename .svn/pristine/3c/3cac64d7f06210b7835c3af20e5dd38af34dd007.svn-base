$(function(){
	//分页
	function createDemo(name){
			var container = $('#pagination-' + name);
			var sources = function(){
				/*$.ajax({
					url: '../newsdata.json',
					type: 'POST',
					dataType: 'json',
					// data: {param1: 'value1'},
				})
				.done(function() {
					console.log("success");
					// alert(data.news[0].title);
					// alert(123);
				})
				.fail(function() {
					console.log("error");
				})
				.always(function() {
					console.log("complete");
				});*/
				
				var result = [];

				for(var i = 1; i < 100; i++){
					result.push(i);
				}

				return result;
			}();

			var options = {
				dataSource: sources,
				className: 'paginationjs-theme-blue',
				callback: function(response, pagination){
					// window.console && console.log(response, pagination);

					var dataHtml = '<ul>';

					$.each(response, function(index, item){
						dataHtml += '<li><a href="javascript:;"></a><dl><dt><img src="images/news-01.jpg"/></dt><dd>根据领导的指示，制定所属区域的销售计划，完成自己的销售任务根据领导的指示，制定所属区域的销售计划，完成自己的销售任务</dd><dd class="time">2017-06-30</dd></dl>'+'</li>';
					});

					dataHtml += '</ul>';

					container.prev().html(dataHtml);
				},
				pageSize: 9
			};

			//$.pagination(container, options);

			container.addHook('beforeInit', function(){
				// window.console && console.log('beforeInit...');
			});
			container.pagination(options);

			container.addHook('beforePageOnClick', function(){
				// window.console && console.log('beforePageOnClick...');
				//return false
			});

			return container;
		}

		createDemo('pages');

});