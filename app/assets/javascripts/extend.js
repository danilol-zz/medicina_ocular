(function($){
UI = {
	load: function() {
		SITE.all();
		try {			
			SITE.section[this.getSection()]();
		} catch(err) {
			alert(err);
		}
	},
	getSection: function(section) {
		var sectionId = typeof section!= 'undefined' && $(document.getElementById(section)).length>0? $(document.getElementById(section)).attr('id') : document.body.id;
		return sectionId.replace(/\-([a-z])/g,function(){
			return arguments[1].toUpperCase();
		});
	}
}
})(jQuery);

$.fn.extend({
	
	// funções
	novaReferencia: function() {
		$(this).bind('click', function(){
		window.open( $(this).attr('href') );
		return false;
		});
	}, 
	mostrar : function () {
		if ( $('.form-container').hasClass('fechado') ) {
			$('.form-container').removeClass('fechado')
			$('.form-container').fadeIn();
			$('footer').addClass('aberto')
		}else{
			$('.form-container').addClass('fechado');
			$('.form-container').fadeOut('fast', function () {
				$('footer').removeClass('aberto');
			})
		}
	},	
	accordeon : function (){
	
		var titulo = $(this);
		var icone = titulo.parents('.accordion').find('span');
		var conteudo = titulo.parents('.accordion').find('section');
		var outros = titulo.parents('.accordion').siblings();
		if ( icone.hasClass('fechado') ){
			icone.removeClass('fechado').addClass('aberto');
			titulo.addClass('selecionado');
			conteudo.slideDown();
			outros.find('span').removeClass('aberto').addClass('fechado');
			outros.find('h3').removeClass('selecionado');
			outros.find('section').slideUp();
		}
							
	},
	konami : function() {
		var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
		$(document).keydown(function(e) {
			kkeys.push( e.keyCode );
			if ( kkeys.toString().indexOf( konami ) >= 0 ){
				$(document).unbind('keydown',arguments.callee);
				$('body').append("<img class='tooth' src='http://fc08.deviantart.net/fs71/f/2012/103/d/d/where_is_toothless____here_i_am__by_rishkhaan-d4w0yex.gif' style='position: absolute; top:0; left:320px' />");
				setTimeout(function (){
					$('.tooth').fadeOut('fast',function(){
						$('tooth').remove();
					});
				},5000);          
			}
		});
	},
	regionalizaData : function() {
			$.datepicker.regional['pt-BR'] = {
			    closeText: 'Fechar',
			    prevText: '&#x3c;Anterior',
			    nextText: 'Pr&oacute;ximo&#x3e;',
			    currentText: 'Hoje',
			    monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho',
			    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
			    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
			    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
			    dayNames: ['Domingo', 'Segunda-feira', 'Ter&ccedil;a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'],
			    dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
			    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
			    weekHeader: 'Sm',
			    dateFormat: 'dd/mm/yy',
			    firstDay: 0,
			    isRTL: false,
			    showMonthAfterYear: false,
			    yearSuffix: ''
			};
			$.datepicker.setDefaults($.datepicker.regional['pt-BR']);
		}
});