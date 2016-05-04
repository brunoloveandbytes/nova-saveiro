
$(document).ready(function() {

	var FatosManager = function(){
		var currentIdx = 0;
		var maxIdx = 5;
		this.getCurrentIdx = function(){
			return currentIdx;
		}
		this.goToIdx = function(idx){
			$('.fatos .frame'+currentIdx).css('left','100%');
			currentIdx = idx;
			$('.fatos .frame'+currentIdx).css('left','0%');
			this.setArrows();
			if(currentIdx > 0)tagManager.viuFatos(currentIdx);
		}
		this.goToRight = function(){
			$('.fatos .frame'+currentIdx).css('left','100%');
			currentIdx++;
			if(currentIdx > maxIdx){
				currentIdx = 0;
			}
			$('.fatos .frame'+currentIdx).css('left','0%');
			this.setArrows();
			if(currentIdx > 0) tagManager.viuFatos(currentIdx);
		}
		this.goToLeft = function(){
			$('.fatos .frame'+currentIdx).css('left','100%');
			currentIdx--;
			if(currentIdx < 0){
				currentIdx = maxIdx;
			}
			$('.fatos .frame'+currentIdx).css('left','0%');
			this.setArrows();
			if(currentIdx > 0) tagManager.viuFatos(currentIdx);
		}
		this.setArrows = function(){

			if(currentIdx == 0){
				$('.fatos .left-arrow').css('display','none');
			}else{
				$('.fatos .left-arrow').css('display','inline');
			}
			if(currentIdx == 5){
				$('.fatos .right-arrow').css('display','none');
			}else{
				$('.fatos .right-arrow').css('display','inline');
			}

			if(currentIdx == 0 || currentIdx == 5){
				$('.down-arrow').addClass('show');
			}else{
				$('.down-arrow').removeClass('show');
			}

			if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
				if(currentIdx == 1){
					$('.fatos .left-arrow').css('display','none');
				}else{
					$('.fatos .left-arrow').css('display','inline');
				}
			}			

		}
		this.stop = function(){
			if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
				this.goToIdx(1);
			}else{
				this.goToIdx(0);		
			}
		}
		this.start = function(){
			if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
				this.goToIdx(1);
				$('.down-arrow').removeClass('show');
			}else{
				this.goToIdx(0);
				$('.down-arrow').addClass('show');		
			}
		}
		
	}
	var fatosManager = new FatosManager();
	window.fatosManager = fatosManager;
});