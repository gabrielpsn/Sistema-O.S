var IncorpWeb = IncorpWeb || {};

/*       gerando Historico automatico       */

IncorpWeb.gerarHistoricoAutomaticoTransposicao = function() {	
	  
	var str = "TRANSPOSIÇÃO COM DATA DE REGISTRO EM [DATA_REGISTRO], EXERCÍCIO [EXERCICIO] E TIPO DE DOTAÇÃO [TIPO_DOTACAO]";
	
	str = str.replace("[EXERCICIO]", $('#formCadastro\\:exercicioFiscalInput').val());
	str = str.replace("[DATA_REGISTRO]", $('#formCadastro\\:dataRegistroInput').val());
	str = str.replace("[TIPO_DOTACAO]", $('#formCadastro\\:tipoDotacaoInput option:selected').text());
		
	$('#formCadastro\\:historicoInput').text(str);
};

/* FIM do Script  */