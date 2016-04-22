$(document).ready(function() {
	var Bandwidth = {"Low":0,"High":1,"LimitValue":20}
	var Size = {"Micro":0,"Small":1,"Medium":2,"Large":3}
	var LoadState = {"StandBy":0,"Loading":1,"SmartyLoading":2}
	var ChangeStage = {"Prev":0,"Next":1,"Small":2,"Medium":3,"Large":4,"Any":5}
	var ImagePathProperties = function(){
		//var commun_path = 'http://glasstecnologia.com.br/saveiro_remote/';
		var commun_path = 'img/';
		//var commun_path = 'http://saveiro-new-qas.ageriservicos.com.br/img/';
		
		/*
		this.getFolder = function(band,size){
			switch(size){
				case Size.Micro:
					if(band == Bandwidth.Low) return commun_path+'low/micro/';
					if(band == Bandwidth.High) return commun_path+'high/micro/';
					break;
				case Size.Small:
					if(band == Bandwidth.Low) return commun_path+'low/small/';
					if(band == Bandwidth.High) return commun_path+'high/small/';
					break;
				case Size.Medium:
					if(band == Bandwidth.Low) return commun_path+'low/medium/';
					if(band == Bandwidth.High) return commun_path+'high/medium/';
					break;
				case Size.Large:
					if(band == Bandwidth.Low) return commun_path+'low/large/';
					if(band == Bandwidth.High) return commun_path+'high/large/';
					break;
			}
		}
		*/
		this.getFolder = function(band,size){
			switch(size){
				case Size.Micro:
					if(band == Bandwidth.Low) return commun_path+'micro/';
					if(band == Bandwidth.High) return commun_path+'micro/';
					break;
				case Size.Small:
					if(band == Bandwidth.Low) return commun_path+'small/';
					if(band == Bandwidth.High) return commun_path+'small/';
					break;
				case Size.Medium:
					if(band == Bandwidth.Low) return commun_path+'medium/';
					if(band == Bandwidth.High) return commun_path+'medium/';
					break;
				case Size.Large:
					if(band == Bandwidth.Low) return commun_path+'large/';
					if(band == Bandwidth.High) return commun_path+'large/';
					break;
			}
		}
	}
	var UserProperties = function(){
		this.connectionSpeed = null;
		this.refreshFactor = 0.3;
		this.refreshSpeed = function(speed){
			if(speed < 1000){
				if(this.connectionSpeed == null){this.connectionSpeed = speed;}
				else{this.connectionSpeed = this.refreshFactor*speed + (1-this.refreshFactor)*this.connectionSpeed;}
			}
			if(this.connectionSpeed > Bandwidth.LimitValue){banddwidth = Bandwidth.High;}
			else{bandwidth = Bandwidth.Low;}
			if(this.connectionSpeed == null){bandwidth = Bandwidth.High;}
			//console.log("Current speed: " + this.connectionSpeed);
			//console.log("Current band: " + bandwidth);
		}
	}
	var ImageLoader = function(){
		this.ChangeStage = ChangeStage;
		this.microStages = [];
		this.smallStages = [];
		this.mediumStages = [];
		this.largeStages = [];
		this.currentStages;
		this.onLoading = false;
		var loadClassName = "load";
		//Stage 00
		var stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){$('.main-header').addClass('show');}, 'classes':[
																		{'className':'vw-logo','imgName':'tiles.png','sizes':{'ll':140,'lm':140,'ls':140,'lmi':140,'hl':140,'hm':140,'hs':140,'hmi':140}},
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 01
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'slide1','imgName':'00_Intro_01_Colheita_Volkswagen.jpg','sizes':{'ll': 48,'lm': 36,'ls': 20,'lmi':140,'hl':224,'hm':160,'hs': 84,'hmi':140}},
																		{'className':'down-arrow','imgName':'tiles.png','sizes':{'ll':140,'lm':140,'ls':140,'lmi':140,'hl':140,'hm':140,'hs':140,'hmi':140}},
																		{'className':'letreiro .gear','imgName':'gear.png','sizes':{'ll': 48,'lm': 36,'ls': 20,'lmi':140,'hl':224,'hm':160,'hs': 84,'hmi':140}},
																		{'className':'gear_big','imgName':'gear_big.png','sizes':{'ll': 48,'lm': 36,'ls': 20,'lmi':140,'hl':224,'hm':160,'hs': 84,'hmi':140}},
																		{'className':'gear_small','imgName':'gear_small.png','sizes':{'ll': 48,'lm': 36,'ls': 20,'lmi':140,'hl':224,'hm':160,'hs': 84,'hmi':140}},
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 02
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'slide2','imgName':'00_Intro_02_Surf_Volkswagen.jpg','sizes':{'ll': 16,'lm': 12,'ls':8.0,'lmi':140,'hl': 48,'hm': 36,'hs': 20,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 03
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'black_car','imgName':'00_Intro_03_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll': 16,'lm': 12,'ls':8.0,'lmi':140,'hl': 36,'hm': 28,'hs': 16,'hmi':140}},
																		{'className':'blue_car','imgName':'00_Intro_04_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 12,'lm':8.0,'ls':8.0,'lmi':140,'hl': 32,'hm': 24,'hs': 16,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 04
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'home','imgName':'01_Home_01_Saveiros_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'basic-icon','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'home-content .car-button .plus','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'menu .item :nth-child(1)','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'premios_button','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 05
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'identidade','imgName':'02_Identidade_01_Fundo_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'identidade .car-02','imgName':'02_Identidade_02_Saveiro_Robust_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'identidade .car-03','imgName':'02_Identidade_03_Saveiro_Cross_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'identidade .car-04','imgName':'02_Identidade_04_Saveiro_Robust_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'identidade .car-05','imgName':'02_Identidade_05_Saveiro_Cross_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}}
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 06
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'fatos','imgName':'02_Identidade_01_Fundo_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .arrow','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .grid','imgName':'fatos_grid.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .frame1','imgName':'fatos_frame_1.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .frame2','imgName':'fatos_frame_2.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .frame3','imgName':'fatos_frame_3.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .frame4','imgName':'fatos_frame_4.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .frame5','imgName':'fatos_frame_5.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .suspensao .icon','imgName':'fatos_suspensao.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .desempenho .icon','imgName':'fatos_desempenho.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .abs .icon','imgName':'fatos_abs.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .hdc .icon','imgName':'fatos_hdc.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'fatos .eds .icon','imgName':'fatos_eds.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 07
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'versoes','imgName':'02_Identidade_01_Fundo_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .plus','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .arrow','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .ruler .handle','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .robust .image-car','imgName':'04_Versoes_01_Saveiro_Robust_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .trend_simples .image-car','imgName':'04_Versoes_04_Saveiro_Trend_Basica_CS_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .trend_dupla .image-car','imgName':'04_Versoes_05_Saveiro_Trend_Completa_CD_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .trend_estendida .image-car','imgName':'04_Versoes_02_Saveiro_Trend_Basica_CE_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .highline .image-car','imgName':'04_Versoes_06_Saveiro_Highline_Completa_CD_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .cross_dupla .image-car','imgName':'04_Versoes_08_Saveiro_Cross_CD_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .cross_estendida .image-car','imgName':'04_Versoes_07_Saveiro_Cross_CE_Volkswagen.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'versoes .description-container .description-switch','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'cores-simples .cores-solidas .cores-img','imgName':'cores_simples_solidas.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'cores-simples .cores-metalizadas .cores-img','imgName':'cores_simples_metalizadas.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'cores-complexas .cores-solidas .cores-img','imgName':'cores_complexas_solidas.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'cores-complexas .cores-metalizadas .cores-img','imgName':'cores_complexas_metalizadas.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'cores-complexas .cores-especiais .cores-img','imgName':'cores_complexas_especias.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car1 .image-left-car','imgName':'04_Versoes_09_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car1 .image-middle-car','imgName':'04_Versoes_10_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car1 .image-right-car','imgName':'04_Versoes_11_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car2 .image-left-car','imgName':'04_Versoes_21_Saveiro_Trend_CS_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car2 .image-middle-car','imgName':'04_Versoes_22_Saveiro_Trend_CS_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car2 .image-right-car','imgName':'04_Versoes_23_Saveiro_Trend_CS_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car3 .image-left-car','imgName':'04_Versoes_12_Saveiro_Trend_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car3 .image-middle-car','imgName':'04_Versoes_13_Saveiro_Trend_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car3 .image-right-car','imgName':'04_Versoes_14_Saveiro_Trend_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car4 .image-left-car','imgName':'04_Versoes_24_Saveiro_Trend_CE_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car4 .image-middle-car','imgName':'04_Versoes_25_Saveiro_Trend_CE_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car4 .image-right-car','imgName':'04_Versoes_26_Saveiro_Trend_CE_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car5 .image-left-car','imgName':'04_Versoes_15_Saveiro_Highline_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car5 .image-middle-car','imgName':'04_Versoes_16_Saveiro_Highline_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car5 .image-right-car','imgName':'04_Versoes_17_Saveiro_Highline_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car6 .image-left-car','imgName':'04_Versoes_29_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car6 .image-middle-car','imgName':'04_Versoes_19_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car6 .image-right-car','imgName':'04_Versoes_20_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car7 .image-left-car','imgName':'04_Versoes_18_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car7 .image-middle-car','imgName':'04_Versoes_27_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'car7 .image-right-car','imgName':'04_Versoes_28_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 08
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'tour','imgName':'05_360_01_Fundo.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'tour_left_car','imgName':'car_trabalho.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'tour_right_car','imgName':'car_aventura.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item1','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00000.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item2','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00001.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item3','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00002.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item4','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00003.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item5','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00004.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item6','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00005.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item7','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00006.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item8','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00007.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item9','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00008.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item10','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00009.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item11','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00010.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item12','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00011.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item13','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00012.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item14','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00013.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item15','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00014.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item16','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00015.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item17','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00016.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item18','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00017.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item19','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00018.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item20','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00019.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item21','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00020.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item22','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00021.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item23','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00022.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item24','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00023.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item25','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00024.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item26','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00025.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item27','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00026.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item28','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00027.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item29','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00028.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item30','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00029.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item31','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00030.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item32','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00031.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item33','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00032.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item34','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00033.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item35','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00034.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item36','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00035.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item37','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00036.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item38','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00037.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item39','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00038.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item40','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00039.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item41','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00040.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item42','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00041.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item43','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00042.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item44','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00043.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item45','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00044.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item46','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00045.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item47','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00046.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item48','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00047.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item49','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00048.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item50','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00049.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item51','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00050.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item52','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00051.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item53','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00052.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item54','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00053.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item55','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00054.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item56','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00055.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item57','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00056.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item58','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00057.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item59','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00058.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item60','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00059.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item61','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00060.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item62','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00061.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item63','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00062.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item64','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00063.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item65','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00064.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item66','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00065.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item67','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00066.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item68','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00067.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item69','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00068.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item70','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00069.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item71','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00070.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item72','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00071.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item73','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00072.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item74','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00073.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item75','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00074.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_car_item76','imgName':'05_360_02_Saveiro_Trend_Volkswagen_00075.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item1','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00000.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item2','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00001.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item3','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00002.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item4','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00003.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item5','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00004.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item6','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00005.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item7','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00006.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item8','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00007.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item9','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00008.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item10','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00009.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item11','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00010.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item12','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00011.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item13','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00012.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item14','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00013.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item15','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00014.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item16','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00015.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item17','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00016.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item18','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00017.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item19','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00018.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item20','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00019.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item21','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00020.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item22','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00021.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item23','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00022.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item24','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00023.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item25','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00024.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item26','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00025.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item27','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00026.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item28','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00027.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item29','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00028.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item30','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00029.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item31','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00030.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item32','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00031.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item33','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00032.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item34','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00033.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item35','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00034.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item36','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00035.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item37','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00036.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item38','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00037.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item39','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00038.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item40','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00039.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item41','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00040.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item42','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00041.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item43','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00042.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item44','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00043.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item45','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00044.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item46','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00045.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item47','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00046.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item48','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00047.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item49','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00048.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item50','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00049.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item51','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00050.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item52','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00051.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item53','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00052.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item54','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00053.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item55','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00054.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item56','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00055.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item57','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00056.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item58','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00057.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item59','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00058.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item60','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00059.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item61','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00060.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item62','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00061.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item63','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00062.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item64','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00063.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item65','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00064.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item66','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00065.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item67','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00066.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item68','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00067.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item69','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00068.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item70','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00069.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item71','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00070.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item72','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00071.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item73','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00072.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item74','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00073.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item75','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00074.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_car_item76','imgName':'05_360_03_Saveiro_Cross_Volkswagen_00075.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'tour_handle_sequence','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'tour-slider .handle','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 09
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		
																		{'className':'tour_interno_container .close','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_interno .cube .back','imgName':'05_360_04_Saveiro_Cross_Volkswagen_Rear.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_interno .cube .front','imgName':'05_360_04_Saveiro_Cross_Volkswagen_Front.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_interno .cube .right','imgName':'05_360_04_Saveiro_Cross_Volkswagen_Right.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_interno .cube .left','imgName':'05_360_04_Saveiro_Cross_Volkswagen_Left.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_interno .cube .top','imgName':'05_360_04_Saveiro_Cross_Volkswagen_Top.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'aventura_interno .cube .bottom','imgName':'05_360_04_Saveiro_Cross_Volkswagen_Down.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_interno .cube .back','imgName':'05_360_05_Saveiro_Trend_Volkswagen_Rear.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_interno .cube .front','imgName':'05_360_05_Saveiro_Trend_Volkswagen_Front.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_interno .cube .right','imgName':'05_360_05_Saveiro_Trend_Volkswagen_Right.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_interno .cube .left','imgName':'05_360_05_Saveiro_Trend_Volkswagen_Left.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_interno .cube .top','imgName':'05_360_05_Saveiro_Trend_Volkswagen_Top.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'trabalho_interno .cube .bottom','imgName':'05_360_05_Saveiro_Trend_Volkswagen_Down.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 10
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'galeria','imgName':'02_Identidade_01_Fundo_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'header .wrap .tab.active','imgName':'fill.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'lightbox .wrap .close','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho1','imgName':'thumb/06_Galeria_01_Trabalho_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho2','imgName':'thumb/06_Galeria_02_Trabalho_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho3','imgName':'thumb/06_Galeria_03_Trabalho_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho4','imgName':'thumb/06_Galeria_04_Trabalho_Saveiro_Robust_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho5','imgName':'thumb/06_Galeria_05_Trabalho_Saveiro_Trend_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho6','imgName':'thumb/06_Galeria_06_Trabalho_Saveiro_Trend_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho7','imgName':'thumb/06_Galeria_07_Trabalho_Saveiro_Trend_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho8','imgName':'thumb/06_Galeria_08_Trabalho_Saveiro_Trend_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho9','imgName':'thumb/06_Galeria_09_Trabalho_Saveiro_Highline_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho10','imgName':'thumb/06_Galeria_10_Trabalho_Saveiro_Highline_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho11','imgName':'thumb/06_Galeria_11_Trabalho_Saveiro_Highline_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.trabalho12','imgName':'thumb/06_Galeria_12_Trabalho_Saveiros_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura1','imgName':'thumb/06_Galeria_13_Aventura_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura2','imgName':'thumb/06_Galeria_14_Aventura_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura3','imgName':'thumb/06_Galeria_15_Aventura_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura4','imgName':'thumb/06_Galeria_16_Aventura_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura5','imgName':'thumb/06_Galeria_17_Aventura_Saveiros_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura6','imgName':'thumb/06_Galeria_18_Aventura_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura7','imgName':'thumb/06_Galeria_19_Aventura_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura8','imgName':'thumb/06_Galeria_20_Aventura_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura9','imgName':'thumb/06_Galeria_21_Aventura_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura10','imgName':'thumb/06_Galeria_22_Aventura_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura11','imgName':'thumb/06_Galeria_23_Aventura_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.aventura12','imgName':'thumb/06_Galeria_24_Aventura_Saveiro_Cross_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios1','imgName':'thumb/06_Galeria_25_Chaves_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios2','imgName':'thumb/06_Galeria_26_Organizador_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios3','imgName':'thumb/06_Galeria_27_Cabo_USB_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios4','imgName':'thumb/06_Galeria_28_Tapete_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios5','imgName':'thumb/06_Galeria_29_Tapete_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios6','imgName':'thumb/06_Galeria_30_Rack_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios7','imgName':'thumb/06_Galeria_31_Rack_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios8','imgName':'thumb/06_Galeria_32_Soleira_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios9','imgName':'thumb/06_Galeria_33_Tampinhas_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios10','imgName':'thumb/06_Galeria_34_Capota_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios11','imgName':'thumb/06_Galeria_35_Alarme_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios12','imgName':'thumb/06_Galeria_36_AutoFalantes_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios13','imgName':'thumb/06_Galeria_37_Bagageiro_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios14','imgName':'thumb/06_Galeria_38_Calha_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios15','imgName':'thumb/06_Galeria_39_Cooler_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios16','imgName':'thumb/06_Galeria_40_Pedais_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios17','imgName':'thumb/06_Galeria_41_Banco_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'gallery .item.acessorios18','imgName':'thumb/06_Galeria_42_Roda_Saveiro_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},

																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		
		//Stage 11
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'robust-slide','imgName':'robust_screen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'robust-slide .robust-name','imgName':'saveiro_robust_name.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'robust-slide .back','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'cross-slide','imgName':'cross_screen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'cross-slide .cross-name','imgName':'saveiro_cross_name.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'cross-slide .back','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		//Stage 12
		stages = new StagesCreator({'imageLoader':this, 'readyFunction':function(){}, 'classes':[
																		{'className':'premios','imgName':'02_Identidade_01_Fundo_Volkswagen.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'premios .back','imgName':'tiles.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'premio-auto .left-image','imgName':'premios_auto_esporte.jpg','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'premio-quatro .left-image','imgName':'premios_quatro_rodas.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'premio-auto .tabela','imgName':'tabela_auto_esporte.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																		{'className':'premio-quatro .tabela','imgName':'tabela_quatro_rodas.png','sizes':{'ll': 56,'lm': 40,'ls': 20,'lmi':140,'hl':232,'hm':160,'hs': 80,'hmi':140}},
																	]});
		this.microStages.push(stages.micro);this.smallStages.push(stages.small);this.mediumStages.push(stages.medium);this.largeStages.push(stages.large);
		
		switch(size){
			case Size.Micro:
				this.currentStages = this.microStages;
				break;
			case Size.Small:
				this.currentStages = this.smallStages;
				break;
			case Size.Medium:
				this.currentStages = this.mediumStages;
				break;
			case Size.Large:
				this.currentStages = this.largeStages;
				break;
		}
		this.currentStage = this.currentStages[0];
		this.currentLoadingStage = this.currentStages[0];
		this.onWaitStage = null;
		this.currentLoadingStage.load();
		this.askToChangeStage = function(changeStage,idx){
			switch(changeStage){
				case ChangeStage.Prev:
						var idx = this.currentStage.idx;
						if(idx > 0){
							if(this.currentStages[idx-1].ready){
								this.currentStage = this.currentStages[idx-1];
								if(loadState == LoadState.StandBy){
									loadState = LoadState.SmartyLoading;
									imageLoader.loadNextStage();
								}
								window.stateMachine.stageLoaded();
								this.printNewStage(this.currentStage.idx);
							}else{
								if(this.onWaitStage == null){
									this.onWaitStage = this.currentStages[idx-1];
									$('.'+loadClassName).removeClass('hide-load');
									this.onLoading = true;
									//console.log("Waiting for stage...");
								}
							}
						}
					break;
				case ChangeStage.Next:
						var idx = this.currentStage.idx;
						if(idx + 1 < this.currentStages.length){
							if(this.currentStages[idx+1].ready){
								this.currentStage = this.currentStages[idx+1];
								if(loadState == LoadState.StandBy){
									loadState = LoadState.SmartyLoading;
									imageLoader.loadNextStage();
								}
								window.stateMachine.stageLoaded();
								//console.log("%cNew "+((size==0)?('Micro'):((size==1)?('Small'):((size==2)?('Medium'):('Large'))))+" stage: "+this.currentStage.idx, 'color: #cc0');
								this.printNewStage(this.currentStage.idx);
							}else{
								if(this.onWaitStage == null){
									this.onWaitStage = this.currentStages[idx+1];
									$('.'+loadClassName).removeClass('hide-load');
									this.onLoading = true;
									//console.log("Waiting for stage...");
								}
							}
						}
					break;
				case ChangeStage.Any:
						console.log('tentando...');
						if(idx >0 && idx < this.currentStages.length){
							if(this.currentStages[idx].ready){
								this.currentStage = this.currentStages[idx];
								if(loadState == LoadState.StandBy){
									loadState = LoadState.SmartyLoading;
									imageLoader.loadNextStage();	
								}
								window.stateMachine.stageLoaded();
								//console.log("%cNew "+((size==0)?('Micro'):((size==1)?('Small'):((size==2)?('Medium'):('Large'))))+" stage: "+this.currentStage.idx, 'color: #cc0');
								this.printNewStage(this.currentStage.idx);
							}else{
								console.log('vai esperar..');
								if(this.onWaitStage == null){
									console.log('esperando...');
									this.onWaitStage = this.currentStages[idx];
									$('.'+loadClassName).removeClass('hide-load');
									this.onLoading = true;
									//console.log("Waiting for stage...");	
								}
							}
						}
					break;
				case ChangeStage.Small:
						size = Size.Small;
						var idx = this.currentStage.idx;
						this.currentStages = this.smallStages;
						this.changeSizeStage(idx);
						this.currentStages[0].refreshImages();
					break;
				case ChangeStage.Medium:
						size = Size.Medium;
						this.currentStages = this.mediumStages;
						var idx = this.currentStage.idx;
						this.changeSizeStage(idx);
						this.currentStages[0].refreshImages();
					break;
				case ChangeStage.Large:
						size = Size.Large;
						this.currentStages = this.largeStages;
						var idx = this.currentStage.idx;
						this.changeSizeStage(idx);
						this.currentStages[0].refreshImages();
					break;
			}
			this.currentStage.refreshImages();
		}
		this.refreshImages = function(){
			for(var i = 0; i < this.currentStages.length;i++){
				this.currentStages[i].refreshImages();
			}
		}
		this.changeSizeStage = function(idx){
			if(this.currentStages[idx].ready){
				this.currentStage = this.currentStages[idx];
				window.stateMachine.stageLoaded();
				//console.log("%cNew "+((size==0)?('Micro'):((size==1)?('Small'):((size==2)?('Medium'):('Large'))))+" stage: "+this.currentStage.idx, 'color: #cc0');
				this.printNewStage(this.currentStage.idx);
			}else{
				this.onWaitStage = this.currentStages[idx];
				//$('.'+loadClassName).removeClass('hide-load');
				this.onLoading = true;
				//console.log("Waiting for resize...");
			}
			if(loadState != LoadState.Loading){
				loadState = LoadState.Loading;
				imageLoader.loadNextStage();
			}
		}
		this.unleashStage = function(){
			if(this.onWaitStage != null){
				if(this.onWaitStage.ready){
					this.currentStage = this.onWaitStage;
					this.onWaitStage = null;
					window.stateMachine.stageLoaded();
					//console.log("%cNew "+((size==0)?('Micro'):((size==1)?('Small'):((size==2)?('Medium'):('Large'))))+" stage: "+this.currentStage.idx, 'color: #cc0');
					this.printNewStage(this.currentStage.idx);
					this.currentStages[0].refreshImages();
					this.currentStage.refreshImages();
				}
			}else{
				if(loadState == LoadState.StandBy){
					var allLoaded = true;
					for(var i=0;i<imageLoader.currentStages.length;i++){
						if(!imageLoader.currentStages[i].ready){
							allLoaded = false;
						}
					}
					if(!allLoaded){
						//console.log("%cEntrando em estado morto...", 'color: #f00');
						imageLoader.loadNextStage();
					}
				}
			}
			
		}
		this.printNewStage = function(stage){
			console.log("%cNew "+((size==0)?('Micro'):((size==1)?('Small'):((size==2)?('Medium'):('Large'))))+" stage: "+stage, 'color: #cc0');
		}
		this.loadNextStage = function(){
			var idx = imageLoader.currentLoadingStage.idx;
			console.log('loading:'+ idx);
			var founded = false;
			switch(loadState){
				case LoadState.Loading:
						for(var i = 0; i < imageLoader.currentStages.length; i++){
							if(!founded){
								if(!imageLoader.currentStages[i].ready){
									imageLoader.currentLoadingStage = imageLoader.currentStages[i];
									founded = true;
								}	
							}
						}
						if(founded)imageLoader.currentLoadingStage.load();
						else{
							loadState = LoadState.SmartyLoading;
							setTimeout(function(){ imageLoader.loadNextStage();}, 0);
						}
					break;
				case LoadState.SmartyLoading:
						var idx = imageLoader.currentStage.idx;
						if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
							if(!imageLoader.smallStages[idx].ready){
								imageLoader.currentLoadingStage = imageLoader.smallStages[idx];
								founded = true;
							}
							if(!founded){
								if(!imageLoader.mediumStages[idx].ready){
									imageLoader.currentLoadingStage = imageLoader.mediumStages[idx];
									founded = true;
								}
							}
							if(!founded){
								if(!imageLoader.largeStages[idx].ready){
									imageLoader.currentLoadingStage = imageLoader.largeStages[idx];
									founded = true;
								}
							}
							if(!founded){
								loadState = LoadState.StandBy;
							}else{
								imageLoader.currentLoadingStage.load();
							}
						}else{
							loadState = LoadState.StandBy;
						}
					break;
			}
		}
	}
	var StagesCreator  = function(options){
		var microProperties = [];
		var smallProperties = [];
		var mediumProperties = [];
		var largeProperties = [];
		for(var i = 0; i < options.classes.length;i++){
			var classe = options.classes[i];
			microProperties.push(new ImageProperty({'className':classe.className,'imgName':classe.imgName, 'size':Size.Micro,'weights':{'low':classe.sizes.lmi,'high':classe.sizes.hmi}}));
			smallProperties.push(new ImageProperty({'className':classe.className,'imgName':classe.imgName, 'size':Size.Small,'weights':{'low':classe.sizes.ls,'high':classe.sizes.hs}}));
			mediumProperties.push(new ImageProperty({'className':classe.className,'imgName':classe.imgName, 'size':Size.Medium,'weights':{'low':classe.sizes.lm,'high':classe.sizes.hm}}));
			largeProperties.push(new ImageProperty({'className':classe.className,'imgName':classe.imgName, 'size':Size.Large,'weights':{'low':classe.sizes.ll,'high':classe.sizes.hl}}));
		}
		return {
				'micro':new Stage({'imageLoader':options.imageLoader, 'size':Size.Micro, 'readyFunction':options.readyFunction,'imageProperties':microProperties}),
				'small':new Stage({'imageLoader':options.imageLoader, 'size':Size.Small, 'readyFunction':options.readyFunction,'imageProperties':smallProperties}),
				'medium':new Stage({'imageLoader':options.imageLoader, 'size':Size.Medium, 'readyFunction':options.readyFunction,'imageProperties':mediumProperties}),
				'large':new Stage({'imageLoader':options.imageLoader, 'size':Size.Large, 'readyFunction':options.readyFunction,'imageProperties':largeProperties}),
			};
	}
	var Stage = function(options){
		this.ready = false;
		this.imageLoader = options.imageLoader;
		this.size = options.size;
		this.idx = this.imageLoader.largeStages.length;
		this.imageProperties = options.imageProperties;
		this.readyFunction = (options.readyFunction)?(options.readyFunction):(function(){});
		this.totalImagesLoading =  this.imageProperties.length;
		this.load = function(){
			for(var i = 0; i < this.imageProperties.length;i++){
				this.imageProperties[i].load(this);
			}
		}
		this.completeProperty = function(){
			this.totalImagesLoading--;
			if(this.totalImagesLoading==0){
				this.ready = true;
				this.readyFunction();
				//console.log('%c'+((this.size==0)?('Small'):((this.size==1)?('Medium'):('Large')))+' Stage '+this.idx+' is loaded!', 'color: #f00');
				this.imageLoader.printNewStage(this.idx);
				this.imageLoader.unleashStage();
				this.imageLoader.loadNextStage();
			}
		}
		this.refreshImages = function(){
			for(var i = 0; i < this.imageProperties.length;i++){
				this.imageProperties[i].refreshImage();
			}
		}
	}
	var ImageProperty = function(options){
		this.className = options.className;
		this.imgName = options.imgName;
		this.ready = false;
		this.highReady = false;
		this.size = options.size;
		this.weights = options.weights;
		this.lowurl = imagePathProperties.getFolder(Bandwidth.Low,this.size) + this.imgName;
		this.highurl = imagePathProperties.getFolder(Bandwidth.High,this.size) + this.imgName;
		this.load = function(stage){
			switch(bandwidth){
				case Bandwidth.Low:
					this.loadLowImage(this,stage);
					break;
				case Bandwidth.High:
					this.loadHighImage(this,stage);
					break;
			}
		}
		this.loadLowImage = function(imageProperty,stage){
			var startTime;
		    var img = new Image();
		    img.onload = function(){
		    	imageProperty.ready = true;
		    	imageProperty.refreshImage();
		        var elapsedTime = (new Date().getTime()) - startTime;
				userProperties.refreshSpeed(imageProperty.weights.low/(elapsedTime/1000));
				imageProperty.loadHighImage(imageProperty,stage);
				console.log('Load low: '+ url);
				stage.completeProperty();
		    };
		    startTime = new Date().getTime();
		    var url = imageProperty.lowurl;
		    img.src = url;
		}
		this.loadHighImage = function(imageProperty,stage){
			var startTime;
		    var img = new Image();
		    img.onload = function(){
		    	imageProperty.ready = true;
		    	imageProperty.highReady = true;
		    	imageProperty.refreshImage();
		        var elapsedTime = (new Date().getTime()) - startTime;
		        userProperties.refreshSpeed(imageProperty.weights.high/(elapsedTime/1000));
		        //console.log('Load high: '+ url);
		        stage.completeProperty();
		    };
		    startTime = new Date().getTime();
		    var url = imageProperty.highurl;
		    img.src = url;
		}
		this.refreshImage = function(){
			if(this.ready && size == this.size){
				if(this.highReady){
					//console.log(this.highurl);
					$('.'+this.className).css('background-image','url('+this.highurl+')');
				}else{
					//console.log(this.lowurl);
					$('.'+this.className).css('background-image','url('+this.lowurl+')');
				}
			}
		}
	}
	var size = (($(window).width()<960)?(Size.Small):(($(window).width()>1280)?(Size.Large):(Size.Medium)));
	
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var phisicalWidth = screen.width*window.devicePixelRatio;
		if(phisicalWidth<700){
			size = Size.Micro;
		}else if(phisicalWidth<960){
			size = Size.Small;
		}else{
			size = Size.Medium;
		}
	}

	var bandwidth = Bandwidth.High;
	var imagePathProperties = new ImagePathProperties();
	var userProperties = new UserProperties();
	var imageLoader = new ImageLoader();
	window.imageLoader = imageLoader;
	var loadState = LoadState.Loading;

	if (window.matchMedia) {
	  var mqSmall = window.matchMedia("(min-width: 960px)");

	  mqSmall.addListener(function(mq){
	  	if (mq.matches) {
	  		imageLoader.askToChangeStage(ChangeStage.Medium);
	  	}else{
	  		imageLoader.askToChangeStage(ChangeStage.Small);
	  	}
	  	window.versoesManager.sizeWasChanged();
	  });
	  var mqLarge = window.matchMedia("(min-width: 1280px)");
	  mqLarge.addListener(function(mq){
	  	if (mq.matches) {
	  		imageLoader.askToChangeStage(ChangeStage.Large);
	  	}else{
	  		imageLoader.askToChangeStage(ChangeStage.Medium);
	  	}
	  	window.versoesManager.sizeWasChanged();
	  });
	}


	setInterval(function(){ imageLoader.unleashStage(); }, 1000);

	$(function () {
	  $(document).keyup(function (e) {
	     //alert(e.keyCode);
	  });
	});
});