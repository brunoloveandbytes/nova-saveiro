
$(document).ready(function() {
	var TagManager = function(){
		//TAG 1
		this.acessouHome = function(){
			console.log('Acessou Home');
			dataLayer.push({
				'event': 'GAEvent', 
				'eventFLD' : 'acesso_home | nova-saveiro | nova-saveiro',
				'eventCategory': 'viu_pagina',
				'eventAction': 'visualizou', 
				'eventLabel': 'home',
				'modelName': 'nova-saveiro',
				'siteName': 'nova-saveiro'
			});
		}
		//TAG 2
		this.acessouPagina = function(pagina){
			console.log('Acessou página: '+pagina);
			dataLayer.push({
				'eventFLD' : 'acesso_pagina | nova-saveiro | nova-saveiro | '+pagina,
				'siteName': 'nova-saveiro',
				'pageName': pagina,
				'modelName': 'nova-saveiro',
				'event': 'GAEvent',
				'eventCategory': 'viu_pagina',
				'eventAction': 'visualizou',
				'eventLabel': 'nova-saveiro | '+pagina
			});
		}

		//TAG 3
		this.estouInteressado = function(){
			console.log('tag interessado');
			dataLayer.push({
				'eventFLD': 'estou_interessado | nova- saveiro | nova-saveiro',
				'siteName': 'nova-saveiro',
				'modelName': 'nova-saveiro',
				'event': 'GAEvent',
				'eventCategory': 'estou_interessado',
				'eventAction': 'clique',
				'eventLabel': 'nova-saveiro | nova-saveiro'
			});
		}


		//TAG 4 e 5
		this.viuFatos = function(idx){
			var fato='';
			switch(idx){
				case 1:
					fato = '#1 SUSPENSãO';
					break;
				case 2:
					fato = '#2 DESEMPENHO';
					break;
				case 3:
					fato = '#3 ABS OFF-ROAD';
					break;
				case 4:
					fato = '#4 HDC';
					break;
				case 5:
					fato = '#5 EDS';
					break;
			}
			console.log('viu fatos: '+fato);
			dataLayer.push({
				'eventFLD' : 'viu_fatos | nova-saveiro | '+fato,
				'siteName': 'nova-saveiro',
				'pageName': 'Fatos', 
				'event': 'GAEvent',
				'eventCategory': 'viu_fato', 
				'eventAction': 'visualizou', 
				'eventLabel': 'nova-saveiro | '+fato
			});
			dataLayer.push({
				'event': 'VirtualPageview',
				'VirtualPageURL': '/vpv/ nova-saveiro / nova- saveiro / '+fato,
				'VirtualPageTitle': 'VPV – nova-saveiro – nova- saveiro / '+fato,
				'eventFLD' : 'photoview | nova-saveiro | nova- saveiro | '+fato,
				'siteName': 'nova-saveiro', 
				'pageName': 'Fatos', 
				'modelName': 'nova-saveiro'
			});
		}

		//TAG 6 e 7
		this.viuVersoes = function(idx){
			var versao='';
			switch(idx){
				case 1:
					versao = 'ROBUST CABINE SIMPLES';
					break;
				case 2:
					versao = 'TRENDLINE CABINE SIMPLES';
					break;
				case 3:
					versao = 'TRENDLINE CABINE DUPLA';
					break;
				case 4:
					versao = 'TRENDLINE CABINE ESTENDIDA';
					break;
				case 5:
					versao = 'HIGHLINE COMPLETA';
					break;
				case 6:
					versao = 'CROSS CABINE DUPLA';
					break;
				case 7:
					versao = 'CROSS CABINE ESTENDIDA';
					break;
			}
			console.log('viu versoes: '+versao);
			dataLayer.push({
				'eventFLD' : 'viu_fatos | nova-saveiro | '+versao,
				'siteName': 'nova-saveiro',
				'pageName': 'Versões', 
				'event': 'GAEvent',
				'eventCategory': 'viu_versao',
				'eventAction': 'visualizou',
				'eventLabel': 'nova-saveiro | '+versao
			});
			dataLayer.push({
				'event': 'VirtualPageview',
				'VirtualPageURL': '/vpv/ nova-saveiro / nova- saveiro / '+versao,
				'VirtualPageTitle': 'VPV – nova-saveiro – nova- saveiro / '+versao,
				'eventFLD' : 'photoview | nova-saveiro | nova- saveiro | '+versao,
				'siteName': 'nova-saveiro', 
				'pageName': 'Versões', 
				'modelName': 'nova-saveiro'
			});
		}

		//TAG 8
		this.estouInteressadoVersoes = function(idx){
			var versao='';
			switch(idx){
				case 1:
					versao = 'ROBUST CABINE SIMPLES';
					break;
				case 2:
					versao = 'TRENDLINE CABINE SIMPLES';
					break;
				case 3:
					versao = 'TRENDLINE CABINE DUPLA';
					break;
				case 4:
					versao = 'TRENDLINE CABINE ESTENDIDA';
					break;
				case 5:
					versao = 'HIGHLINE COMPLETA';
					break;
				case 6:
					versao = 'CROSS CABINE DUPLA';
					break;
				case 7:
					versao = 'CROSS CABINE ESTENDIDA';
					break;
			}
			console.log('estou interessado na versão: '+versao);
			dataLayer.push({
				'eventFLD' : 'estou_interessado | nova- saveiro | nova-saveiro',
				'siteName': 'nova-saveiro',
				'modelName': 'nova-saveiro',
				'event': 'GAEvent',
				'eventCategory': 'estou_interessado eventAction: clique',
				'eventLabel': 'nova-saveiro | nova-saveiro | '+versao
			});
		}

		//TAG 10 e 11
		this.viu360 = function(categoria){
			console.log('Viu 360: ' + categoria);
			dataLayer.push({
				'eventFLD' : 'viu_360° | nova-saveiro | nova- saveiro | '+categoria,
				'siteName': 'nova-saveiro',
				'modelName': 'nova-saveiro',
				'event': 'GAEvent',
				'eventCategory': 'Viu_360°',
				'eventAction': 'visualizou',
				'eventLabel': 'nova-saveiro | nova-saveiro | '+categoria
			});

			dataLayer.push({
				'event': 'VirtualPageview',
				'VirtualPageURL': '/vpv/ nova-saveiro / nova- saveiro / '+categoria,
				'VirtualPageTitle': 'VPV – nova-saveiro – nova- saveiro / '+categoria,
				'eventFLD' : 'photoview | nova-saveiro | nova- saveiro | '+categoria,
				'siteName': 'nova-saveiro',
				'pageName': '360°',
				'modelName': 'nova-saveiro'
			});
		}

		//TAG 12 e 13
		this.viuFotos = function(categoria,nome,numero){
			console.log('Viu foto: ' + categoria + '-' + nome + '-' + numero);
			dataLayer.push({
				'eventFLD' : 'photoview | nova-saveiro | nova-saveiro | '+nome,
				'siteName': 'nova-saveiro',
				'pageName': 'GALERIA',
				'modelName': 'nova-saveiro',
				'event': 'GAEvent',
				'eventCategory': 'viu_foto',
				'eventAction': 'visualizou',
				'eventLabel': 'nova-saveiro | nova-saveiro | '+categoria+' | '+numero
			});
			dataLayer.push({
				'event': 'VirtualPageview',
				'VirtualPageURL': '/vpv/ nova-saveiro / nova- saveiro / '+nome,
				'VirtualPageTitle': 'VPV – gol – nova-saveiro / '+categoria+' | '+numero,
				'eventFLD' : 'photoview | nova-saveiro| nova- saveiro | '+categoria+' | '+numero,
				'siteName': 'nova-saveiro',
				'pageName': 'GALERIA',
				'modelName': 'nova-saveiro'
			});
		}


		//TAG 14
		this.didScroll = function(percent){
			console.log('Scroll: ' + percent + '%');
			dataLayer.push({
				'event': 'GAEvent',
				'eventCategory': 'scroll | nova-saveiro | nova-saveiro',
				'eventAction': 'scroll',
				'eventLabel': percent + '%'
			});
		}

	}
	var tagManager = new TagManager();
	window.tagManager = tagManager;
});