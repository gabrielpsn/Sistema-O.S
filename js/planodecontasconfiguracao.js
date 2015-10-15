var IncorpWeb = IncorpWeb || {};

$($('#formCadastro').parent()).delegate('#formCadastro\\:aderenteNBCASPInput', 'switchChange.bootstrapSwitch', function() {	
	$('#formCadastro\\:aderenteNBCASPInputButtonHidden').click();	  
});

IncorpWeb.apagarCampoMascara = function(){
	$('#formCadastro\\:mascaraInput').val('');
}