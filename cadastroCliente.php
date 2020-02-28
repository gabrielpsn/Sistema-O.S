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
	<form class="form-horizontal" role="form" method="post" action="cadastros/inserirClientes.php">
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
			<input class="form-control" type="text" id="dataNasc" name="dataNasc" required>
		</div>
		<div class="form-group">
			<label class="control-label">CPF</label>
			<input class="form-control" type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>
		</div>
		<div class="form-group">
			<label class="control-label">Telefone Principal</label>
			<input class="form-control" type="text" id="telPrinc" name="telPrinc" required>
		</div>
		<div class="form-group">
			<label class="control-label">Telefone Contato</label>
			<input class="form-control" type="text" id="telcont" name="telcont">
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
			<input class="form-control" type="text" id="rua" name="rua" required>
		</div>
		<div class="form-group">
			<label class="control-label">Numero</label>
			<input class="form-control" type="text" id="numero" name="numero" required>
		</div>
		<div class="form-group">
			<label class="control-label">Bairro</label>
			<input class="form-control" type="text" id="bairro" name="bairro" required>
		</div>
		<div class="form-group">
			<label class="control-label">CEP</label>
			<input class="form-control" type="text" id="cep" name="cep" >
		</div>
		<div class="form-group">
			<label class="control-label">Municipio</label>
			<input class="form-control" type="text" id="municipio" name="municipio" required>
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
</body>
</html>