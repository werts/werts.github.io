var werts = {
	isScrolling: false,
	init: function(){
		var $metroMain = $('.metro-main');
		werts.wrap = $('.col');
		werts.sections = werts.wrap.find('section');
		werts.navs = werts.wrap.find('nav span');
		werts.sections.each(function(index){
			var $this = $(this);
			$this.height(werts.wrap.height());
		});
		this.bind();
		$metroMain.each(function(){
			var $metroTile = $(this).find('li'), $ref = $metroTile.eq(0), refWidth = $ref.width();
			$metroTile.each(function(){
				var $this = $(this), tileHeight = 0.578 * refWidth;
				$this.height(tileHeight);
				$this.css('line-height', tileHeight + 'px');
			});
		});
	},
	bind:function(){
		$('.col').on('mousewheel', function(e){
			var delta = e.originalEvent.deltaY;
			var direction = (delta > 0) ? 1 : -1;
			
			if (!werts.isScrolling){
				werts.isScrolling = true;
				setTimeout(function(){
					werts.next(direction);
				}, 360);
			}
		});
		werts.navs.on('click', function(e){
			var $this = $(this);
			werts.clickNext($this);
		});
	},
	clickNext: function(ele){
		var _index = werts.navs.index($('nav span.active')), 
			_crtIndex = werts.navs.index(ele);
		werts.next(_crtIndex - _index);
	},
	next:function(direction){
		var _st = werts.wrap.scrollTop(), _wh = werts.wrap.height(), _index = 0;
		werts.isScrolling = false;
		werts.sections.each(function(index){
			var $this = $(this);
			if ($this.hasClass('active')){
				_index = index;
			}
		});
		if (_index + direction < 0){
			werts.wrap.scrollTop(0);
			return false;
		}
		if (_index + direction >= werts.sections.length){
			werts.wrap.scrollTop(_st);
			return false;
		}
		werts.navs.removeClass('active').eq(_index + direction).addClass('active');
		werts.wrap.scrollTop(_st + direction * _wh);
		werts.sections.removeClass('active').eq(_index + direction).addClass('active');
	}
};
