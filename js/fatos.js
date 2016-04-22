
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
			if(currentIdx > 0) tagManager.viuFatos(currentIdx);
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
		}
		this.stop = function(){
			this.goToIdx(0);
		}
		
	}
	var fatosManager = new FatosManager();
	window.fatosManager = fatosManager;
});