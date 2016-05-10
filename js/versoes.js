
$(document).ready(function() {
	var mousedown = 0;
	var quickFix = 19;
	var timerId = null;
	var lastMousePosition = {
	  x: null
	};
	var drag = {
		x: 0,
		verify: function(){
			quickFix = $('.trail').offset().left-$('.versoes .ruler').offset().left-31;
			var normalized = (this.x - $('.versoes .trail').offset().left)/$('.versoes .trail').width();
			if(normalized<0)normalized=0;
			if(normalized>1)normalized=1;

			console.log(normalized);
			var idx = 1+parseInt(0.5+parseInt(12*(normalized))/2);
		  	$('.versoes .handle').css('left',quickFix + normalized*$('.versoes .trail').width()+'px');
		  	versoesManager.goToIdx(idx);
		},
		snap: function(){
			var idx = versoesManager.getCurrentIdx();
			var novo;
			var target= quickFix+parseInt($('.versoes .trail').width()*(idx-1)/6);
			var atual = $('.versoes .handle').position().left;
			novo = parseInt(0.7*atual+0.3*target);
			if(novo == atual){
				$('.versoes .handle').css('left',target+'px');
				clearInterval(timerId);
				timerId = null;	
			}else{
				$('.versoes .handle').css('left',novo+'px');	
			}
			//console.log('running...');
		},
		snapOnce: function(){
			var idx = versoesManager.getCurrentIdx();
			var novo;
			quickFix = $('.trail').offset().left-$('.versoes .ruler').offset().left-31;
			var target= quickFix+parseInt($('.versoes .trail').width()*(idx-1)/6);
			$('.versoes .handle').css('left',target+'px');
		}
	}

	$('.versoes .handle').mousedown(function(){
		mousedown=1;
	});
	

	$('.versoes .ruler').mousedown(function(){
		mousedown=1;
	});

	$('.versoes .handle').mouseup(function(){
		mousedown=0;
		lastMousePosition.x = null;
		lastMousePosition.y = null;
		if(timerId==null){
			timerId = setInterval(function () {
		      drag.snap();
		    }, 20);	
		}
	});

	$('.sub-slide').mousemove(function(e){
		if(mousedown > 0){
		  if(lastMousePosition.x != null){
		  	//console.log('X: '+ (e.clientX - lastMousePosition.x));
		    drag.x += e.clientX - lastMousePosition.x;
		    drag.verify();
		  }else{
		  	drag.x = e.clientX;
		  }
		  lastMousePosition.x = e.clientX;

		  var y = 1-e.clientY/$(window).height(); 
		}
	});

	$('.sub-slide').mouseleave(function() {
		mousedown=0;
		if(timerId==null){
			timerId = setInterval(function () {
		      drag.snap();
		    }, 20);	
		}
	});
	
	$('.sub-slide').mouseup(function(){
		mousedown=0;
		lastMousePosition.x = null;
		if(timerId==null){
			timerId = setInterval(function () {
		      drag.snap();
		    }, 20);	
		}
	});



	var VersoesManager = function(){
		var currentIdx = 1;
		var maxIdx = 7;
		this.getCurrentIdx = function(){
			return currentIdx;
		}
		this.goToRight = function(rotation){
			rotation = typeof rotation !== 'undefined' ? rotation : true;
			$('.car'+currentIdx).css('left','100%');
			currentIdx++;
			if(currentIdx > maxIdx){
				if(rotation){
					currentIdx = 1;
				}else{
					currentIdx = maxIdx;
				}
			}
			$('.car'+currentIdx).css('left','0%');
			window.tagManager.viuVersoes(currentIdx);
			drag.snapOnce();
			if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {this.refreshArrows();}
		}
		this.goToLeft = function(rotation){
			rotation = typeof rotation !== 'undefined' ? rotation : true;
			$('.car'+currentIdx).css('left','100%');
			currentIdx--;
			if(currentIdx < 1){
				currentIdx = maxIdx;
				if(rotation){
					currentIdx = maxIdx;
				}else{
					currentIdx = 1;
				}
			}
			window.tagManager.viuVersoes(currentIdx);
			$('.car'+currentIdx).css('left','0%');
			drag.snapOnce();
			if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {this.refreshArrows();}
		}
		this.goToIdx = function(idx){
			if(currentIdx!=idx){
				$('.car'+currentIdx).css('left','100%');
				currentIdx=idx;
				//console.log(idx);
				window.tagManager.viuVersoes(currentIdx);
				$('.car'+currentIdx).css('left','0%');
			}
			if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {this.refreshArrows();}
		}
		this.refreshArrows = function(){
			if(currentIdx == 1){
				$('.versoes .left-arrow').css('display','none');
				$('.versoes .left-mobile').css('display','none');
			}else{
				$('.versoes .left-arrow').css('display','inline');
				$('.versoes .left-mobile').css('display','inline');
			}
			if(currentIdx == 7){
				$('.versoes .right-arrow').css('display','none');
				$('.versoes .right-mobile').css('display','none');
				if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
					$('.down-arrow').addClass('show');
				}
			}else{
				$('.versoes .right-arrow').css('display','inline');
				$('.versoes .right-mobile').css('display','inline');
				if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
					$('.down-arrow').removeClass('show');
				}
			}
		}

		this.switchDescription = function(elem){
			$father = $(elem).parent().parent();
			if($(elem).parent().hasClass('itens')){
				$father.find('.itens').toggleClass('open');
				if($father.find('.itens').hasClass('open')){
					$father.find('.opcionais').addClass('top');
					if($father.find('.opcionais').hasClass('open')){
						$father.find('.cores').addClass('top-2');
						$father.find('.cores').removeClass('top-1');
					}else{
						$father.find('.cores').removeClass('top-2');
						$father.find('.cores').addClass('top-1');
					}
				}else{
					$father.find('.opcionais').removeClass('top');
					if($father.find('.opcionais').hasClass('open')){
						$father.find('.cores').removeClass('top-2');
						$father.find('.cores').addClass('top-1');
					}else{
						$father.find('.cores').removeClass('top-1');
						$father.find('.cores').removeClass('top-2');
					}
				}
			}
			if($(elem).parent().hasClass('opcionais')){
				$father.find('.opcionais').toggleClass('open');
				if($father.find('.opcionais').hasClass('open')){
					if($father.find('.opcionais').hasClass('top')){
						$father.find('.cores').removeClass('top-1');
						$father.find('.cores').addClass('top-2');
					}else{
						$father.find('.cores').addClass('top-1');
						$father.find('.cores').removeClass('top-2');
					}
				}else{
					if($father.find('.opcionais').hasClass('top')){
						$father.find('.cores').addClass('top-1');
						$father.find('.cores').removeClass('top-2');
					}else{
						$father.find('.cores').removeClass('top-1');
						$father.find('.cores').removeClass('top-2');
					}
				}
			}
			if($(elem).parent().hasClass('cores')){
				$father.find('.cores').toggleClass('open');
			}
		}
		this.showItens = function(elem){
			$('.versoes .descriptions-mobile').addClass('show');
			$('.versoes .descriptions-mobile .itens').addClass('show');
		}
		this.showOpcionais = function(elem){
			$('.versoes .descriptions-mobile').addClass('show');
			$('.versoes .descriptions-mobile .opcionais').addClass('show');
		}
		this.showCores = function(elem){
			$('.versoes .descriptions-mobile').addClass('show');
			$('.versoes .descriptions-mobile .cores').addClass('show');
		}
		this.closeDescription = function(){
			$('.versoes .descriptions-mobile').removeClass('show');
			$('.versoes .descriptions-mobile .itens').removeClass('show');
			$('.versoes .descriptions-mobile .opcionais').removeClass('show');
			$('.versoes .descriptions-mobile .cores').removeClass('show');
		}
		this.versoesCarClick = function(){
	    	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
	    		//window.versoesManager.goToRight();
	    	}else{
	    		$('.versoes_content').toggleClass('on-description');
	    	}
	    }

		this.sizeWasChanged = function(){
			drag.snapOnce();
		}
		this.stop = function(){
			this.goToIdx(1);
			drag.snapOnce();
			$('.versoes_content').removeClass('on-description');
			$('.versoes .descriptions-mobile').removeClass('show');
			$('.versoes .descriptions-mobile').find('show').removeClass('show');
		}
	}
	var versoesManager = new VersoesManager();
	window.versoesManager = versoesManager;

});