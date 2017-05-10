/* 导航点击与缩小 */
$('body').on('click', '.ui-nav-items>li>a', function () {
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
			_call.css('height', _call.children('a').length * _call.children('a').height());
		}
});
$('body').on('click', '.ui-nav-toggle', function () {
	if($('.ui-nav').hasClass('active')){
		$('.ui-container').css('padding-left', 200);
		$('.ui-header').css('padding-left', 200);
	}else{
		$('.ui-container').css('padding-left', 50);
		$('.ui-header').css('padding-left', 50);
	}
	$('.ui-nav').toggleClass('active');
});

/* 选项卡切换 */
$('body').on('click', '.ui-tabs-title>ul>li', function () {
	var _this = $(this);
	if(!_this.hasClass('active')){
		var _index = _this.index();
		_this.addClass('active').siblings().removeClass('active');
		_this.closest('.ui-tabs-box').find('.ui-tabs-body>div').eq(_index).addClass('active').siblings().removeClass('active');
	}
})

/* 显示隐藏 查询条件 */
$('body').on('click', '.ui-query-more', function () {
	var _this = $(this);
	var queryH = _this.hasClass('active') ? 100 : 'auto';
	_this.siblings('.ui-query').css('height', queryH);
	_this.toggleClass('active');
})

var relaui = {
	queryMore: function () {
		if($('.ui-query').height() > 100){$('.ui-query-more').show();$('.ui-query').css('height', 100)}
	}
}