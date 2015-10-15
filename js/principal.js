/*
 * Mask Plugin: http://igorescobar.github.io/jQuery-Mask-Plugin/
 * 
Classes:
calendario
checkbox-switch
tagsInputIncorp
codFebraban
monetario16posicoesCom2casasDecimais
spinnerIncorp
data
qtd2caracteres
qtd8caracteres
qtd12caracteres
apenasNumeros
 */
var IncorpWeb = IncorpWeb || {};

configurarEventosPadroes();

function configurarEventosPadroes() {
	calendarioEventos();
	tagsInputEventos();
	swithCheckBoxEventos();
	$('.timepickerIncorp').datetimepicker2({
		pickDate : false,
		useSeconds : true,
		format : "HH:mm:ss"
	});
	
	$(".spinnerIncorp").TouchSpin({
		verticalbuttons : true,
		max : 999999999
	});

	configurarClasseApenasNumeros();
	configurarClassesDeMascaras();
	configurarInputsClear();
	clickMenuIncorp();
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function configurarInputsClear() {
	jQuery(function($) {
		function tog(v) {
			return v ? 'addClass' : 'removeClass';
		}
		$(document).on('click focus blur', 'input:text', function() {
			$("input:text").addClass("clearable");
			if ($(this).is(":focus")) {
				$(this)[tog(true)]('x');
			} else {
				$(this)[tog(false)]('x');
			}
		}).on(
				'mousemove',
				'.x',
				function(e) {
					$(this)[tog(this.offsetWidth - 18 < e.clientX
							- this.getBoundingClientRect().left)]('onX');
				}).on('click', '.x.onX', function() {
			$(this).removeClass('x onX').val('').change();
		});
	});
}

function configurarClasseApenasNumeros() {
	$('.apenasNumeros').keyup(function() {
		this.value = this.value.replace(/[^0-9\.]/g, '');
	});
}

function configurarClassesDeMascaras() {
	$('.monetario16posicoesCom2casasDecimaisNegativo').maskMoney({allowNegative: true, thousands:'.', decimal:',', affixesStay: false});	
	$('.codFebraban').mask("999");
	$('.numeroReduzido').mask("9999999999");
	$('.monetario16posicoesCom2casasDecimais').mask('#.###.###.###.###.##0,00',
			{reverse : true});	
	$('.data').mask('00/00/0000');
	$('.qtd8caracteres').mask('AAAAAAAA');
	$('.qtd2caracteres').mask('AA');
	$('.qtd12caracteres').mask('AAAAAAAAAAAA');
	$('.ordem').mask("99");
	
	$('.mascaraCPF').mask('###.###.###-##', {
		placeholder : "___.___.___-__"
	});
	$('.mascaraDate').mask('##/##/####', {
		placeholder : "__/__/____"
	});
	$('.mascaraCNPJ').mask('##.###.###/####-##', {
		placeholder : "__.___.___/____-__"
	});
	$('.mascaraCEP').mask('#####-###', {
		placeholder : "_____-___"
	});
	$('.sufixo').mask("9999");
	$('.mascaraHHMMSS').mask('##:##:##', {
		placeholder : "__:__:__"
	});
}

function calendarioEventos() {
	$('.calendario').datetimepicker2({
		format : "DD/MM/YYYY",
		pickTime : false,
		language : "pt-BR"
	});
}

function tagsInputEventos() {
	$('.tagsInputIncorp').tagsinput('refresh');
}

function swithCheckBoxEventos() {
	$('.switch-checkbox').bootstrapSwitch();
}

IncorpWeb.exibirFormAlteracaoSenha = function() {
	$('#alteracaoSenha').modal('show');
};

IncorpWeb.exibirFormQuemSouEu = function() {
	$('#quemSouEu').modal('show');
};

IncorpWeb.desabilitarFieldsetForm = function() {
	$('#fieldsetFormPrincipal').attr('disabled', 'disabled');
};

IncorpWeb.imprimirRelatorio = function(action, method, values) {
	detectPopupBlocker();
	
	var form = $('<form/>', {
		action : action,
		method : method,
		target : '_blank'
	});

	$.each(values, function(key, val) {
		form.append($('<input/>', {
			type : 'hidden',
			name : key,
			value : val
		}));
	});

	form.appendTo('body').submit();
};

function detectPopupBlocker() {
	var win = window.open("about:blank","","height=100,width=100");
	if (!win) {
		PF('avisoPopup').show();
	} else {
		win.close();					
	}
};

function clickMenuIncorp() {
	$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
	    // Avoid following the href location when clicking
	    event.preventDefault(); 
	    // Avoid having the menu to close when clicking
	    event.stopPropagation(); 
	    // If a menu is already open we close it
	    //$('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
	    // opening the one you clicked on

	    $(this).parent().parent().find('.open').not($(this).parent()).removeClass('open');
	    $(this).parent().addClass('open');

	    var menu = $(this).parent().find("ul");
	    var menupos = menu.offset();
	  
	    if ((menupos.left + menu.width()) + 30 > $(window).width()) {
	        var newpos = - menu.width();      
	    } else {
	        var newpos = $(this).parent().width();
	    }
	    menu.css({ left:newpos });
	    
	});
}

window.onload = function() {
    document.forms[0].elements[0].focus();
};

$.fn.enterkeytab=function(){
	$(this).on('keydown', 'input, select', function(e) {
		var self = $(this)
		, form = self.parents('form:eq(0)')
		, focusable
		, next
		;    

		if (e.keyCode == 13) {
			focusable = form.find('input,a,select,button').filter(':visible').filter(':not([disabled])');
			next = focusable.eq(focusable.index(this)+1);
			if (next.length) {
				next.focus();
			}
			return false;
		}
	});
};
