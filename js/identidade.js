$(document).ready(function(){var i=null,n=function(){var n=1;this.start=function(){null==i&&(i=setInterval(function(){window.identidadeManager.changeImage()},1500))},this.stopAnimation=function(){clearInterval(i),i=null},this.changeImage=function(){$(".identidade .car-0"+(n+1)).css("left","100%"),n++,n>4&&(n=1),$(".identidade .car-0"+(n+1)).css("left","0%")},this.stop=function(){this.stopAnimation(),this.closeDescription()},this.closeDescription=function(){$(".identidade .description").removeClass("show"),$(".identidade .close").removeClass("show")},this.showDescription=function(){$(".identidade .description").addClass("show"),$(".identidade .close").addClass("show")}},e=new n;window.identidadeManager=e});