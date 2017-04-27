$(function () {
	$(document).on('click', '.ui-nav-items>li>a', function () {
			var _this = $(this),
					_call = _this.next(),
					_part = _this.parent();
			_part.siblings().removeClass('active');
			_part.siblings().find('.ui-items-call').css('height', 0);
			if(_part.hasClass('active')){
				_call.css('height', 0);
				_part.removeClass('active');
			}else{
				_part.addClass('active');
				console.log()
				_call.css('height', _call.children('a').length * _call.children('a').height());
			}
	});
	$(document).on('click', '.ui-nav-toggle', function () {
		if($('.ui-nav').hasClass('active')){
			$('.ui-container').css('padding-left', 200);
			$('.ui-header').css('padding-left', 200);
		}else{
			$('.ui-container').css('padding-left', 50);
			$('.ui-header').css('padding-left', 50);
		}
		$('.ui-nav').toggleClass('active');
	})
})