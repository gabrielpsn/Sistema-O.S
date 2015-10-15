var IncorpWeb = IncorpWeb || {};

$($('#formCadastro').parent()).delegate('#formCadastro\\:percentualInput', 'switchChange.bootstrapSwitch', function() {	
	$('#formCadastro\\:percentualButtonHidden').click();	  
});

$('form#formCadastro').enterkeytab();

IncorpWeb.gerarHistoricoAutomaticoEncargos = function() {	
	  
	var str = "[NOME_ENCARGO] CÓDIGO Nº. [CODIGO], DO TIPO [TIPO_ENCARGO], [VALOR_TIPO] [VALOR]";
	
	str = str.replace("[CODIGO]", $('#formCadastro\\:codigoInput').val());
	str = str.replace("[NOME_ENCARGO]", $('#formCadastro\\:nomeInput').val());
	str = str.replace("[TIPO_ENCARGO]", $('#formCadastro\\:tipoInput option:selected').text());
	
	if ($('#formCadastro\\:valorInput2').length === 1) {
		str = str.replace("[VALOR_TIPO]", "CUJO PERCENTUAL É DE");
		str = str.replace("[VALOR]", $('#formCadastro\\:valorInput2').val());
		str = str.concat("%");
	}
	else {	
		str = str.replace("[VALOR_TIPO]", "CUJO VALOR É DE R$");
		str = str.replace("[VALOR]", $('#formCadastro\\:valorInput1').val());
	}		
	
	$('#formCadastro\\:historicoInput').text(str);
};
