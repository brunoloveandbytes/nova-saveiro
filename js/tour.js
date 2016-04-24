
$(document).ready(function() {
	var mousedown = 0;
	var quickFix = 42;
	var totalImgs = 76;
	var handleWidth = 26;
	var lastMousePosition = {
	  x: null
	};
	var drag = {
		x: 0,
		verify: function(){
			quickFix = $('.tour-slider .externo').offset().left-$('.tour-slider').offset().left-18;
			var normalized = (this.x - $('.tour-slider .externo').offset().left)/$('.tour-slider .externo').width();
			if(normalized<0)normalized=0;
			if(normalized>1)normalized=1;
			$('.tour-slider .handle').css('left',quickFix + normalized*($('.tour-slider .externo').width()-handleWidth)+'px');
			var currentIdx = parseInt(totalImgs*normalized+1);
			tourManager.setIndex(currentIdx);
		},
		restart: function(){
			this.x = $('.tour-slider .externo').offset().left;
			this.verify();
		}
	}

	$('.tour-slider .handle').mousedown(function(){
		mousedown=1;
	});
	

	$('.tour-slider').mousedown(function(){
		mousedown=1;
	});

	$('.tour-slider .handle').mouseup(function(){
		mousedown=0;
		lastMousePosition.x = null;
	});

	$('.tour-vinheta').mousemove(function(e){
		if(mousedown > 0){
		  if(lastMousePosition.x != null){
		    drag.x += e.clientX - lastMousePosition.x;
		    drag.verify();
		  }else{
		  	drag.x = e.clientX;
		  }
		  lastMousePosition.x = e.clientX;
		}
	});
	$('.tour-slider').mousemove(function(e){
		if(mousedown > 0){
		  if(lastMousePosition.x != null){
		    drag.x += e.clientX - lastMousePosition.x;
		    drag.verify();
		  }else{
		  	drag.x = e.clientX;
		  }
		  lastMousePosition.x = e.clientX;
		}
	});


	$('.tour-vinheta').mouseleave(function() {
	 	mousedown=0;
	 	lastMousePosition.x = null;
	});
	
	$('.tour-slider').mouseup(function(){
		mousedown=0;
		lastMousePosition.x = null;
	});

	var TourManager = function(){
		this.Car = {Aventura:0,Trabalho:1};
		this.currentCar;
		this.currentIdx = 1;
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
			setTimeout(function(){ this.restartSlider(); }, 1000);
			
		}
		this.setIndex = function(idx){
			if(idx>totalImgs){
				if(!window.cubeManager.isActive()){
					window.cubeManager.setActive(true);
				}
				if(this.currentCar == this.Car.Aventura){
					window.cubeManager.setCubeName('saveiro_aventura_interno');
					$('#saveiro_aventura_interno').css('display','inline');
				}else{
					window.cubeManager.setCubeName('saveiro_trabalho_interno');
					$('#saveiro_trabalho_interno').css('display','inline');
				}
			}else{
				if(window.cubeManager.isActive()){
					window.cubeManager.setActive(false);
					if(this.currentCar == this.Car.Aventura){
						window.cubeManager.setCubeName('saveiro_aventura_interno');
						$('#saveiro_aventura_interno').css('display','none');
					}else{
						window.cubeManager.setCubeName('saveiro_trabalho_interno');
						$('#saveiro_trabalho_interno').css('display','none');
					}
				}
				if(this.currentCar == this.Car.Aventura){
					$('.aventura_car_item'+this.currentIdx).css('left','100%');
				}else{
					$('.trabalho_car_item'+this.currentIdx).css('left','100%');
				}
				this.currentIdx = idx;
				if(this.currentCar == this.Car.Aventura){
					$('.aventura_car_item'+this.currentIdx).css('left','0%');
				}else{
					$('.trabalho_car_item'+this.currentIdx).css('left','0%');
				}	
			}

			if(idx<=1){
				//this.backFromSequence(this.currentCar);
				//this.restartSlider();
			}
		}
		this.restartSlider = function(){
			drag.restart();
		}
		this.stopCube = function(){
			this.restartSlider();
			window.cubeManager.setActive(false);
			$('#saveiro_trabalho_interno').css('display','none');
			$('#saveiro_aventura_interno').css('display','none');
		}
		this.stop = function(){
			$('.tour_principal').addClass('onMiddle');
			$('.tour_sequence').removeClass('onMiddle');
			$('.tour-slider').removeClass('show-slider');
			$('#tour_aventura_sequence').removeClass('from-side');
			$('#tour_trabalho_sequence').removeClass('from-side');
		}
	}
	var tourManager = new TourManager();
	window.tourManager = tourManager;
});