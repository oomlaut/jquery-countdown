(function($){
	$.fn.countdown = function(options, callback){
		var defaults = {
			afterEventMessage: "It's passed!",
			format: "%d days, %h hours, %m minutes, %s seconds"
		},
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
					var diff = Date.parse(settings.end) - new Date();
					if(diff <= 0){
						$this.text(settings.afterEventMessage);
					} else {
						var content = settings.format;
						content = content.replace("%d", Math.floor(diff/(ms.day)*1));
						content = content.replace("%h", Math.floor((diff%(ms.day))/(ms.hour)*1));
						content = content.replace("%m", Math.floor(((diff%(ms.day))%(ms.hour))/(ms.min)*1));
						content = content.replace("%s", Math.floor((((diff%(ms.day))%(ms.hour))%(ms.min))/ms.sec*1));
						$this.text(content);
						window.setTimeout(tick, 1000);
					}
					return true;
				};
			if(tick() && $.isFunction(callback)) { callback(); }
			
		});
	};
})(jQuery);
