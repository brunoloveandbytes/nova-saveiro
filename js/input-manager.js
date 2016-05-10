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
		$elem = $(event.target).closest('.scrollable')
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
		if(deltaY < -0.15){
			if(!window.cubeManager.enabled){
				window.stateMachine.askMove(window.stateMachine.Trigger.Next);
			}
		}
		if(deltaY > 0.15){
			if(window.stateMachine.state.name != 'galeria' && !window.cubeManager.enabled){
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


});