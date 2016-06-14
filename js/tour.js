$(document).ready(function() {
	var mouseDown = 0;
	var Ambient = {None:0,Extern:1,Intern:2};
	var DragState = {None:0,Handle:1,Free:2};
	var ambient = Ambient.None;
	var dragState = DragState.None;
	var lastX = null;
	var handleWidth = 25;
	var totalImgs = 76;
	$("body").mousedown(function() {
		if(dragState == DragState.None){
			dragState = DragState.Free;
		}
		mouseDown=1;
	});
	$(".tour-slider .handle").mousedown(function() {
	  dragState = DragState.Handle;
	});
	$(".tour-slider .externo").mousedown(function() {
	  dragState = DragState.Handle;
	});
	$("body").mousemove(function(e) {
		
		// console.log("Drag State: " + dragState);
		// console.log("Ambient: " + ambient);
		// console.log("Mouse Down: " + mouseDown);
		
		if(ambient == Ambient.Extern && mouseDown){
			if(dragState == DragState.Handle){
				var left = e.clientX-$('.tour-slider').offset().left-32;
				var width = $('.tour-slider .externo').width();
				var externoShift = $('.tour-slider .externo').offset().left-$('.tour-slider').offset().left;
				var handleShift = -32+handleWidth/2+2;
				var min = externoShift+handleShift;
				var max = $('.tour-slider .externo').width()+externoShift+handleShift-handleWidth;
				if(left<min)left=min;
				if(left>max) left=max;
				var normalized = (left-min)/(width-handleWidth);
				//console.log("normalized:"+normalized);
				$('.tour-slider .handle').css('left',left+'px');
				var currentIdx = parseInt(totalImgs*normalized+1);
				tourManager.setIndex(currentIdx);
			}else if(dragState == DragState.Free){
				if(lastX != null){
					if(e.clientX>lastX){
						tourManager.addIndex(1);
					}else if(e.clientX<lastX){
						tourManager.addIndex(-1);
					}
					
				}
			}
		}
		lastX = e.clientX;
	});
	$("body").mouseup(function() {
	  mouseDown=0;
	  dragState = DragState.None;
	  lastX=null;
	});
	$("body").mouseleave(function() {
	  mouseDown=0;
	  dragState = DragState.None;
	  lastX=null;
	});


	var TourManager = function(){
		this.Car = {Aventura:0,Trabalho:1};
		this.currentCar;
		this.currentIdx=0;
		this.ieAspect = 1;
		this.minIeTop = 0;
		this.goToSequence = function(car){
			this.currentCar = car;
			$('.tour_principal').removeClass('onMiddle');
			$('.tour_sequence').addClass('onMiddle');
			$('.tour-slider').addClass('show-slider');
			if(this.currentCar == this.Car.Aventura){
				$('#tour_aventura_sequence').addClass('from-side');
			}else{
				$('#tour_trabalho_sequence').addClass('from-side');
			}
			this.setCarContainer(0);
			ambient = Ambient.Extern;
		}
		this.backFromSequence = function(car){
			$('.tour_principal').addClass('onMiddle');
			setTimeout(function(){ $('.tour_sequence').removeClass('onMiddle'); }, 1000);
			$('.tour-slider').removeClass('show-slider');
			if(car == this.Car.Aventura){
				$('#tour_aventura_sequence').removeClass('from-side');
			}else{
				$('#tour_trabalho_sequence').removeClass('from-side');
			}
			this.resetExtern();
		}
		this.goToIntern = function(){
			if(ambient == Ambient.Extern){
				ambient = Ambient.Intern;
				$('.tour-slider .externo.bar').removeClass('active');
				$('.tour-slider .interno.bar').addClass('active');
				if(!window.cubeManager.isActive()){
					window.cubeManager.setActive(true);
				}
				if(!isie()){
					if(this.currentCar == this.Car.Aventura){
						window.cubeManager.setCubeName('saveiro_aventura_interno');
						$('#saveiro_aventura_interno').css('display','inline');
					}else{
						window.cubeManager.setCubeName('saveiro_trabalho_interno');
						$('#saveiro_trabalho_interno').css('display','inline');
					}
				}else{
					this.setIeContainer();
					if(this.currentCar == this.Car.Aventura){
						$('#saveiro-aventura-ie-interno').css('display','inline');
					}else{
						$('#saveiro-trabalho-ie-interno').css('display','inline');
					}
				}
				this.resetExtern();
			}
		}
		this.goToExtern = function(){
			if(isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch){
				window.tourMobileManager.goToExtern();	
			}else{
				if(ambient == Ambient.Intern){
					ambient = Ambient.Extern;
					$('.tour-slider .externo.bar').addClass('active');
					$('.tour-slider .interno.bar').removeClass('active');
					window.cubeManager.setActive(false);
					if(!isie()){
						$('#saveiro_trabalho_interno').css('display','none');
						$('#saveiro_aventura_interno').css('display','none');
					}else{
						$('#saveiro-trabalho-ie-interno').css('display','none');
						$('#saveiro-aventura-ie-interno').css('display','none');
					}
				}
			}
		}
		this.setCarContainer = function(pct){
			var visibleHeight = $(window).height()-$('.tour_sequence').offset().top-150;
			var aspect = $('.tour_sequence').width()/$('.tour_sequence').height();
			var containHeight,coverHeight;
			var containWidth,coverWidth;
			var containLeft,coverLeft;
			var containTop,coverTop;

			if(aspect > 1920/1080){
				containHeight = visibleHeight;
				containWidth = visibleHeight*1920/1080;
				containLeft = ($('.tour_sequence').width() - containWidth)/2;
				containTop = 0;
				coverWidth = $('.tour_sequence').width();
				coverHeight = $('.tour_sequence').width()*1080/1920;
				coverLeft = 0;
				coverTop = (visibleHeight - coverHeight)/2;
			}else{
				containHeight = $('.tour_sequence').width()*1080/1920;
				containWidth = $('.tour_sequence').width();
				containLeft = 0;
				containTop = (visibleHeight - containHeight)/2;
				coverWidth = visibleHeight*1920/1080;
				coverHeight = visibleHeight;
				coverLeft = ($('.tour_sequence').width() - coverWidth)/2;
				coverTop = 0;
			}
			$('.tour_car_sequence').height(containHeight*(1-pct)+pct*coverHeight);
			$('.tour_car_sequence').width(containWidth*(1-pct)+pct*coverWidth);
			$('.tour_car_sequence').css('left',containLeft*(1-pct)+pct*coverLeft+'px');
			$('.tour_car_sequence').css('top',containTop*(1-pct)+pct*coverTop+'px');
		}
		this.setIeContainer = function(){
			this.ieAspect = $('.ie-interno').width()/$('.ie-interno').height();
			var width = $('.ie-interno').width();
			var height = $('.ie-interno').height();
			console.log(this.ieAspect);
			if(this.ieAspect >= 1){
				$('.ie-frame').width(width);
				$('.ie-frame').height(width);
				this.minIeTop = (height-width);
				$('.ie-frame').css('left','0px');
			}else{
				$('.ie-frame').width(height);
				$('.ie-frame').height(height);
				$('.ie-frame').css('top','0px');
				$('.ie-frame').css('left',(width-height)/2+'px');
			}
		}
		this.setIePosition = function(newX,newY){
			/*
			if(newY>0){
				this.currentIeIdx = 1 + parseInt((newY/10%36));
			}else{
				this.currentIeIdx = 1 + 35+parseInt(newY/10%36);
			}
			$('.ie-frame .ie_interno_item').css('background-position',50+newY/4+'% 0%');
			*/

			$('.ie-frame .ie_interno_item'+this.currentIeIdx).css('left','100%');
			if(newY>0){
				this.currentIeIdx = 1 + parseInt((newY/10%36));
			}else{
				this.currentIeIdx = 1 + 35+parseInt(newY/10%36);
			}
			//console.log('.ie-frame .ie_interno_item'+this.currentIeIdx);
			$('.ie-frame .ie_interno_item'+this.currentIeIdx).css('left','0%');

			if(this.ieAspect>1){
				$('.ie-frame').css('left','0px');
				$('.ie-frame').css('top',this.minIeTop*(45-newX)/90+'px');
			}else{
				$('.ie-frame').css('top','0px');
			}
		}
		this.setIndex = function(idx){
			if(idx>=totalImgs){
				this.goToIntern();
			}else{
				$('.aventura_car_item1').css('left','100%');
				$('.trabalho_car_item1').css('left','100%');
				$('.aventura_car_item'+this.currentIdx).css('left','100%');
				$('.trabalho_car_item'+this.currentIdx).css('left','100%');
				this.currentIdx = idx;
				this.setCarContainer(window.tourManager.currentIdx/75);
				$('.aventura_car_item'+this.currentIdx).css('left','0%');
				$('.trabalho_car_item'+this.currentIdx).css('left','0%');
			}
		}
		this.addIndex = function(val){
			if(this.currentIdx+val <= totalImgs && this.currentIdx+val > 0){
				this.setSlider(val);
				this.setIndex(this.currentIdx+val);
			}
		}
		this.resetExtern = function(){
			$('.aventura_car_item1').css('left','100%');
			$('.trabalho_car_item1').css('left','100%');
			$('.aventura_car_item'+this.currentIdx).css('left','100%');
			$('.trabalho_car_item'+this.currentIdx).css('left','100%');
			this.currentIdx = 1;
			this.setCarContainer(window.tourManager.currentIdx/75);
			$('.aventura_car_item'+this.currentIdx).css('left','0%');
			$('.trabalho_car_item'+this.currentIdx).css('left','0%');
			var width = $('.tour-slider .externo').width();
			var min = 64-handleWidth+2;
			var normalized = (this.currentIdx-1)/(totalImgs-1);
			var left = min + (width-handleWidth+1)*normalized; 
			$('.tour-slider .handle').css('left',left+'px');
		}
		this.setSlider = function(val){
			val=(val)?(val):(0);
			var externoShift = $('.tour-slider .externo').offset().left-$('.tour-slider').offset().left;
			var handleShift = -32+handleWidth/2+2;
			var width = $('.tour-slider .externo').width();
			var min = externoShift+handleShift;
			var normalized = (this.currentIdx+val-1)/(totalImgs-1);
			var left = min + (width-handleWidth)*normalized; 
			$('.tour-slider .handle').css('left',left+'px');
		}
		this.stop = function(){
			$('.tour_principal').addClass('onMiddle');
			$('.tour_sequence').removeClass('onMiddle');
			$('.tour-slider').removeClass('show-slider');
			$('#tour_aventura_sequence').removeClass('from-side');
			$('#tour_trabalho_sequence').removeClass('from-side');
			this.currentCar = null;
		}
		this.stopCube = function(){
			//this.resetExtern();
			this.goToExtern();
			//window.cubeManager.setActive(false);
		}
	}
	var TourMobileManager = function(){
		this.goToAventura = function(){
			$('.tour_mobile .mobile-externo-trabalho').css('display','none');
			$('.tour_mobile .mobile-externo-aventura').css('display','inline');
			$('.tour_mobile .mobile-arrow-text.left-mobile').css('display','inline');
			$('.tour_mobile .mobile-arrow-text.right-mobile').css('display','none');
			$('.tour_mobile .left-arrow').css('display','inline');
			$('.tour_mobile .right-arrow').css('display','none');
		}
		this.goToTrabalho = function(){
			$('.tour_mobile .mobile-externo-trabalho').css('display','inline');
			$('.tour_mobile .mobile-externo-aventura').css('display','none');
			$('.tour_mobile .mobile-arrow-text.left-mobile').css('display','none');
			$('.tour_mobile .mobile-arrow-text.right-mobile').css('display','inline');
			$('.tour_mobile .left-arrow').css('display','none');
			$('.tour_mobile .right-arrow').css('display','inline');
		}
		this.goToIntern = function(car){
			this.currentCar = car;
			if(ambient == Ambient.Extern){
				$('.mobile-rotate-fix').css('display','none');
				ambient = Ambient.Intern;
				if(!window.cubeManager.isActive()){
					window.cubeManager.setActive(true);
				}
				if(this.currentCar == window.tourManager.Car.Aventura){
					window.cubeManager.setCubeName('saveiro_aventura_interno');
					$('#saveiro_aventura_interno').css('display','inline');
				}else{
					window.cubeManager.setCubeName('saveiro_trabalho_interno');
					$('#saveiro_trabalho_interno').css('display','inline');
				}
			}
		}
		this.goToExtern = function(){
			if(ambient == Ambient.Intern){
				$('.mobile-rotate-fix').css('display','inline');
				ambient = Ambient.Extern;
				window.cubeManager.setActive(false);
				$('#saveiro-trabalho-ie-interno').css('display','none');
				$('#saveiro-aventura-ie-interno').css('display','none');
			}
		}
	}
	var tourManager = new TourManager();
	window.tourManager = tourManager;
	var tourMobileManager = new TourMobileManager();
	window.tourMobileManager = tourMobileManager;
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		ambient = Ambient.Extern;
	}
});	


$(window).resize(function() {
	if(window.tourManager.currentCar!=null){
		tourManager.setCarContainer(window.tourManager.currentIdx/75);
		if(isie()){
			tourManager.setIeContainer();	
		}
	}
});