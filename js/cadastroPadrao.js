var IncorpWeb = IncorpWeb || {};

IncorpWeb.exibirFormAccordion = function() {
	$('#gridAccordion').collapse('hide');
	$('#formAccordion').collapse('show');
};

IncorpWeb.exibirGridAccordion = function() {
	$('#formAccordion').collapse('hide');
	$('.ui-messages-error').hide();
	$('#gridAccordion').collapse('show');
};

IncorpWeb.fecharDialogoConfirmacaoExclusao = function() {
	$('#removerModal').modal('hide');
};

IncorpWeb.exibirDialogoConfirmacaoExclusao = function() {
	$('#removerModal').modal('show');
};

IncorpWeb.ShowModalAutoriza = function() {
	IncorpWeb.fecharDialogoConfirmacaoExclusao();
	$('#autoriza').modal('show');
};

IncorpWeb.FechaModalAutoriza = function() {
	$('#autoriza').modal('hide');
};

IncorpWeb.exibirPainelOperacoes = function() {
	$('#gridAccordion').collapse('hide');
	function removeFilter() {
		$('#tabelaOperacoesAccordion')
				.unbind('shown.bs.collapse', removeFilter);
		PF('dataTablePermitido').filter();

	}
	$('#tabelaOperacoesAccordion').on('shown.bs.collapse', removeFilter);
	$('#tabelaOperacoesAccordion').collapse('show');

};

IncorpWeb.fecharPainelOperacoes = function() {
	$('#tabelaOperacoesAccordion').collapse('hide');
	$('#gridAccordion').collapse('show');
};

IncorpWeb.exibirPainelGerarAssociacoes = function() {
	$('#gridAccordion').collapse('hide');
	function removeFilter() {
		$('#tabelaGerarAssociacoesAccordion')
				.unbind('shown.bs.collapse', removeFilter);
		PF('dataTableAssociacaoConta').filter();
	}
	$('#tabelaGerarAssociacoesAccordion').on('shown.bs.collapse', removeFilter);
	$('#tabelaGerarAssociacoesAccordion').collapse('show');
};

IncorpWeb.fecharPainelGerarAssociacoes = function() {
	$('#tabelaGerarAssociacoesAccordion').collapse('hide');
	$('#gridAccordion').collapse('show');
};

IncorpWeb.exibirConfirmacaoInclusaoConta = function() {
	$('#confirmarContaRaizModal').modal('show');
};

IncorpWeb.fecharConfirmacaoInclusaoConta = function() {
	$('#confirmarContaRaizModal').modal('hide');
};

IncorpWeb.exibirDialogoParaIncluirCentroDeCustoRaiz = function() {
	$('#dialogoParaIncluirCentroDeCustoRaiz').modal('show');
};

IncorpWeb.fecharDialogoParaIncluirCentroDeCustoRaiz = function() {
	$('#dialogoParaIncluirCentroDeCustoRaiz').modal('hide');
};

IncorpWeb.exibirFormAccordionTelefone = function(tipo) {
	$('#gridAccordionTelefone' + tipo).collapse('hide');
	$('#formAccordionTelefone' + tipo).collapse('show');
};

IncorpWeb.exibirGridAccordionTelefone = function(tipo) {
	$('#formAccordionTelefone' + tipo).collapse('hide');
	$('#gridAccordionTelefone' + tipo).collapse('show');
};

IncorpWeb.fecharDialogoConfirmacaoExclusaoTelefone = function() {
	$('#removerTelefoneModal').modal('hide');
};

IncorpWeb.exibirDialogoConfirmacaoExclusaoTelefone = function() {
	$('#removerTelefoneModal').modal('show');
};

IncorpWeb.exibirPainelConfiguracaoCentroDeCusto = function() {
	$('#gridAccordion').collapse('hide');
	$('#tabelaConfiguracaoAccordion').collapse('show');
};

IncorpWeb.fecharPainelConfiguracaoCentroDeCusto = function() {
	$('#tabelaConfiguracaoAccordion').collapse('hide');
	$('#gridAccordion').collapse('show');
};

IncorpWeb.exibirDialogoParaIncluirHistoricoRaiz = function() {
	$('#dialogoParaIncluirHistoricoRaiz').modal('show');
};

IncorpWeb.fecharDialogoParaIncluirHistoricoRaiz = function() {
	$('#dialogoParaIncluirHistoricoRaiz').modal('hide');
};

IncorpWeb.exibirPainelConfiguracaoHistorico = function() {
	$('#gridAccordion').collapse('hide');
	$('#tabelaConfiguracaoAccordion').collapse('show');
};

IncorpWeb.fecharPainelConfiguracaoHistorico = function() {
	$('#tabelaConfiguracaoAccordion').collapse('hide');
	$('#gridAccordion').collapse('show');
};

IncorpWeb.exibirFormAccordionAssociacaoConta = function() {
	$('#gridAccordionAssociacaoConta').collapse('hide');
	$('#formAccordionAssociacaoConta').collapse('show');
};

IncorpWeb.exibirGridAccordionAssociacaoConta = function() {
	$('#formAccordionAssociacaoConta').collapse('hide');
	$('#gridAccordionAssociacaoConta').collapse('show');
};

IncorpWeb.exibirFormAccordionAssociacaoCentroCusto = function() {
	$('#gridAccordionAssociacaoCentroCusto').collapse('hide');
	$('#formAccordionAssociacaoCentroCusto').collapse('show');
};

IncorpWeb.exibirGridAccordionAssociacaoCentroCusto = function() {
	$('#formAccordionAssociacaoCentroCusto').collapse('hide');
	$('#gridAccordionAssociacaoCentroCusto').collapse('show');
};

IncorpWeb.exibirFormAccordionGrupoContaZeramento = function() {
	$('#gridAccordionConfiguracaoEncerramento').collapse('hide');
	$('#formAccordionGrupoContaZeramento').collapse('show');
};

IncorpWeb.exibirFormAccordionTransferenciaSaldo = function() {
	$('#gridAccordionConfiguracaoEncerramento').collapse('hide');
	$('#formAccordionTransferenciaSaldo').collapse('show');
};

IncorpWeb.fecharFormAccordionGrupoContaZeramento = function() {
	$('#formAccordionGrupoContaZeramento').collapse('hide');
	$('#gridAccordionConfiguracaoEncerramento').collapse('show');	
};

IncorpWeb.fecharFormAccordionTransferenciaSaldo = function() {
	$('#formAccordionTransferenciaSaldo').collapse('hide');
	$('#gridAccordionConfiguracaoEncerramento').collapse('show');	
};

IncorpWeb.fecharDialogoConfirmacaoExclusaoAssociacaoCentroCusto = function() {
	$('#removerAssociacaoCentroCustoModal').modal('hide');
};

IncorpWeb.exibirDialogoConfirmacaoExclusaoAssociacaoCentroCusto = function() {
	$('#removerAssociacaoCentroCustoModal').modal('show');
};

IncorpWeb.exibirDialogoConfirmacaoExclusaoAssociacaoConta = function() {
	$('#removerAssociacaoContaModal').modal('show');
};

IncorpWeb.fecharDialogoConfirmacaoExclusaoAssociacaoConta = function() {
	$('#removerAssociacaoContaModal').modal('hide');
};

IncorpWeb.exibirFormAccordionLancamentoRecorrenteItem = function() {
	$('#gridAccordionLancamentoRecorrenteItem').collapse('hide');
	$('#formAccordionLancamentoRecorrenteItem').collapse('show');
};

IncorpWeb.exibirGridAccordionLancamentoRecorrenteItem = function() {
	$('#formAccordionLancamentoRecorrenteItem').collapse('hide');
	$('#gridAccordionLancamentoRecorrenteItem').collapse('show');
};

IncorpWeb.fecharDialogoConfirmacaoExclusaoLancamentoRecorrenteItem = function() {
	$('#removerLancamentoRecorrenteItemModal').modal('hide');
};

IncorpWeb.exibirDialogoConfirmacaoExclusaoLancamentoRecorrenteItem = function() {
	$('#removerLancamentoRecorrenteItemModal').modal('show');
};

IncorpWeb.exibirFormAccordionLancamentoItem = function() {
	$('#gridAccordionLancamentoItem').collapse('hide');
	$('#formAccordionLancamentoItem').collapse('show');
};

IncorpWeb.exibirGridAccordionLancamentoItem = function() {
	$('#formAccordionLancamentoItem').collapse('hide');
	$('#gridAccordionLancamentoItem').collapse('show');
};

IncorpWeb.fecharDialogoConfirmacaoExclusaoLancamentoItem = function() {
	$('#removerLancamentoItemModal').modal('hide');
};

IncorpWeb.exibirDialogoConfirmacaoExclusaoLancamentoItem = function() {
	$('#removerLancamentoItemModal').modal('show');
};

IncorpWeb.exibirPainelPesquisaLancamento = function() {
	$('#gridAccordion').collapse('hide');
	$('#painelPesquisaAccordion').collapse('show');
};

IncorpWeb.fecharPainelPesquisaLancamento = function() {
	$('#painelPesquisaAccordion').collapse('hide');
	$('#gridAccordion').collapse('show');
};

IncorpWeb.exibirApenasPainelPesquisaLancamento = function() {
	$('#painelPesquisaAccordion').collapse('show');
};

IncorpWeb.gerarHistoricoAutomaticoPreEmpenho = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	var str = "PRÉ-EMPENHO N°. [NUMERO_PRE_EMPENHO], NO VALOR DE R$ [VALOR] DO EXERCÍCIO [EXERCICIO], REF. A DESPESA [CONTA_DESPESA]";
	var numero = $('#formCadastro\\:numeroInput').val();
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO_PRE_EMPENHO]", "[auto]");
	} else {
		str = str.replace("[NUMERO_PRE_EMPENHO]", $('#formCadastro\\:numeroInput').val());
	}
	
	str = str.replace("[VALOR]", $('#formCadastro\\:valorInput').val());
	str = str.replace("[EXERCICIO]", $('#formCadastro\\:exercicioFiscalInput option:selected').text());
	str = str.replace("[CONTA_DESPESA]", $('#formCadastro\\:contaDespesaInput\\:contaDespesaInput_input').val());
	$('#formCadastro\\:historicoInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoAnulacaoPreEmpenho = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	var str = "ANULAÇÃO N°. [NUMERO_ANULACAO] DO PRÉ-EMPENHO N°. [NUMERO_PRE_EMPENHO], NO VALOR DE R$ [VALOR] ";
	str += "DO EXERCÍCIO [EXERCICIO], REF. A DESPESA [CONTA_DESPESA]";
	
	var numero = $('#formCadastro\\:numeroInput').val();
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO_ANULACAO]", "[auto]");
	} else {
		str = str.replace("[NUMERO_ANULACAO]", $('#formCadastro\\:numeroInput').val());
	}
	
	str = str.replace("[NUMERO_PRE_EMPENHO]", $('#formCadastro\\:numeroPreEmpenhoInput').val());
	str = str.replace("[VALOR]", $('#formCadastro\\:valorAnuladoInput').val());
	str = str.replace("[EXERCICIO]", $('#formCadastro\\:exercicioFiscalInput option:selected').text());
	str = str.replace("[CONTA_DESPESA]", $('#formCadastro\\:contaDespesaInput').val());
	$('#formCadastro\\:historicoInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoEmpenho = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	var str = "EMPENHO N°. [NUMERO_EMPENHO], NO VALOR DE [VALOR] DO EXERCÍCIO [EXERCICIO], REF. A DESPESA [CONTA_DESPESA] ";
	str += "PARA O CREDOR [CONTA_CREDOR]";
	
	var numero = $('#formCadastro\\:numeroInput').val();
	
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO_EMPENHO]", "[auto]");
	} else {
		str = str.replace("[NUMERO_EMPENHO]", $('#formCadastro\\:numeroInput').val());
	}
	
	str = str.replace("[VALOR]", $('#formCadastro\\:valorEmpenhoInput').val());
	str = str.replace("[EXERCICIO]", $('#formCadastro\\:exercicioFiscalInput option:selected').text());
	str = str.replace("[CONTA_DESPESA]", $('#formCadastro\\:contaDespesaInput\\:contaDespesaInput_input').val());
	str = str.replace("[CONTA_CREDOR]", $('#formCadastro\\:credorInput\\:credorInput_input').val());
	$('#formCadastro\\:historicoInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoAnulacaoEmpenho = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	var str = "ANULAÇÃO N°. [NUMERO_ANULACAO] DO EMPENHO N°. [NUMERO_EMPENHO], NO VALOR DE [VALOR] DO EXERCÍCIO [EXERCICIO], ";
	str += "REF. A DESPESA [CONTA_DESPESA] PARA O CREDOR [CONTA_CREDOR]";
	
	var numero = $('#formCadastro\\:numeroInput').val();
	
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO_ANULACAO]", "[auto]");
	} else {
		str = str.replace("[NUMERO_ANULACAO]", numero);
	}
	
	str = str.replace("[NUMERO_EMPENHO]", $('#formCadastro\\:numeroEmpenhoInput').val());
	str = str.replace("[VALOR]", $('#formCadastro\\:valorAnuladoInput').val());
	str = str.replace("[EXERCICIO]", $('#formCadastro\\:exercicioFiscalInput').val());
	str = str.replace("[CONTA_DESPESA]", $('#formCadastro\\:contaDespesaInput').val());
	str = str.replace("[CONTA_CREDOR]", $('#formCadastro\\:credorInput').val());
	$('#formCadastro\\:historicoInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoLiquidacao = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	var str = "LIQUIDAÇÃO Nº. [NUMERO_LIQUIDACAO], NO VALOR DE R$ [VALOR], [EMPENHO][RESTOS_A_PAGAR]";
	str += ", DO EXERCÍCIO [EXERCICIO], REF. A DESPESA [CONTA_DESPESA] PARA O CREDOR [CONTA_CREDOR]";
	
	var numero = $('#formCadastro\\:numeroInput').val();
	
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO_LIQUIDACAO]", "[auto]");
	} else {
		str = str.replace("[NUMERO_LIQUIDACAO]", numero);
	}
	
	str = str.replace("[VALOR]", $('#formCadastro\\:valorInput').val());
	var empenho = $('#formCadastro\\:empenhoInput\\:empenhoInput_input').val();
	if (empenho != null && empenho != '') {
		str = str.replace("[EMPENHO]", "REF. AO EMPENHO N°. " + empenho);
	} else {
		str = str.replace("[EMPENHO]", "");
	}
	
	var restosAPagar = $('#formCadastro\\:restosAPagarInput\\:restosAPagarInput_input').val();
	if (restosAPagar != null && restosAPagar != '') {
		str = str.replace("[RESTOS_A_PAGAR]", "REF. AO RESTOS A PAGAR N°. " + restosAPagar);
	} else {
		str = str.replace("[RESTOS_A_PAGAR]", "");
	}
	
	var exercicio = $('#formCadastro\\:exercicioFiscalInput').val();
	if (exercicio != null && exercicio != '') {
		str = str.replace("[EXERCICIO]", exercicio);
	} else {
		exercicio = $('#formCadastro\\:exercicioFiscalRestosAPagarInput').val();
		if (exercicio != null && exercicio != '') {
			str = str.replace("[EXERCICIO]", exercicio);
		}
	}

	var conta = $('#formCadastro\\:contaDespesaInput').val();
	if (conta != null && conta != '') {
		str = str.replace("[CONTA_DESPESA]", conta);
	} else {
		conta = $('#formCadastro\\:contaRestosAPagarInput').val();
		if (conta != null && conta != '') {
			str = str.replace("[CONTA_DESPESA]", conta);
		}
	}

	var credorEmpenho = $('#formCadastro\\:credorInput').val();
	if (credorEmpenho != null && credorEmpenho != '') {
		str = str.replace("[CONTA_CREDOR]", credorEmpenho);
	}
	
	var credorRestosAPagar = $('#formCadastro\\:credorRestosAPagarInput').val();
	if (credorRestosAPagar != null && credorRestosAPagar != '') {
		str = str.replace("[CONTA_CREDOR]", credorRestosAPagar);
	}
	
	$('#formCadastro\\:historicoLiquidacaoInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoLiquidacaoNoPagamento = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	var str = "LIQUIDAÇÃO Nº. [NUMERO_LIQUIDACAO], NO VALOR DE R$ [VALOR] REF. AO [EMPENHO][RESTOS_A_PAGAR], ";
	str += "DO EXERCÍCIO [EXERCICIO], REF. [CONTA], PARA O CREDOR [CONTA_CREDOR]";
	
	var numero = $('#formCadastro\\:numeroLiquidacaoInput').val();
	
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO_LIQUIDACAO]", "[auto]");
	} else {
		str = str.replace("[NUMERO_LIQUIDACAO]", numero);
	}
	
	var empenho = $('#formCadastro\\:empenhoInput\\:empenhoInput_input').val();
	if (empenho != null) {
		str = str.replace("[EMPENHO]", $('EMPENHO N°. ' + '#formCadastro\\:empenhoInput\\:empenhoInput_input').val());
		str = str.replace("[CONTA]", $('A DESPESA ' + '#formCadastro\\:contaDespesaInput').val());
		str = str.replace("[CONTA_CREDOR]", $('#formCadastro\\:credorInput').val());
		str = str.replace("[EXERCICIO]", $('#formCadastro\\:exercicioFiscalInput').val());
	} else {
		str = str.replace("[EMPENHO]", '');
	}
	
	var restosAPagar = $('#formCadastro\\:restosAPagarInput\\:restosAPagarInput_input').val();
	if (restosAPagar != null) {
		str = str.replace("[RESTOS_A_PAGAR]", 'RESTOS A PAGAR N°. ' + $('#formCadastro\\:restosAPagarInput\\:restosAPagarInput_input').val());
		str = str.replace("[CONTA]", 'A CONTA ' + $('#formCadastro\\:contaDespesaRestosAPagarInput').val());
		str = str.replace("[CONTA_CREDOR]", $('#formCadastro\\:credorRestosAPagarInput').val());
		str = str.replace("[EXERCICIO]", $('#formCadastro\\:exercicioFiscalRestosAPagarInput').val());
	} else {
		str = str.replace("[RESTOS_A_PAGAR]", '');
	}
	
	str = str.replace("[VALOR]", $('#formCadastro\\:valorLiquidacaoInput').val());
	
	$('#formCadastro\\:historicoLiquidacaoInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoCancelamentoLiquidacao = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	var str = "CANCELAMENTO N°.[NUMERO_CANCELAMENTO] LIQUIDAÇÃO Nº. [NUMERO_LIQUIDACAO], NO VALOR DE R$ [VALOR] ";
	str += "REF. AO EMPENHO N°. [NUMERO_EMPENHO] REF. A DESPESA [CONTA_DESPESA] PARA O CREDOR [CONTA_CREDOR]";
	
	var numero = $('#formCadastro\\:numeroInput').val();
	
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO_CANCELAMENTO]", "[auto]");
	} else {
		str = str.replace("[NUMERO_CANCELAMENTO]", numero);
	}
	
	str = str.replace("[NUMERO_LIQUIDACAO]", $('#formCadastro\\:liquidacaoNumeroInputHidden').val());
	str = str.replace("[VALOR]", $('#formCadastro\\:valorInput').val());
	str = str.replace("[NUMERO_EMPENHO]", $('#formCadastro\\:empenhoNumeroInputHidden').val());
	str = str.replace("[EXERCICIO]", $('#formCadastro\\:exercicioFiscalInput').val());
	str = str.replace("[CONTA_DESPESA]", $('#formCadastro\\:contaDespesaInput').val());
	str = str.replace("[CONTA_CREDOR]", $('#formCadastro\\:credorInput').val());
	$('#formCadastro\\:historicoInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoPrevisaoDeReceita = function() {	
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	  
	var str = "PREVISÃO DE CRÉDITOS A RECEBER REF. A RECEITA DE [CONTA_DE_RECEITA]. ";
	
	str = str.replace("[CONTA_DE_RECEITA]", $('#formCadastro\\:contaReceitaInput\\:contaReceitaInput_input').val());	
		
	$('#formCadastro\\:historicoPrevisaoDeReceitaInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoReceita = function() {	
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	  
	var str = "RECEITA NO VALOR DE R$ [VALOR_RECEITA] REF. AO CRÉDITO DE [CONTA_DE_RECEITA]";
	
	str = str.replace("[CONTA_DE_RECEITA]", $('#formCadastro\\:contaReceitaInput\\:contaReceitaInput_input').val());
	str = str.replace("[VALOR_RECEITA]", $('#formCadastro\\:valorLiquidoInput').val());
		
	$('#formCadastro\\:historicoReceitaInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoPagamento = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	var str = "PAGAMENTO Nº. [NUMERO_PAGAMENTO], NO VALOR DE R$ [VALOR], DO EXERCÍCIO [EXERCICIO], [LIQUIDACAO][RESTOS_A_PAGAR], ";
	str += "[EMPENHO][RESTOS_A_PAGAR_LIQUIDACAO], [CONTA] - PAGO AO CREDOR [CONTA_CREDOR]";
	
	var numero = $('#formCadastro\\:numeroInput').val();
	
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO_PAGAMENTO]", "[auto]");
	} else {
		str = str.replace("[NUMERO_PAGAMENTO]", numero);
	}
	
	str = str.replace("[VALOR]", $('#formCadastro\\:valorBrutoInput').val());
	
	var empenho = $('#formCadastro\\:empenhoInput\\:empenhoInput_input').val();
	var restosAPagar = $('#formCadastro\\:restosAPagarInput\\:restosAPagarInput_input').val();
	var liquidacao = $('#formCadastro\\:liquidacaoInput\\:liquidacaoInput_input');
	var numero_liquidacao = $('#formCadastro\\:numeroLiquidacaoInputHidden').val();
	
	var existeLiquidacao = liquidacao != null || numero_liquidacao != null;
	if (existeLiquidacao) {
		if (restosAPagar != null) {
			str = str.replace("[RESTOS_A_PAGAR_LIQUIDACAO]", 'DO RESTOS A PAGAR N°. ' + restosAPagar);
		} else {
			str = str.replace("[RESTOS_A_PAGAR_LIQUIDACAO]", '');
		}
		
		if(numero_liquidacao == null || numero_liquidacao.toLowerCase() == 'auto'){
			numero_liquidacao = $('#formCadastro\\:numeroLiquidacaoInput').val();
			
			if (numero_liquidacao == null || numero_liquidacao.toLowerCase() == 'auto') {
				numero_liquidacao = "[auto_liquidacao]";
			}
			
			str = str.replace("[LIQUIDACAO]", 'REF. A LIQUIDAÇÃO Nº. ' + numero_liquidacao);
		}
	} else {
		str = str.replace("[LIQUIDACAO]", '');
	}
	
	if (empenho != null) {
		str = str.replace("[EMPENHO]", 'DO EMPENHO N°. ' + empenho);
		str = str.replace("[EXERCICIO]", $('#formCadastro\\:exercicioFiscalInput').val());
		str = str.replace("[CONTA]", 'REF. A DESPESA ' + $('#formCadastro\\:contaDespesaInput').val());
		str = str.replace("[CONTA_CREDOR]", $('#formCadastro\\:credorInput').val());
	} else {
		str = str.replace("[EMPENHO]", '');
	}
	
	if (restosAPagar != null) {
		if (!existeLiquidacao) {
			str = str.replace("[RESTOS_A_PAGAR]", restosAPagar);
		} else {
			str = str.replace("[RESTOS_A_PAGAR]", '');
		}
		
		str = str.replace("[CONTA]", 'A CONTA ' + $('#formCadastro\\:contaDespesaRestosAPagarInput').val());
		str = str.replace("[CONTA_CREDOR]", $('#formCadastro\\:credorRestosAPagarInput').val());
		str = str.replace("[EXERCICIO]", $('#formCadastro\\:exercicioFiscalRestosAPagarInput').val());
	}
	
	$('#formCadastro\\:historicoPagamentoInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoEstornoPagamento = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	var str = "ESTORNO N°. [NUMERO_ESTORNO] NO VALOR DE R$ [VALOR] REF. AO PAGAMENTO Nº. [NUMERO_PAGAMENTO] NO VALOR DE R$ [VALOR_BRUTO] ";
	str += " REF. A DESPESA [CONTA_DESPESA] - PAGO AO CREDOR [CONTA_CREDOR]";
	
	var numero = $('#formCadastro\\:numeroInput').val();
	
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO_ESTORNO]", "[auto]");
	} else {
		str = str.replace("[NUMERO_ESTORNO]", numero);
	}
	
	str = str.replace("[NUMERO_PAGAMENTO]", $('#formCadastro\\:numeroPagtoInput\\:numeroPagtoInput_input').val());
	str = str.replace("[VALOR]", $('#formCadastro\\:valorInput').val());
	str = str.replace("[VALOR_BRUTO]", $('#formCadastro\\:valorBrutoInput').val());
	str = str.replace("[CONTA_DESPESA]", $('#formCadastro\\:contaDespesaInput').val());
	str = str.replace("[CONTA_CREDOR]", $('#formCadastro\\:credorInput').val());
	$('#formCadastro\\:historicoInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoAdiantamentoSuprimento = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	//SUPRIMENTO DE FUNDOS DE [PERIODO_INICIAL] ATÉ [PERIODO_FINAL] PAGO EM FAVOR DE [FAVORECIDO],
	//NA FORMA DE [FORMA_PAGAMENTO] - Nº. [NUMERO_FORMA_PAGAMENTO] - TIPO DOC. [TIPO_DOCUMENTO] Nº. [NUMERO_TIPO_DOCUMENTO].
	var str = "SUPRIMENTO DE FUNDOS Nº [NUMERO], EM [DATA], PERÍODO DE [PERIODO_INICIAL] ATÉ [PERIODO_FINAL] PAGO EM FAVOR DE [FAVORECIDO], ";
	str += "NA FORMA DE [FORMA_PAGAMENTO] - Nº. [NUMERO_FORMA_PAGAMENTO] - TIPO DOC. [TIPO_DOCUMENTO] Nº. [NUMERO_TIPO_DOCUMENTO].";
	
	var numero = $('#formCadastro\\:numeroInputHidden').val();
	
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO]", "[auto]");
	} else {
		str = str.replace("[NUMERO]", numero);
	}
	
	str = str.replace("[DATA]", $('#formCadastro\\:dataAdiantamentoInput').val());
	str = str.replace("[PERIODO_INICIAL]", $('#formCadastro\\:dataInicioInput').val());
	str = str.replace("[PERIODO_FINAL]", $('#formCadastro\\:dataFinalInput').val());
	str = str.replace("[FAVORECIDO]", $('#formCadastro\\:favorecidoInput\\:favorecidoInput_input').val());
	str = str.replace("[FORMA_PAGAMENTO]", $('#formCadastro\\:formaPagamentoInput option:selected').text());
	str = str.replace("[NUMERO_FORMA_PAGAMENTO]", $('#formCadastro\\:numeroFormaPagamentoInput').val());
	str = str.replace("[TIPO_DOCUMENTO]", $('#formCadastro\\:tipoDocumentoInput').val());
	str = str.replace("[NUMERO_TIPO_DOCUMENTO]", $('#formCadastro\\:numeroDocumentoInput').val());
	$('#formCadastro\\:historicoAdiantamentoSuprimentoInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoPrestacaoConta = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	//PRESTAÇÃO DE CONTAS DO SUPRIMENTO DE FUNDOS Nº. [NUMERO_ADIANTAMENTO_SUPRIMENTO] DA DATA DE [DATA_SUPRIMENTO] 
	//PAGO EM FAVOR DE [FAVORECIDO DO SUPRIMENTO] - TIPO DOC. [TIPO_DOCUMENTO] Nº. [NUMERO_TIPO_DOCUMENTO]
	var str = "PRESTAÇÃO DE CONTAS DO SUPRIMENTO DE FUNDOS Nº. [NUMERO_ADIANTAMENTO_SUPRIMENTO] DA DATA DE [DATA_SUPRIMENTO] ";
	str += "PAGO EM FAVOR DE [FAVORECIDO DO SUPRIMENTO] - TIPO DOC. [TIPO_DOCUMENTO] Nº. [NUMERO_TIPO_DOCUMENTO].";
	str = str.replace("[NUMERO_ADIANTAMENTO_SUPRIMENTO]", $('#formPrestacaoConta\\:numeroSuprimentoPrestacaoContaInput').val());
	str = str.replace("[DATA_SUPRIMENTO]", $('#formPrestacaoConta\\:dataSuprimentoPrestacaoContaInput').val());
	str = str.replace("[FAVORECIDO DO SUPRIMENTO]", $('#formPrestacaoConta\\:favorecidoPrestacaoContaInput\\:favorecidoPrestacaoContaInput_input').val());
	str = str.replace("[TIPO_DOCUMENTO]", $('#formPrestacaoConta\\:tipoDocumentoPrestacaoContaInput').val());
	str = str.replace("[NUMERO_TIPO_DOCUMENTO]", $('#formPrestacaoConta\\:numeroDocumentoPrestacaoContaInput').val());
	$('#formPrestacaoConta\\:historicoPrestacaoContaInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoRestosAPagar = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	var str = "RESTOS A PAGAR Nº [NUMERO]";
	
	var numero = $('#formCadastro\\:numeroInput').val();
	
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO]", "[auto]");
	} else {
		str = str.replace("[NUMERO]", numero);
	}
	
	$('#formCadastro\\:historicoRestosAPagarInput').text(str);
};

IncorpWeb.gerarHistoricoAutomaticoRecolhimentoTributos = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	
	var str = "RECOLHIMENTO DE TRIBUTOS Nº [NUMERO], ENCARGO [ENCARGO] DO TIPO [TIPO], EM FAVOR DE [FAVORECIDO], NA FORMA DE [FORMA_PAGAMENTO][NUMERO_FORMA_PAGAMENTO]";
	
	var numero = $('#formCadastro\\:numeroInput').val();
	str = str.replace("[ENCARGO]", $('#formCadastro\\:encargoInput\\:encargoInput_input').val());
	str = str.replace("[TIPO]", $('#formCadastro\\:tipoInput').val());
	str = str.replace("[FAVORECIDO]", $('#formCadastro\\:credorInput\\:credorInput_input').val());
	var numeroFormaPagamento = $('#formCadastro\\:numeroFormaPagamentoInput').val().trim();
	if (numeroFormaPagamento != '') {
		str = str.replace("[NUMERO_FORMA_PAGAMENTO]", numeroFormaPagamento);
	} else {
		str = str.replace("[NUMERO_FORMA_PAGAMENTO]", "");
	}
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO]", "[auto]");
	} else {
		str = str.replace("[NUMERO]", numero);
	}
	
	str = str.replace("[FORMA_PAGAMENTO]", $('#formCadastro\\:formaPagamentoInput option:selected').text());
	
	$('#formCadastro\\:historicoRecohimentoTributosInput').text(str);
};

IncorpWeb.historicoRestosAPagarCancelamento = function() {
	if ($('#entidadeNova').val() == 'false') {
		return;
	}
	var str = "CANCELAMENTO DE RESTOS A PAGAR Nº [NUMERO], RESTOS A PAGAR Nº [RESTOS_A_PAGAR]";
	
	var numero = $('#formCadastro\\:numeroInput').val();
	
	if (numero == null || numero.toLowerCase() == 'auto') {
		str = str.replace("[NUMERO]", "[auto]");
	} else {
		str = str.replace("[NUMERO]", numero);
	}
	
	str = str.replace("[RESTOS_A_PAGAR]", $('#formCadastro\\:restosAPagarInput\\:restosAPagarInput_input').val());
	
	$('#formCadastro\\:historicoRestosAPagarCancelamentoInput').text(str);
};

IncorpWeb.exibirDialogoHistoricoParametros = function(value) {
	if (value) {
		
		var matches = [];

		value.replace(/\|(.*?)\|/g, function(g0,g1){matches.push(g1);});
		
		alert(matches);
		
		alert($('#formCadastro\\:historicoPadraoDescricao').val());
		
		$("#xxxx").mask(matches[0]);
		
		$('#informarHistoricoPadraoDiv').modal('show');
		
	}
};

IncorpWeb.exibirDialogoHistoricoParametros = function() {
	$('#informarHistoricoPadraoDiv').modal('show');
};

IncorpWeb.fecharDialogoHistoricoParametros = function() {
	$('#informarHistoricoPadraoDiv').modal('hide');
};

IncorpWeb.aplicarMascara = function (elemento, mascara) {
	if (mascara != '') {
		$(elemento).mask(mascara);
	}
};

$.ready(function (){
   $('form#formCadastro').enterkeytab();
});