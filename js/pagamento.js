var IncorpWeb = IncorpWeb || {};

IncorpWeb.fecharDialogoConfirmacaoPagamento = function () {
	$('#removerPagamentoModal').modal('hide');
};

IncorpWeb.exibirDialogoConfirmacaoPagamento = function () {
	$('#removerPagamentoModal').modal('show');
};

$('form#formCadastro').enterkeytab();