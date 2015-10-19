var IncorpWeb = IncorpWeb || {};

IncorpWeb.prencherHistoricoTexto = function (atual, anterior) {
	var valor = $('#formCadastro\\:historicoInput').val();
	var textoNovo = valor.replace(anterior, '');
	$('#formCadastro\\:historicoInput').val(atual + textoNovo);
};

IncorpWeb.getFocusLancamentoRecorrente = function () {
	$('#formCadastro\\:lancamentoInput_input').focus();
};

$($('#formCadastro').parent()).delegate('#formCadastro\\:dataTableLancamentoDebitos tbody tr', 'click', function() {
	PF('dataTableCreditos').unselectAllRows();
});

$($('#formCadastro').parent()).delegate('#formCadastro\\:dataTableLancamentoCreditos tbody tr', 'click', function() {
	PF('dataTableDebitos').unselectAllRows();
});

$('#formCadastro\\:historicoInput').on('keydown', function(e) {
	  if  (e.which == 13) {
		  $('#formCadastro\\:botaoAdicionar').click();
		  $('#formCadastro\\:contaContabiSelecionadalInput\\:contaContabiSelecionadalInput_input').get(0).focus();
 }
});

$('form#formCadastro').enterkeytab();

