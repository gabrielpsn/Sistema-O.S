<html>
<head>
	<title>Formulário de Cadastro De Clientes</title>
    <meta charset="UTF-8">
    <script src="http://code.jquery.com/jquery.js"></script>
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../css/validaformulario.css">
    <script src="js/bootstrap.min.js"></script>
</head>
<body>
<div class="jumbotron">
  <div class="container">
    <h1>Cadastro De Clientes</h1>
    <p>Formulario para efetuar o registro de um cliente em nosso sistema.</p>
  </div><!-- fim do caontainer -->
</div><!-- fim do jumbotron -->
<div class="container" id="formulario">
	<form class="form-horizontal" role="form" method="post" action="#">
	<fieldset>
		<legend>Dados Pessoais</legend>
		<div class="form-group">
			<label class="control-label">Nome</label>
			<input class="form-control" type="text" id="nome" name="nome" required autofocus>
		</div>
		<div class="form-group">
			<label class="control-label">Email</label>
			<div class="input-group">
      			<span class="input-group-addon">@</span>
      			<input type="email" class="form-control" id="email" name="email" placeholder="exemplo@exemplo.com" required>
  			</div>
		</div>
		<div class="form-group">
			<label class="control-label">Data Nascimento</label>
			<input class="form-control" type="date" id="dataNasc" name="dataNasc" required>
		</div>
		<div class="form-group">
			<label class="control-label">CPF</label>
			<input class="form-control" type="text" id="cpf" name="cpf" placeholder="000.000.000-00" onkeypress="mascara(this, '###.###.###-##')" maxlength="14" required>
		</div>
		<div class="form-group">
			<label class="control-label">Telefone Principal</label>
			<input class="form-control" type="tel" id="telPrinc" name="telPrinc" onkeypress="mascara(this, '## # ####-####')" maxlength="14" required>
		</div>
		<div class="form-group">
			<label class="control-label">Telefone Contato</label>
			<input class="form-control" type="tel" id="telcont" name="telcont" onkeypress="mascara(this, '## # ####-####')" maxlength="14">
		</div>
	</fieldset>
	<fieldset>
		<legend>Dados de Usuario</legend>
		<div class="form-group">
			<label class="control-label">Login</label>
			<input class="form-control" type="text" id="login" name="login" required>
		</div>	
		<div class="form-group">
			<label class="control-label">Senha</label>
			<input class="form-control" type="password" id="senha" name="senha" required>
		</div>
		<div class="form-group">
			<label class="control-label">Confimar Senha</label>
			<input class="form-control" type="password" id="senhaconfirma" name="senhaconfirma" required>
		</div>
		<div class="form-group">
			<label class="control-label">Ativo</label>
			<select name="ativo" class="form-control" id="ativo">
				<option value="">Selecione</option>
				<option value="sim">Sim</option>
				<option value="nao">Não</option>
			</select>
		</div>
	</fieldset>
	<fieldset>
		<legend>Dados Endereço</legend>
		<div class="form-group">
			<label class="control-label">Rua</label>
			<input class="form-control" type="text" required>
		</div>
		<div class="form-group">
			<label class="control-label">Numero</label>
			<input class="form-control" type="text" required>
		</div>
		<div class="form-group">
			<label class="control-label">Bairro</label>
			<input class="form-control" type="text" required>
		</div>
		<div class="form-group">
			<label class="control-label">CEP</label>
			<input class="form-control" type="text" onkeypress="mascara(this, '#####-###')" maxlength="9">
		</div>
		<div class="form-group">
			<label class="control-label">Municipio</label>
			<input class="form-control" type="text" required>
		</div>
		<div class="form-group">
			<label class="control-label">UF</label>
			<select name="uf" class="form-control" id="uf">
				<option value="">Selecione</option>
				<option value="AC">AC</option>
				<option value="AL">AL</option>
				<option value="AM">AM</option>
				<option value="AP">AP</option>
				<option value="BA">BA</option>
				<option value="CE">CE</option>
				<option value="DF">DF</option>
				<option value="ES">ES</option>
				<option value="GO">GO</option>
				<option value="MA">MA</option>
				<option value="MG">MG</option>
				<option value="MS">MS</option>
				<option value="MT">MT</option>
				<option value="PA">PA</option>
				<option value="PB">PB</option>
				<option value="PE">PE</option>
				<option value="PI">PI</option>
				<option value="PR">PR</option>
				<option value="RJ">RJ</option>
				<option value="RN">RN</option>
				<option value="RS">RS</option>
				<option value="RO">RO</option>
				<option value="RR">RR</option>
				<option value="SC">SC</option>
				<option value="SE">SE</option>
				<option value="SP">SP</option>
				<option value="TO">TO</option>
 			</select>
		</div>
	</fieldset>
	<div class="controls form-group">		
		<button class="btn btn-primary" type="submit">
			<span class="glyphicon glyphicon-thumbs-up"></span>
			Cadastrar</button>
		<button type="reset" class="btn btn-danger">Limpar Dados</button>
	</div>
</form>

</div><!-- fim da div formulario -->

 <script language="JavaScript">
 /*
 A função Mascara tera como valores no argumento os dados inseridos no input (ou no evento onkeypress)
 onkeypress="mascara(this, '## ####-####')"
 onkeypress = chama uma função quando uma tecla é pressionada, no exemplo acima, chama a função mascara e define os valores do argumento na função
 O primeiro valor é o this, é o Apontador/Indicador da Mascara, o '## ####-####' é o modelo / formato da mascara
 no exemplo acima o # indica os números, e o - (hifen) o caracter que será inserido entre os números, ou seja, no exemplo acima o telefone ficara assim: 11-4000-3562
 para o celular de são paulo o modelo deverá ser assim: '## #####-####' [11 98563-1254]
 para o RG '##.###.###.# [40.123.456.7]
 para o CPF '###.###.###.##' [789.456.123.10]
 Ou seja esta mascara tem como objetivo inserir o hifen ou espaço automáticamente quando o usuário inserir o número do celular, cpf, rg, etc 

 lembrando que o hifen ou qualquer outro caracter é contado tambem, como: 11-4561-6543 temos 10 números e 2 hifens, por isso o valor de maxlength será 12
 <input type="text" name="telefone" onkeypress="mascara(this, '## ####-####')" maxlength="12">
 neste código não é possivel inserir () ou [], apenas . (ponto), - (hifén) ou espaço
 */

 function mascara(t, mask){
 var i = t.value.length;
 var saida = mask.substring(1,0);
 var texto = mask.substring(i)
 if (texto.substring(0,1) != saida){
 t.value += texto.substring(0,1);
 }
 }
 </script>
</body>
</html>