var IncorpWeb = IncorpWeb || {};

$($('#formCadastro').parent()).delegate('#formCadastro\\:dataTableLancamentoRecorrenteDebitos tr', 'click', function() {
	PF('dataTableCreditos').unselectAllRows();
});

$($('#formCadastro').parent()).delegate('#formCadastro\\:dataTableLancamentoRecorrenteCreditos tr', 'click', function() {
	PF('dataTableDebitos').unselectAllRows();
});