<html>
<head>
	<title>Formulário de Cadastro De Clientes</title>
    <meta charset="UTF-8">
    <script src="http://code.jquery.com/jquery.js"></script>
    
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <script src="js/bootstrap.min.js"></script>
</head>
<body>
<div class="jumbotron">
  <div class="container">
    <h1>Cadastro De Clientes</h1>
    <p>Formulario para efetuar o registro de um cliente em nosso sistema.</p>
  </div>
</div>
<form class="form-horizontal" >
	<fieldset>
		<legend>Dados Pessoais</legend>
		<div class="control-group">
			<label class="control-label">Nome</label>
			<input class="form-control" type="text">
		</div>
		<div class="control-group">
			<label class="control-label">Email</label>
			<span class="input-group-addon">@</span>
			<input class="form-control" type="email" placeholder="email@exemplo.com">
		</div>
		<div class="control-group">
			<label class="control-label">Data Nascimento</label>
			<input class="form-control" type="text">
		</div>
		<div class="control-group">
			<label class="control-label">CPF</label>
			<input class="form-control" type="text" placeholder="000.000.000-00">
		</div>
		<div class="control-group">
			<label class="control-label">Telefone Principal</label>
			<input class="form-control" type="text">
		</div>
		<div class="control-group">
			<label class="control-label">Telefone Contato</label>
			<input class="form-control" type="text">
		</div>
	</fieldset>
	<fieldset>
		<legend>Dados de Usuario</legend>
		<div class="control-group">
			<label class="control-label">Login</label>
			<input class="form-control" type="text">
		</div>	
		<div class="control-group">
			<label class="control-label">Senha</label>
			<input class="form-control" type="password">
		</div>
		<div class="control-group">
			<label class="control-label">Confimar Senha</label>
			<input class="form-control" type="password">
		</div>
		<div class="control-group">
			<label class="control-label">Ativo</label>
			<select name="ativo" id="ativo">
				<option value="">Selecione</option>
				<option value="sim">Sim</option>
				<option value="nao">Não</option>
			</select>
		</div>
	</fieldset>
	<fieldset>
		<legend>Dados Endereço</legend>
		<div class="control-group">
			<label class="control-label">Rua</label>
			<input class="form-control" type="text">
		</div>
		<div class="control-group">
			<label class="control-label">Numero</label>
			<input class="form-control" type="text">
		</div>
		<div class="control-group">
			<label class="control-label">Bairro</label>
			<input class="form-control" type="text">
		</div>
		<div class="control-group">
			<label class="control-label">CEP</label>
			<input class="form-control" type="text">
		</div>
		<div class="control-group">
			<label class="control-label">Municipio</label>
			<input class="form-control" type="text">
		</div>
		<div class="control-group">
			<label class="control-label">UF</label>
			<select name="uf" id="uf">
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
	<div class="controls">		
		<button class="btn btn-primary" type="submit">
			<span class="glyphicon glyphicon-thumbs-up"></span>
			Cadastrar</button>
		<button type="reset">Limpar Dados</button>
	</div>
</form>
</body>
</html>