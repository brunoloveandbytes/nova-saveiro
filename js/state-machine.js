$(document).ready(function() {
	var oldIE = $('html').is('.lt-ie10');
	var StateMachine = function(){
		var Trigger = {
			Next: 0,
			Previews: 1,
			Identidade: 2,
			Galeria: 3,
			Home:4,
			Tour:5,
			Fatos:6,
			Versoes:7,
			Entrance:8,
			Premios:9,
			Robust:10,
			Cross:11
		}
		var loadClassName = "load";
		this.Trigger = Trigger;
		this.animationCounter = 0;
		this.pendentState;
		this.onTransition = false;
		this.pendentTransition;
		this.currentTransition;
		this.lastState;
		this.states = [];
		this.states.push(new State({
										"stateMachine":this,
										"name":"empty",
										"stage":0,
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																	$('#slide1').addClass('onTop');
																	$('#slide1').addClass('showWord');
																	$('#slide1').addClass('show');
																	$('#slide2').addClass('onTop');
																	$('#slide2').addClass('showWord');
																	$('#slide3').addClass('onMiddle');
																	$('#rotational').addClass('upCar');
																	$('#rotational').addClass('rotate');
																	$('#blue_car').removeClass('zoomCar');
																},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'premios_button','className':'show','classTransitionName':'default-transition','add':true}),
																	new AnimatedProperty({'idName':'home','className':'show','classTransitionName':'default-transition','add':true}),
																	new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','add':true, 'duration':500}),
																	new AnimatedProperty({'idName':'premios_button','className':'show','classTransitionName':'default-transition','add':true}),
																]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"startFunction":function(){
																	$('#identidade').addClass('hided');
																	$('#identidade').addClass('onMiddle');
																	$('#identidade').removeClass('onBottom');
																},
																"endFunction":function(){
																	$('#slide1').addClass('onTop');
																	$('#slide1').addClass('showWord');
																	$('#slide1').addClass('show');
																	$('#slide2').addClass('onTop');
																	$('#slide2').addClass('showWord');
																	$('#slide3').addClass('onMiddle');
																	$('#rotational').addClass('upCar');
																	$('#rotational').addClass('rotate');
																	$('#blue_car').removeClass('zoomCar');
																	$('#home').addClass('show');
																	$('#menu-bar').addClass('show');
																},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','add':true, 'duration':500}),
																	new AnimatedProperty({'idName':'identidade','className':'hided','classTransitionName':'opacity-transition','remove':true}),
																	new AnimatedProperty({'idName':'premios_button','className':'show','classTransitionName':'default-transition','add':true}),
																]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"startFunction":function(){
																	$('#fatos').addClass('hide');
																	$('#fatos').addClass('onMiddle');
																	$('#fatos').removeClass('onBottom');
																	$('#menu-bar').addClass('show');
																},
																"endFunction":function(){
																	$('#slide1').addClass('onTop');
																	$('#slide1').addClass('showWord');
																	$('#slide1').addClass('show');
																	$('#slide2').addClass('onTop');
																	$('#slide2').addClass('showWord');
																	$('#slide3').addClass('onMiddle');
																	$('#rotational').addClass('upCar');
																	$('#rotational').addClass('rotate');
																	$('#blue_car').removeClass('zoomCar');
																	$('#home').addClass('show');
																	$('#identidade').removeClass('onBottom');
																	$('#identidade').addClass('onTop');
																},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','add':true, 'duration':500}),
																	new AnimatedProperty({'idName':'fatos','className':'hide','classTransitionName':'opacity-transition','remove':true}),
																	new AnimatedProperty({'idName':'premios_button','className':'show','classTransitionName':'default-transition','add':true}),
																]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"startFunction":function(){
																	$('#versoes').addClass('hide');
																	$('#versoes').addClass('onMiddle');
																	$('#versoes').removeClass('onBottom');
																},
																"endFunction":function(){
																	$('#slide1').addClass('onTop');
																	$('#slide1').addClass('showWord');
																	$('#slide1').addClass('show');
																	$('#slide2').addClass('onTop');
																	$('#slide2').addClass('showWord');
																	$('#slide3').addClass('onMiddle');
																	$('#rotational').addClass('upCar');
																	$('#rotational').addClass('rotate');
																	$('#blue_car').removeClass('zoomCar');
																	$('#home').addClass('show');
																	$('#menu-bar').addClass('show');
																	$('#identidade').removeClass('onBottom');
																	$('#identidade').addClass('onTop');
																	$('#fatos').removeClass('onBottom');
																	$('#fatos').addClass('onTop');
																},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','add':true, 'duration':500}),
																	new AnimatedProperty({'idName':'versoes','className':'hide','classTransitionName':'opacity-transition','remove':true}),
																	new AnimatedProperty({'idName':'premios_button','className':'show','classTransitionName':'default-transition','add':true}),
																]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"startFunction":function(){
																	$('#tour').addClass('hide');
																	$('#tour').addClass('onMiddle');
																	$('#tour').removeClass('onBottom');
																},
																"endFunction":function(){
																	$('#slide1').addClass('onTop');
																	$('#slide1').addClass('showWord');
																	$('#slide1').addClass('show');
																	$('#slide2').addClass('onTop');
																	$('#slide2').addClass('showWord');
																	$('#slide3').addClass('onMiddle');
																	$('#rotational').addClass('upCar');
																	$('#rotational').addClass('rotate');
																	$('#blue_car').removeClass('zoomCar');
																	$('#home').addClass('show');
																	$('#menu-bar').addClass('show');
																	stateMachine.upSlides(['identidade','fatos','versoes']);
																},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','add':true, 'duration':500}),
																	new AnimatedProperty({'idName':'tour','className':'hide','classTransitionName':'opacity-transition','remove':true}),
																	new AnimatedProperty({'idName':'premios_button','className':'show','classTransitionName':'default-transition','add':true}),
																]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"startFunction":function(){
																	$('#galeria').addClass('hided');
																	$('#galeria').addClass('onMiddle');
																	$('#galeria').removeClass('onBottom');
																},
																"endFunction":function(){
																	$('#slide1').addClass('onTop');
																	$('#slide1').addClass('showWord');
																	$('#slide1').addClass('show');
																	$('#slide2').addClass('onTop');
																	$('#slide2').addClass('showWord');
																	$('#slide3').addClass('onMiddle');
																	$('#rotational').addClass('upCar');
																	$('#rotational').addClass('rotate');
																	$('#blue_car').removeClass('zoomCar');
																	$('#home').addClass('show');
																	$('#menu-bar').addClass('show');
																	stateMachine.upSlides(['identidade','fatos','versoes','tour']);
																},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','add':true, 'duration':500}),
																	new AnimatedProperty({'idName':'galeria','className':'hided','classTransitionName':'opacity-transition','remove':true}),
																	new AnimatedProperty({'idName':'premios_button','className':'show','classTransitionName':'default-transition','add':true}),
																]
															}),
															new Transition({
																"endStateName":"hand",
																"trigger":Trigger.Entrance,
																"endFunction":function(){$('#slide1').addClass('showWord');startGears('slide1');},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'slide1','className':'show','add':true})
																]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"hand",
										"stage":1,
										"welcomeFunction":function(){
																window.tagManager.acessouPagina("Trabalho");
																setTimeout(function(){if(window.stateMachine.state.name=="hand")window.stateMachine.askMove(window.stateMachine.Trigger.Next)}, 4000);
															},
										"transitions":[
															new Transition({
																"endStateName":"surf",
																"trigger":Trigger.Next,
																"endFunction":function(){$('#slide2').addClass('showWord');startGears('slide2');},
																"animatedProperties":[
																	new AnimatedProperty({'idName':'slide2','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																	new AnimatedProperty({'idName':'slide1','className':'onTop','classTransitionName':'default-transition','add':true})
																]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"surf",
										"stage":2,
										"welcomeFunction":function(){
																window.tagManager.acessouPagina("Aventura");window.tagManager.didScroll("25");
																setTimeout(function(){if(window.stateMachine.state.name=="surf")window.stateMachine.askMove(window.stateMachine.Trigger.Next)}, 4000);
															},
										"transitions":[
															new Transition({
																"endStateName":"hand",
																"trigger":Trigger.Previews,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'slide1','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'slide2','className':'onMiddle','classTransitionName':'default-transition','remove':true})
																					]
															}),
															new Transition({
																"endStateName":"downCar",
																"trigger":Trigger.Next,
																"endFunction":function(){$('#slide3').addClass('showWord');startGears('slide3');},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'slide2','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'slide2','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'slide3','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"downCar",
										"stage":3,
										"welcomeFunction":function(){
															window.tagManager.acessouPagina("Inspirou");window.tagManager.didScroll("50");
															setTimeout(function(){if(window.stateMachine.state.name=="downCar")window.stateMachine.askMove(window.stateMachine.Trigger.Next)}, 4000);
														},
										"transitions":[
															new Transition({
																"endStateName":"surf",
																"trigger":Trigger.Previews,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'slide2','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'slide2','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'slide3','className':'onMiddle','classTransitionName':'default-transition','remove':true})
																						]
															}),
															new Transition({
																"endStateName":"upCar",
																"trigger":Trigger.Next,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'rotational','className':'upCar','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'slide3','className':'showWord','classTransitionName':'default-transition','remove':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"upCar",
										"stage":3,
										"welcomeFunction":function(){window.tagManager.didScroll("75");},
										"autoplay":true,
										"transitions":[
															new Transition({
																"endStateName":"downCar",
																"trigger":Trigger.Previews,
																"endFunction":function(){$('#slide3').addClass('showWord');},
																"animatedProperties":[new AnimatedProperty({'idName':'rotational','className':'upCar','classTransitionName':'default-transition','remove':true})]
															}),
															new Transition({
																"endStateName":"rotatedCar",
																"trigger":Trigger.Next,
																"animatedProperties":[new AnimatedProperty({'idName':'rotational','className':'rotate','classTransitionName':'default-transition','add':true})]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"rotatedCar",
										"stage":3,
										"autoplay":true,
										"welcomeFunction":function(){
												window.tagManager.didScroll("100");
												
											},
										"transitions":[
															new Transition({
																"endStateName":"upCar",
																"trigger":Trigger.Previews,
																"animatedProperties":[new AnimatedProperty({'idName':'rotational','className':'rotate','classTransitionName':'default-transition','remove':true})]
															}),
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Next,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'blue_car','className':'zoomCar','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'home','className':'show','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','add':true, 'delay':500, 'duration':900}),
																						new AnimatedProperty({'idName':'premios_button','className':'show','classTransitionName':'default-transition','add':true}),
																						]
															})
														]
									}));
		//Home principal
		this.states.push(new State({
										"stateMachine":this,
										"name":"home",
										"stage":4,
										"goodbyeFunction":function(){
												$('.robust-button').removeClass('show');
												$('.cross-button').removeClass('show');
												$(".icon-home").parent().removeClass('selected');
											},
										"welcomeFunction":function(){
												window.tagManager.acessouHome();
												$('.robust-button').addClass('show');
												$('.cross-button').addClass('show');
												window.stateMachine.addHash('home');
												$(".icon-home").parent().addClass('selected');
											},
										"transitions":[
															/*
															new Transition({
																"endStateName":"rotatedCar",
																"trigger":Trigger.Previews,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'blue_car','className':'zoomCar','classTransitionName':'default-transition','add':true, 'delay':1000}),
																						new AnimatedProperty({'idName':'home','className':'show','classTransitionName':'default-transition','remove':true, 'delay':1000}),
																						//new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','remove':true, 'delay':1000}),
																						new AnimatedProperty({'idName':'menu','className':'show','classTransitionName':'opacity-transition','remove':true})
																						]
															}),
															*/
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Next,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){
																						stateMachine.upSlides(['identidade']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						stateMachine.upSlides(['identidade','fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						stateMachine.upSlides(['identidade','fatos','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						stateMachine.upSlides(['identidade','fatos','versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"endFunction":function(){
																						stateMachine.upSlides(['identidade','fatos','versoes','tour','galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"robust",
																"trigger":Trigger.Robust,
																"endFunction":function(){
																						stateMachine.upSlides(['identidade','fatos','versoes','tour','galeria','premios']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"cross",
																"trigger":Trigger.Cross,
																"endFunction":function(){
																						stateMachine.upSlides(['identidade','fatos','versoes','tour','galeria','premios','robust']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"identidade",
										"welcomeFunction":function(){
											window.identidadeManager.start();window.tagManager.acessouPagina("Identidade");
											window.stateMachine.addHash('identidade');
											$(".icon-identidade").parent().addClass('selected');
										},
										"goodbyeFunction":function(){
											window.identidadeManager.stop();
											$(".icon-identidade").parent().removeClass('selected');
										},
										"stage":7,
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Previews,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Next,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						stateMachine.upSlides(['fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						stateMachine.upSlides(['fatos','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						stateMachine.upSlides(['fatos','versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"endFunction":function(){
																						stateMachine.upSlides(['fatos','versoes','tour','galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"fatos",
										"stage":8,
										"goodbyeFunction":function(){
											setTimeout(function(){ window.fatosManager.stop();},1000);
											$(".icon-fatos").parent().removeClass('selected');
										},
										"welcomeFunction":function(){
											window.tagManager.acessouPagina("Fatos");
											window.stateMachine.addHash('fatos');
											$(".icon-fatos").parent().addClass('selected');
										},
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																							stateMachine.downSlides(['identidade']);
																						},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Previews,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Next,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						stateMachine.upSlides(['versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						stateMachine.upSlides(['versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"endFunction":function(){
																						stateMachine.upSlides(['versoes','tour','galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"versoes",
										"welcomeFunction":function(){
											window.tagManager.acessouPagina("Versões");window.tagManager.viuVersoes(1);
											window.stateMachine.addHash('versoes');
											$(".icon-versoes").parent().addClass('selected');
											$('.down-arrow').removeClass('show');

										},
										"goodbyeFunction":function(){
											setTimeout(function(){ window.versoesManager.stop();},1000);
											$(".icon-versoes").parent().removeClass('selected');
											$('.down-arrow').addClass('show');
										},
										"stage":9,
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																						stateMachine.downSlides(['identidade','fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						stateMachine.downSlides(['fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Previews,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Next,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						stateMachine.upSlides(['tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"endFunction":function(){
																						stateMachine.upSlides(['tour','galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"tour",
										"stage":11,
										"welcomeFunction":function(){
											window.tagManager.acessouPagina("360°");
											window.stateMachine.addHash('360');
											$(".icon-360").parent().addClass('selected');
										},
										"goodbyeFunction":function(){
											window.tourManager.stopCube();setTimeout(function(){ window.tourManager.stop();},1000);
											$(".icon-360").parent().removeClass('selected');
										},
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"startFunction":function(){$('.tour_sequence').removeClass('onMiddle');$('.tour_principal').addClass('onMiddle');},
																"endFunction":function(){
																						stateMachine.downSlides(['identidade','fatos','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						stateMachine.downSlides(['fatos','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){
																						stateMachine.downSlides(['versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Previews,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Next,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"endFunction":function(){
																						stateMachine.upSlides(['galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"galeria",
										"stage":12,
										"goodbyeFunction":function(){
											setTimeout(function(){ $('.down-arrow').css('display','inline');}, 1000);  
											$(".icon-galeria").parent().removeClass('selected');
											$('.up-arrow').removeClass('show');
											window.galleryManager.stop();
										},
										"welcomeFunction":function(){
											window.tagManager.acessouPagina("Galeria");$('.down-arrow').css('display','none')
											window.stateMachine.addHash('galeria');
											$(".icon-galeria").parent().addClass('selected');
										},
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																						stateMachine.downSlides(['identidade','fatos','versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						stateMachine.downSlides(['fatos','versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){
																						stateMachine.downSlides(['versoes','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						stateMachine.downSlides(['tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Previews,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'galeria','className':'onTop','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"premios",
										"stage":6,
										"welcomeFunction":function(){window.premiosManager.setLastState(stateMachine.state);window.tagManager.acessouPagina("Prêmios");},
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																						stateMachine.downSlides(['galeria','tour','versoes','fatos','identidade']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						stateMachine.downSlides(['galeria','tour','versoes','fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){
																						stateMachine.downSlides(['galeria','tour','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						stateMachine.downSlides(['galeria','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						stateMachine.downSlides(['galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'galeria','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"robust",
										"stage":5,
										"welcomeFunction":function(){
											window.robustManager.setLastState(stateMachine.state);window.tagManager.acessouModelo("SAVEIRO ROBUST");
											$('.down-arrow').removeClass('show');
										},
										"goodbyeFunction":function(){
											$('.down-arrow').addClass('show');
										},
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																						stateMachine.downSlides(['premios','galeria','tour','versoes','fatos','identidade']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						stateMachine.downSlides(['premios','galeria','tour','versoes','fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){
																						stateMachine.downSlides(['premios','galeria','tour','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						stateMachine.downSlides(['premios','galeria','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						stateMachine.downSlides(['premios','galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						stateMachine.downSlides(['premios']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'galeria','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"animatedProperties":[
																						new AnimatedProperty({'idName':'premios','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'robust-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		this.states.push(new State({
										"stateMachine":this,
										"name":"cross",
										"stage":5,
										"welcomeFunction":function(){window.crossManager.setLastState(stateMachine.state);window.tagManager.acessouModelo("SAVEIRO CROSS");},
										"transitions":[
															new Transition({
																"endStateName":"home",
																"trigger":Trigger.Home,
																"endFunction":function(){
																						stateMachine.downSlides(['robust','premios','galeria','tour','versoes','fatos','identidade']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'menu-bar','className':'show','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"identidade",
																"trigger":Trigger.Identidade,
																"endFunction":function(){
																						stateMachine.downSlides(['robust-slide','premios','galeria','tour','versoes','fatos']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'identidade','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'identidade','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"fatos",
																"trigger":Trigger.Fatos,
																"endFunction":function(){
																						stateMachine.downSlides(['robust-slide','premios','galeria','tour','versoes']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'fatos','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'fatos','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"versoes",
																"trigger":Trigger.Versoes,
																"endFunction":function(){
																						stateMachine.downSlides(['robust-slide','premios','galeria','tour']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'versoes','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'versoes','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"tour",
																"trigger":Trigger.Tour,
																"endFunction":function(){
																						stateMachine.downSlides(['robust-slide','premios','galeria']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'tour','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'tour','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"galeria",
																"trigger":Trigger.Galeria,
																"endFunction":function(){
																						stateMachine.downSlides(['robust-slide','premios']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'galeria','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'galeria','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															}),
															new Transition({
																"endStateName":"premios",
																"trigger":Trigger.Premios,
																"endFunction":function(){
																						stateMachine.downSlides(['robust-slide']);
																					},
																"animatedProperties":[
																						new AnimatedProperty({'idName':'premios','className':'onTop','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'premios','className':'onMiddle','classTransitionName':'default-transition','add':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onMiddle','classTransitionName':'default-transition','remove':true}),
																						new AnimatedProperty({'idName':'cross-slide','className':'onBottom','classTransitionName':'default-transition','add':true})
																						]
															})
														]
									}));
		
		this.askMove = function(trigger){
			//console.log(this.state.transitions);
			for(var i=0;i<this.state.transitions.length;i++){
				if(this.state.transitions[i].trigger == trigger){
					this.pendentTransition = this.state.transitions[i];
					var stateName = this.state.transitions[i].endStateName;
					var stage = this.getStateByName(stateName).stage;
					//console.log(stateName+':'+stage);
					window.imageLoader.askToChangeStage(window.imageLoader.ChangeStage.Any,stage);
				}
			}
		}
		this.stageLoaded = function(){
			if(this.pendentTransition != null){
				this.move(this.pendentTransition.trigger);
				this.pendentTransition = null;	
			}
		}
		this.move = function(trigger){
			if(imageLoader.onLoading){
				$('.'+loadClassName).addClass('hide-load');	
			}			
			if(!this.onTransition){
				this.state.move(trigger);
			}
		}
		this.makeTransition = function(transition){
			this.currentTransition = transition;
			this.onTransition = true;
			this.pendentState = transition.endStateName;
			transition.startFunction();
			for(var i=0;i<transition.animatedProperties.length;i++){
				this.animationCounter++;
				transition.animatedProperties[i].animate(this.completeAnimationProperty);
			}
		}
		this.getStateByName = function(name){
			for(var i=0;i<this.states.length;i++){
				if(this.states[i].name == name){
					return this.states[i];
				}
			}
			return null;
		}
		this.setState = function(name){
			this.lastState = this.state;
			this.state = this.getStateByName(name);
			if(this.state.autoplay){
				this.moveAutoPlay();
			}
		}
		this.completeAnimationProperty = function(id,classTransitionName){
			$('#'+id).removeClass(classTransitionName);
			stateMachine.animationCounter--;
			if(stateMachine.animationCounter < 1){
				stateMachine.finishTransition();
			}
		}
		this.finishTransition = function(){
			this.currentTransition.endFunction();
			this.onTransition = false;
			//console.log('state trocado: '+this.pendentState);
			this.getStateByName(this.pendentState).welcomeFunction();
			this.setState(this.pendentState);
		}
		this.moveAutoPlay = function(){
			var transition=null;
			for(var i=0;i<this.state.transitions.length;i++){
				if(this.state.transitions[i].endStateName != this.lastState.name){
					transition = this.state.transitions[i];
				}
			}
			if(transition!=null){
				//this.move(transition.trigger);
				this.askMove(transition.trigger);
			}
		}
		this.addHash = function(page){
			if(!oldIE)window.history.pushState("", "", '#!/'+page);
		}
		this.switchEntrance = function(){
			var page = window.location.href.substring(window.location.href.indexOf("#")+1);


			if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
				this.askMove(Trigger.Home);
			}else{
				switch(page){
			    	case "!/home":
			    		this.askMove(Trigger.Home);
			    		break;
			    	case "!/identidade":
			    		this.askMove(Trigger.Identidade);
			    		break;
			    	case "!/fatos":
			    		this.askMove(Trigger.Fatos);
			    		break;
			    	case "!/versoes":
			    		this.askMove(Trigger.Versoes);
			    		break;
			    	case "!/360":
			    		this.askMove(Trigger.Tour);
			    		break;
			    	case "!/galeria":
			    		this.askMove(Trigger.Galeria);
			    		break;
			    	default:
			    		this.askMove(Trigger.Entrance);
			    		break;
			    }
			}
		    
			//this.askMove(Trigger.Entrance);
		}
		this.upSlides = function(slides){
			for(var i=0;i<slides.length;i++){
				$('#'+slides[i]).addClass('onTop');
				$('#'+slides[i]).removeClass('onBottom');
			}
		}
		this.downSlides = function(slides){
			for(var i=0;i<slides.length;i++){
				$('#'+slides[i]).addClass('onBottom');
				$('#'+slides[i]).removeClass('onTop');
			}
		}
		this.state = this.states[0];
		this.switchEntrance();
	}
	var State = function(options){
		this.stateMachine = options.stateMachine;
		this.name = options.name;
		this.stage = options.stage;
		this.transitions = options.transitions;
		this.autoplay = (options.autoplay)?(options.autoplay):false;
		this.move = function(trigger){
			for(var i=0;i<this.transitions.length;i++){
				if(this.transitions[i].trigger == trigger){
					this.stateMachine.makeTransition(this.transitions[i]);
					this.goodbyeFunction();
				}
			}
		}
		this.welcomeFunction = (options.welcomeFunction)?(options.welcomeFunction):(function(){});
		this.goodbyeFunction = (options.goodbyeFunction)?(options.goodbyeFunction):(function(){});
	}

	var Transition = function(options){
		this.trigger = options.trigger;
		this.endStateName = options.endStateName;
		this.animatedProperties = options.animatedProperties;
		this.startFunction = (options.startFunction)?(options.startFunction):(function(){});
		this.endFunction = (options.endFunction)?(options.endFunction):(function(){});
	}

	var AnimatedProperty = function(options){
		this.idName=options.idName;
		this.className=options.className;
		this.add=options.add;
		this.remove=options.remove;
		this.classTransitionName = (options.classTransitionName)?(options.classTransitionName):("");
		this.duration=(options.duration)?(options.duration):((oldIE)?(0):(1400));
		this.delay=(options.delay)?(options.delay):0;
		this.animate = function(callback){
			//console.log(this.duration);
			var add = this.add;
			var remove = this.remove;
			var idName = this.idName;
			var className = this.className;
			var classTransitionName = this.classTransitionName;
			var duration = this.duration;
			setTimeout(function(){
				$('#'+idName).addClass(classTransitionName);
				if(add) $('#'+idName).addClass(className);
				if(remove) $('#'+idName).removeClass(className);
				var id = idName;
				setTimeout(function(){ callback(idName,classTransitionName);}, duration);
			}, this.delay);
		}
	}
	var stateMachine = new StateMachine();
	window.stateMachine = stateMachine;
	
	var startGears = function(slide){
		setTimeout(function(){
			$('#'+slide+' .gear_big').addClass('rotating');
			$('#'+slide+' .gear_small').addClass('rotating-inverted');
		}, 900);
	}
});