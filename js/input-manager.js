$(document).ready(function() {
	var InputManager = function(){
		this.interessado = function(){
			window.tagManager.estouInteressado();
			vwleads('open', {"modelId": "6A56K6"});
		}
		this.interessadoVersoes = function(idx){
			window.tagManager.estouInteressadoVersoes(idx);
			vwleads('open', {"modelId": "6A56K6"});
		}

		$('.menu .secondary').on('click', function() {
			$('.secondary').removeClass('visible');
		});
		$('.menu .secondary').on('click', function() {
			$('.secondary').removeClass('visible');
		});

		$('.menu .primary .icon').on('click', function() {
			$('.secondary').addClass('visible');
		});
		$('.main-content').on('click', function() {
			$('.secondary').removeClass('visible');
		});
	}
	var inputManager = new InputManager();
	window.inputManager = inputManager;

	(function($) {
	  $.fn.nodoubletapzoom = function() {
	      $(this).bind('touchstart', function preventZoom(e) {
	        var t2 = e.timeStamp
	          , t1 = $(this).data('lastTouch') || t2
	          , dt = t2 - t1
	          , fingers = e.originalEvent.touches.length;
	        $(this).data('lastTouch', t2);
	        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

	        e.preventDefault(); // double tap - prevent the zoom
	        // also synthesize click events we just swallowed up
	        $(this).trigger('click').trigger('click');
	      });
	  };
	})(jQuery);
	$('#menus').nodoubletapzoom();
	$(document).keydown(function(e) {
	    // ESCAPE key pressed
	    if (e.keyCode == 27) {
	        window.cubeManager.setActive(false);
	    }
	});
	document.addEventListener("touchmove", function(e) {e.preventDefault()});
	
	var lastYPosition = null;
	

	$('body').on('touchmove', '.scrollable', function(e) {
		$elem = $(event.target).closest('.scrollable');
		if(lastYPosition != null){
			var parentTop = $elem.parent().offset().top;
			var parentHeight = $elem.parent().height();
			var top = $elem.offset().top;
			var height = $elem.height();
			var newValue = top - parentTop+e.originalEvent.touches[0].pageY-lastYPosition;
			if(newValue>0) newValue=0;
			if(newValue<parentHeight-height){
				if(parentHeight-height < 0){
					newValue=parentHeight-height;	
				}else{
					newValue = 0;
				}
				
			}
			$elem.css('top',newValue+'px');
		}
		lastYPosition = e.originalEvent.touches[0].pageY;
	});
	
	$('body').on('touchend', '.scrollable', function(e) {
		lastYPosition=null;
	});


	var init = 0;
	document.body.addEventListener('touchstart', function(e){
        init = e.changedTouches[0].pageY;
    }, false)

	document.body.addEventListener('touchend', function(e){
		var deltaY = (e.changedTouches[0].pageY-init)/$(window).height();

		if(window.stateMachine.state.name=="identidade"){

		}

		var forbidden = window.cubeManager.enabled;
		forbidden |= $('.identidade .description').hasClass('show');
		forbidden |= $('.versoes .descriptions-mobile').hasClass('show');
		forbidden |= (window.stateMachine.state.name == 'galeria');
		forbidden |= (window.stateMachine.state.name == 'premios');

		if(deltaY < -0.15){
			if(!forbidden){
				window.stateMachine.askMove(window.stateMachine.Trigger.Next);
			}
		}

		if(deltaY > 0.15){
			if(window.stateMachine.state.name != 'galeria' && !forbidden){
				window.stateMachine.askMove(window.stateMachine.Trigger.Previews);
			}
		}
    }, false)
	


	//Main events
	var lastScrollRefresh = 0;
	if (window.addEventListener) {
		// IE9, Chrome, Safari, Opera
		window.addEventListener("mousewheel", onScroll, false);
		// Firefox
		window.addEventListener("DOMMouseScroll", onScroll, false);
	}
	// IE 6/7/8
	else window.attachEvent("onmousewheel", onScroll);
	function onScroll(e) {
		var e = window.event || e; // old IE support
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		if(Date.now() - lastScrollRefresh > 1){
			if(!window.stateMachine.onAnimation){
				if(delta > 0){
					//goToPrev();
					if(!$('.versoes_content').hasClass('on-description')){
						window.stateMachine.askMove(window.stateMachine.Trigger.Previews);	
					}
					
				}else if(delta < 0){
					//goToNext();
					if(!$('.versoes_content').hasClass('on-description')){
						window.stateMachine.askMove(window.stateMachine.Trigger.Next);
					}
				}
			}
			lastScrollRefresh = Date.now();
		}
	}
	document.body.addEventListener('touchstart', function(e){
        //window.stateMachine.askMove(window.stateMachine.Trigger.Next);
    }, false)

	$.fn.translateWithGyro = function(params){
    	var defaultWidth = params.width;
    	var defaultHeight = params.height;

    	var elem = this;
    	var position = (980-this.height()*defaultWidth/defaultHeight)/2;
		var rotation3d = {x:0, y:0};
		var speed = 15;
		var lastAlpha = 0;
		var pxValue = position;
		var restartGyro=false;

		setInterval(function(){restartGyro=true}, 5000);

		if(window.orientation == 0 || window.orientation == 180){
			this.width(this.height()*defaultWidth/defaultHeight);
		}

		var lastTouchX,lastTouchY = null;
		var width = elem.height()*defaultWidth/defaultHeight;
		var maxLeft = 0;
		var minLeft = 980-width;
		var onTouch = false;

		pxValue=minLeft/2;
		if(window.orientation == 0){
			elem.css('left',pxValue+'px');
		}
		document.body.addEventListener('touchstart', function(e){
	        lastTouchX = e.changedTouches[0].pageX;
	        lastTouchY = e.changedTouches[0].pageY;
	        onTouch = true;
	        restartGyro = false;
	    }, false)
		document.body.addEventListener('touchmove', function(e){
			
			if(lastTouchX != null){
				var deltaX = (e.changedTouches[0].pageX-lastTouchX);
				pxValue+=speed/15*deltaX;
				position=pxValue;
				if(pxValue < minLeft){pxValue = minLeft;}
			    if(pxValue > maxLeft){pxValue = maxLeft;}
			    if(window.orientation == 0 || window.orientation == 180){
				   	elem.css('left',pxValue+'px');
				}
			}
			lastTouchX = e.changedTouches[0].pageX;
			restartGyro = false;
	    }, false)
		document.body.addEventListener('touchend', function(e){
			lastTouchX = null;
			lastTouchY = null;
			onTouch = false;
		}, false)
		
		window.addEventListener("deviceorientation", gyroRefresh);
		window.addEventListener('orientationchange', translateOrientationChange);

		function translateOrientationChange(){
			if(window.orientation == 0 || window.orientation == 180){
				elem.width(elem.height()*defaultWidth/defaultHeight);
			}else{
				elem.width('100%');
				elem.height('100%');
				elem.css('left','0px');
			}
		}

	    function gyroRefresh(event){
	    	if((window.orientation == 0 || window.orientation == 180) && !onTouch){
				var width = elem.height()*defaultWidth/defaultHeight;
				var maxLeft = 0;
				var minLeft = 980-width;
		        if((lastAlpha < 180 && event.alpha > 180)||(lastAlpha > 180 && event.alpha < 180)){
			    	//inverting...
			    }else{
			    	var delta = event.alpha-lastAlpha;
			    	position+=speed*delta;
			    }
			    if(position < minLeft){position = minLeft;}
			    if(position > maxLeft){position = maxLeft;}

			    pxValue = 0.95*pxValue + 0.05*position;

			   	elem.css('left',pxValue+'px');
			    if(restartGyro){
			    	position = 0.97*position + 0.03*(minLeft/2);
			    	if(Math.abs(position-minLeft/2)<10){
			    		restartGyro = false;
			    	}
			    }
				lastAlpha = event.alpha;
			}
	    }
	    return this;
	}

	$.fn.changeFrameWithGyro = function(params){
    	var numberOfImages = params.numberOfImages;
    	var elem = this;
    	var currentIdx = 1;
    	var intIdx = 1;
    	var targetIdx = 1;
		var rotation3d = {x:0, y:0};
		var speed = 0.5;
		var lastAlpha = 0;
		var restartGyro=false;
		var threshold = 2;
		var left = -100;

		var lastTouchX = null;
		var minIdx = 1;
		var maxIdx = numberOfImages;
		var onTouch = false;
		document.body.addEventListener('touchstart', function(e){
	        lastTouchX = e.changedTouches[0].pageX;
	        onTouch = true;
	    }, false)

		document.body.addEventListener('touchmove', function(e){
			if(lastTouchX != null){
				var deltaX = (e.changedTouches[0].pageX-lastTouchX);
				$(elem).find(':nth-child('+intIdx+')').css('left','100%');
				//intIdx += deltaX;
				targetIdx+=speed/3*deltaX;
				if(targetIdx < minIdx){targetIdx = minIdx;}
			    if(targetIdx > maxIdx){targetIdx = maxIdx;}
			    
			    currentIdx = 0.7*currentIdx + 0.3*targetIdx;
			    intIdx = parseInt(currentIdx);
			    $(elem).find(':nth-child('+intIdx+')').css('left','0%');
			    left = -100 - intIdx*85/numberOfImages;
			    if((window.orientation == 0 || window.orientation == 180)){
			    	$(elem).css('left',left+'px');
			    }else{
			    	$(elem).css('left','0px');	
			    }
			}
			lastTouchX = e.changedTouches[0].pageX;
	    }, false)

		document.body.addEventListener('touchend', function(e){
			lastTouchX = null;
			onTouch = false;
		}, false)

		window.addEventListener('orientationchange', frameOrientationChange);

		function frameOrientationChange(){
			if(window.orientation == 90 || window.orientation == -90){
				$(elem).css('left','0px');
			}
		}


	    window.addEventListener("deviceorientation", gyroRefresh);
	    function gyroRefresh(event){
	    	if(!onTouch){
				var minIdx = 1;
				var maxIdx = numberOfImages;
		        if((lastAlpha < 180 && event.alpha > 180)||(lastAlpha > 180 && event.alpha < 180)){
			    	//inverting...
			    }else{
			    	var delta = event.alpha-lastAlpha;
			    	targetIdx+=speed*delta;
			    }
			    if(targetIdx < minIdx){targetIdx = minIdx;}
			    if(targetIdx > maxIdx){targetIdx = maxIdx;}

			    $(elem).find(':nth-child('+intIdx+')').css('left','100%');
			    if(Math.abs(currentIdx - targetIdx) > threshold){
			    	currentIdx = 0.7*currentIdx + 0.3*targetIdx;
			    }
			    intIdx = parseInt(currentIdx);
			    left = -100 - intIdx*85/numberOfImages;
			    $(elem).find(':nth-child('+intIdx+')').css('left','0%');

			    if(window.orientation == 90 || window.orientation == -90){
					$(elem).css('left','0px');
				}else{
					$(elem).css('left',left+'px');	
				}

			    
				lastAlpha = event.alpha;
			}
	    }
	    return this;
	}

	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		$('#home').translateWithGyro({'width':1920,'height':988});
	    $('.mobile-externo-trabalho .extern-container').changeFrameWithGyro({'numberOfImages':76});
	    $('.mobile-externo-aventura .extern-container').changeFrameWithGyro({'numberOfImages':76});
	    $('.robust-slide.en .robust-mobile-bg').translateWithGyro({'width':1920,'height':988});
	    $('.robust-slide.br .robust-mobile-bg').translateWithGyro({'width':1920,'height':988});
	    $('.cross-slide.en .cross-mobile-bg').translateWithGyro({'width':1920,'height':988});
	    $('.cross-slide.br .cross-mobile-bg').translateWithGyro({'width':1920,'height':988});
	}

});