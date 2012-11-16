
/* =starter script javascript

-------------------------------------------------------------- */
(function($) {
	$(document).ready(function() {
		UI.load();
	});
	SITE = {
		all : function() {
			// add funções gerais
			//add verificacao de browser
			if ($.browser.msie) {
				if(parseInt($.browser.version) >= 9){
					 $("html").addClass("ie ie9");
				} else if(parseInt($.browser.version) == 8){
					 $("html").addClass("ie ie8");
				} else if(parseInt($.browser.version) == 7){
					 $("html").addClass("ie ie7");
				} else if(parseInt($.browser.version) == 6){
					 $("html").addClass("ie ie6");
				}
			}
			if ($.browser.mozilla) {
				$("html").addClass("firefox");
			}
			if ($.browser.webkit) {
				$("html").addClass("webkit");
			}
			$('.blank').novaReferencia();
		},
		section : {

			home : function() {
				$(".visitar").on('click', function (){
					$(this).mostrar();
				});
				$("#home").regionalizaData();
				$( ".datepicker" ).datepicker();
				$(".fone").mask("(99) 99999-9999");
				$(".data").mask("99/99/9999");
				$('.agendar').validate({
					rules:{
						nome:{
							required: true
						},
						telefone:{
							required: true
						},
						email: {
							required: true,
							email: true
						},
						data: {
							required: true
						}
					},
					messages:{
						nome:{
							required: "O campo nome é obrigatorio."
						},
						telefone:{
							required: "O campo telefone é obrigatorio."
						},
						email: {
							required: "O campo email é obrigatorio.",
							email: "O campo email deve conter um email válido."
						},
						data: {
							required: "O campo data é obrigatorio."
						}
					}

				});

			},
			doencasOculares : function() {
				$(".accordion h3").on('click', function (){
					$(this).accordeon();
				});
			},
			duvidasFrequentes : function() {
				$(".accordion h3").on('click', function (){
					$(this).accordeon();
				});
			},
			medicinaOcular : function() {
			},
			historias : function() {
			},
			olhar : function() {
			},
			simulador : function() {
				$(".accordion h3").on('click', function (){
					$(this).accordeon();
				});
			},
			contato : function() {
				$(".fone").mask("(99) 99999-9999");
				$('body').konami();
				$('.agendar').validate({
					rules:{
						nome:{
							required: true
						},
						telefone:{
							required: true
						},
						email: {
							required: true,
							email: true
						},
						mensagem:{
							required: true
						}
					},
					messages:{
						nome:{
							required: "O campo nome é obrigatorio."
						},
						telefone:{
							required: "O campo telefone é obrigatorio."
						},
						email: {
							required: "O campo email é obrigatorio.",
							email: "O campo email deve conter um email válido."
						},
						mensagem:{
							required: "O campo mensagem é obrigatorio."
						}
					}

				});

			}
		}
	}
})(jQuery);
