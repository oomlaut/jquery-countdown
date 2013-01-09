(function($){
	$.fn.countdown = function(options, callback){
		var defaults = {
			beforeEventMessage: "It's coming!",
			onEventMessage: "It's now!",
			afterEventMessage: "It's passed!",
			displayMessage: true,
			format: "DD"
		},
			montharray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
			ms = {
				day: 1000*60*60*24,
				hour: 1000*60*60,
				min: 1000*60,
				sec: 1000
			};
		
		return this.each(function(){
			var $this = $(this),
				settings = $.extend(true, defaults, options),
				tick = function(){
					var now = new Date();
					var thisYear = (now.getYear() < 1000) ? now.getYear() + 1900 : now.getYear();
					var nowString = montharray[now.getMonth()] + " " + now.getDate() + ", " + thisYear + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
					var targetString = montharray[settings.m-1] + " " + settings.d + ", " + settings.y;
					
					var diff = Date.parse(targetString) - Date.parse(nowString);
					var day = Math.floor(diff/(ms.day)*1);
					var hour = Math.floor((diff%(ms.day))/(ms.hour)*1);
					var min = Math.floor(((diff%(ms.day))%(ms.hour))/(ms.min)*1);
					var sec = Math.floor((((diff%(ms.day))%(ms.hour))%(ms.min))/ms.sec*1);
					
					if(day===0 && hour===0 && min===0 && sec===1){
						$this.text(settings.afterEventMessage);
					} else {
						var content = settings.format;
						content = content.replace("DD", day);
						content = content.replace("HH", hour);
						content = content.replace("MM", min);
						content = content.replace("SS", sec);
						$this.text(content);
						window.setTimeout(tick, 1000);
					}
				};
			tick();
			if($.isFunction(callback)) { callback(); }
			
		});
	};
})(jQuery);
