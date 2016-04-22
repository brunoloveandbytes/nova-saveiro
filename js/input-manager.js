$(document).ready(function() {
	var InputManager = function(){
		this.dealClick = function(elem){
			if(elem.target.className == "interessado"){
				window.tagManager.estouInteressado();
				vwleads('open', {"modelId": "6A56K6"});	
			}
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
	document.addEventListener("touchmove", function(e) { e.preventDefault() });

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
					window.stateMachine.askMove(window.stateMachine.Trigger.Previews);
				}else if(delta < 0){
					//goToNext();
					window.stateMachine.askMove(window.stateMachine.Trigger.Next);
				}
			}
			lastScrollRefresh = Date.now();
		}
	}
	document.body.addEventListener('touchstart', function(e){
        window.stateMachine.askMove(window.stateMachine.Trigger.Next);
    }, false)


});