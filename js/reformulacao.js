var IncorpWeb = IncorpWeb || {};

IncorpWeb.gerarHistoricoAutomaticoReformulacao = function() {	
	  
	var str = "REFORMULAÇÃO COM DATA DE REGISTRO EM [DATA_REGISTRO], EXERCÍCIO [EXERCICIO], TIPO DE DOTAÇÃO [TIPO_DOTACAO], " +
			  "TIPO DE REFORMULAÇÃO [TIPO_REFORMULACAO], CONTA CONTÁBIL [CONTA], CUJO VALOR É DE R$ [VALOR]";
	
	str = str.replace("[EXERCICIO]", $('#formCadastro\\:exercicioFiscalInput').val());
	str = str.replace("[DATA_REGISTRO]", $('#formCadastro\\:dataRegistroInput').val());	
	str = str.replace("[TIPO_DOTACAO]", $('#formCadastro\\:tipoDotacaoInput option:selected').text());
	str = str.replace("[TIPO_REFORMULACAO]", $('#formCadastro\\:tipoReformulacaoInput option:selected').text());
	str = str.replace("[CONTA]", $('#formCadastro\\:contaContabilInput\\:contaContabilInput_input').val());
	str = str.replace("[VALOR]", $('#formCadastro\\:valoroInput').val());
	
	$('#formCadastro\\:historicoInput').text(str);
};