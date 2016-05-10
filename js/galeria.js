
$(document).ready(function() {

	var GalleryManager = function(){
		this.stop = function(){
			/*
			var $header  = $("#vw-tabs .header");
			var $content  = $("#vw-tabs .content");
			//alert($header.length);
			$header.find('.tab').removeClass('active');
			$header.find('.tab:nth-child(' + tab + ')').addClass('active');
			$content.children('.wrap').removeClass('visible');
			$content.children('.wrap:nth-child(' + tab + ')').addClass('visible');
			*/
		}
		this.setTab = function(){
			function setTab(tab){
				/*
				if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
					$('.up-arrow').addClass('show');
				}else{
					if(tab == 3){
						$('.up-arrow').addClass('show');
					}else{
						$('.up-arrow').removeClass('show');
					}
				}
				*/

				

				$('.gallery > .item').animateOneByOne({css:{ opacity:'0' }, duration: 0, interval: 0});
				$content.children('.wrap').removeClass('visible');
				$content.children('.wrap:nth-child(' + tab + ')').addClass('visible');
				$header.find('.tab').removeClass('active');
				$header.find('.tab:nth-child(' + tab + ')').addClass('active');
				$('.visible .gallery > .item').css('opacity',1);
				// $('.visible .gallery > .item').animateOneByOne({
			 //        css:{ opacity:'1' },
		  //           duration: 500,
		  //           interval:-440
			 //    });
			}
		}
	}
	var galleryManager = new GalleryManager();
	window.galleryManager = galleryManager;
});


/*
 * Jquery AnimateOneByOne
 * Author:             Devlart (Louis Frayard)
 * Date:               13-07-12
 * URL:                http://www.devlart.fr
 * Version:            1.1
 */
$.fn.animateOneByOne = function(params) {
    params = $.extend( {css:'', duration: 700, interval:300, order:'ASC', callback:''}, params);
    var elements = null;
    if(params.order == 'ASC'){ elements = $(this) }
    else{ elements = $(this).get().reverse()}
    var count = $(this).length - 1;
    $(elements).each(function(id){
        setTimeout(function(element){
            if(id == count){ $(element).animate(params.css,params.duration,params.callback)}
            else{ $(element).animate(params.css,params.duration)}
     }, id * (params.interval + params.duration), $(this));
   });
};

// TABS
$.fn.tabs = function(options){
	var $this = $(this);
	var n_tabs = [];
	var html = '';
	var settings = $.extend({
            tab: 1
        }, options );

	
	// CONSTRUCTION - DON'T CHANGE
	$this.children('.tab').each(function(e){ 
		if($(this).attr("data-tab")!="acessórios" || !((isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch))){
			n_tabs.push($(this).attr("data-tab"));	
		}
	});
	html += '<div class="header upper head_extrabold">galeria<div class="wrap text_bold">';
	for(n=0;n<n_tabs.length;n++){ html += '<div class="tab spaced">' + n_tabs[n] + '</div>' }
	html += '</div></div>';
	if(n_tabs.length == 0){
		html += '<div class="content scrollable" data-limit="600">';	
	}
	html += '<div class="content scrollable" data-limit="1000">';	

	for(n=1;n<=n_tabs.length;n++){ html += '<div class="wrap">' + $this.children('.tab:nth-child('+n+')').html() + '</div>' }
	html += '</div>';
	$this.html('').html(html);

	// BIND EVENTS
	var $content = $this.children(".content");
	var $header  = $this.children(".header");
	var $tab  = $this.children(".header").find(".tab");

	var lastYPosition = null;
	var scrollTop = 0;
	$('body').on('touchmove', '.content', function(e) {

		$elem = $(event.target).closest('.content');
		var limit = parseInt($elem.attr('data-limit'));
		if(lastYPosition != null){
			var parentTop = $elem.parent().offset().top;
			var parentHeight = $elem.parent().height();
			var top = $elem.offset().top;
			var height = $elem.height();
			var newValue = top - parentTop+e.originalEvent.touches[0].pageY-lastYPosition;
			
			scrollTop = $elem.scrollTop();

			scrollTop += parseInt(lastYPosition-e.originalEvent.touches[0].pageY);
		
			if(scrollTop < 0) scrollTop = 0;
			if(scrollTop > limit) scrollTop = limit;

			//console.log(scrollTop);
			$elem.scrollTop(scrollTop);
			//$elem.css('top',newValue+'px');
		}else{

		}
		lastYPosition = e.originalEvent.touches[0].pageY;
	});

	$('body').on('touchend', '.content', function(e){
		lastYPosition=null;
	});

	function setTab(tab){
		if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
			if(window.stateMachine){
				//if(window.stateMachine.state == "galeria"){
					$('.up-arrow').addClass('show');		
				//}
			}
		}else{
			if(tab == 3){
				$('.up-arrow').addClass('show');
			}else{
				$('.up-arrow').removeClass('show');
			}
		}

		$('.gallery > .item').animateOneByOne({css:{ opacity:'0' }, duration: 0, interval: 0});
		$content.children('.wrap').removeClass('visible');
		$content.children('.wrap:nth-child(' + tab + ')').addClass('visible');
		$header.find('.tab').removeClass('active');
		$header.find('.tab:nth-child(' + tab + ')').addClass('active');
		$('.visible .gallery > .item').animateOneByOne({
	        css:{ opacity:'1' },
            duration: 500,
            interval:-440
	    });
	}

	$tab.on("click", function(){ setTab($(this).index()+1) });

	setTab(options.tab);

	return this;
};

$('#vw-tabs').tabs({tab:1});
var currentGalleryIdx= 0;
var currentGalleryParent = null;
// GALLERY
$.fn.lightbox = function(){
	var html = '';
	var dataImage = $(this).attr('data-image');
	currentGalleryIdx = $(this).index();
	currentGalleryParent = $(this).parent();
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		html += '<div class="lightbox lightbox_bg"></div>';
		html += '<div class="wrap"><div class="arrow left-arrow"></div><div class="close"></div><div class="arrow right-arrow"></div></div>';
		$('.up-arrow').removeClass('show');
	}else{
		html += '<div class="lightbox lightbox_bg">';
		html += '<div class="wrap"><div class="arrow left-arrow"></div><div class="close"></div><div class="arrow right-arrow"></div></div>';
		html += '</div>';
	}

	$('#vw-tabs').parent().append(html);

	$(".lightbox").css("background-image", "url(" + dataImage + ")");

	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		$('.lightbox').translateWithGyro({'width':1920,'height':1200});
	}

	// BIND EVENTS
	$('.lightbox, .wrap .close').on("click", function(e){
		if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
			if($(e.target).is('div.close')){
				$(".lightbox").remove();
				$(".sub-slide > .wrap").remove();
				$('.up-arrow').addClass('show');
			}	
		}else{
			if($(e.target).is('div.lightbox') || $(e.target).is('div.close')){
				$(".lightbox").remove();
				$(".sub-slide > .wrap").remove();
			}
		}
		
	});

	$('.wrap .left-arrow').on("click", function(e){
		var total = currentGalleryParent.children().length;
		currentGalleryIdx--;
		if(currentGalleryIdx < 0){
			currentGalleryIdx = total - 1;
		}
		var imageName = $(currentGalleryParent.children()[currentGalleryIdx]).attr('data-image');
		$(".lightbox").css("background-image", "url(" + imageName + ")");
	});

	$('.wrap .right-arrow').on("click", function(e){
		var total = currentGalleryParent.children().length;
		currentGalleryIdx++;
		if(currentGalleryIdx >= total){
			currentGalleryIdx = 0;
		}
		var imageName = $(currentGalleryParent.children()[currentGalleryIdx]).attr('data-image');
		$(".lightbox").css("background-image", "url(" + imageName + ")");
		
	});

	return this;
};

$(".gallery .item:not(.item_small)").on("click", function(){ 
	//currentView = null;
	$(this).lightbox();
	if($(this).attr('data-image').search('trabalho')!=-1){
		window.tagManager.viuFotos("TRABALHO","TRABALHO",$(this).index()+1);
	}else{
		window.tagManager.viuFotos("AVENTURA","AVENTURA",$(this).index()+1);
	}
});

$(window).resize(function(){
	if($("#light_cube").length > 0){
		$(".lightbox").remove();
		var marginBottom = Math.ceil(parseFloat($(currentView).css("marginBottom").replace("px","")));
	    var marginLeft = Math.ceil(parseFloat($(currentView).css("marginLeft").replace("px","")));
		var x = $(currentView).position().left + marginLeft;
		var y = $(currentView).position().top;
		var width = $(currentView).outerWidth();
		var height = $(currentView).outerHeight();
		var wrap_width = $(currentView).parent().outerWidth();
		var wrap_height = $(currentView).parent().outerHeight();
		var inner_width = $(currentView).innerWidth();
		var inner_height = $(currentView).innerHeight();
		var descColor = $(currentView).attr("data-desc-color");
		var quant_x = wrap_width/width;
		var quant_y = wrap_height/height;
		if(marginLeft==0){ marginLeft = Math.ceil(parseFloat($(currentView).next().css("marginLeft").replace("px",""))) }

		var cubeWidth  = (inner_width*2) + marginLeft;
		var cubeHeight = (inner_height*2) + marginBottom;


		if($("#light_cube").length==0){
			$(".item_small").parent().append('<span id="light_cube" style="display:block;position:absolute;padding:5px;z-index:10"><div class="close_cube"></div><div class="desc_cube upper"></div></span>');
		}

		$("#light_cube").css('background-image','url(' + $(currentView).attr('data-image') + ')');
		$(".desc_cube").html($(this).attr("data-description"));
		if(typeof descColor=="undefined"){ descColor = "000" }

		if((x+width)>(wrap_width-(width/2))){  x -= (width + marginLeft) }  // VERIFICA LEFT
		if((y+height)>(wrap_height-(height*0.2))){ y -= (height + marginBottom) } // VERIFICA HEIGHT

		$('#light_cube').css({ top: y, left: x, width: cubeWidth, height: cubeHeight, color: "#"+descColor });

		$('.close_cube').on("click", function(){ $('#light_cube').remove() });
	}
});

var currentView = null;
$(".gallery .item_small").on("click", function(){
	window.tagManager.viuFotos('ACESSORIOS','ACESSORIO',$(this).index()+1);
	currentView = this;
	var marginBottom = Math.ceil(parseFloat($(this).css("marginBottom").replace("px","")));
	var marginLeft = Math.ceil(parseFloat($(this).css("marginLeft").replace("px","")));
	var x = $(this).position().left + marginLeft;
	var y = $(this).position().top;
	var width = $(this).outerWidth();
	var height = $(this).outerHeight();
	var wrap_width = $(this).parent().outerWidth();
	var wrap_height = $(this).parent().outerHeight();
	var inner_width = $(this).innerWidth();
	var inner_height = $(this).innerHeight();

	var descColor = $(this).attr("data-desc-color");

	var quant_x = wrap_width/width;
	var quant_y = wrap_height/height;

	if(marginLeft==0){ marginLeft = Math.ceil(parseFloat($(this).next().css("marginLeft").replace("px",""))) }

	var cubeWidth  = (inner_width*2) + marginLeft;
	var cubeHeight = (inner_height*2) + marginBottom;


	if($("#light_cube").length==0){
		$(".item_small").parent().append('<span id="light_cube" style="display:block;position:absolute;padding:5px;z-index:10"><div class="close_cube"></div><div class="desc_cube upper"></div></span>');
	}

	$("#light_cube").css('background-image','url(' + $(this).attr('data-image') + ')');
	$(".desc_cube").html($(this).attr("data-description"));
	if(typeof descColor=="undefined"){ descColor = "000" }

	if((x+width)>(wrap_width-(width/2))){  x -= (width + marginLeft) }  // VERIFICA LEFT
	if((y+height)>(wrap_height-(height*0.2))){ y -= (height + marginBottom) } // VERIFICA HEIGHT

	$('#light_cube').css({ top: y, left: x, width: cubeWidth, height: cubeHeight, color: "#"+descColor });

	$('.close_cube').on("click", function(){ $('#light_cube').remove() });
});