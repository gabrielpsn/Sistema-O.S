<form>
	<fieldset>
		<legend>Dados Pessoais</legend>
		<div>
			<label>Nome</label>
			<input type="text">
		</div>
		<div>
			<label>Email</label>
			<input type="email">
		</div>
		<div>
			<label>Data Nascimento</label>
			<input type="text">
		</div>
		<div>
			<label>CPF</label>
			<input type="cpf">
		</div>
		<div>
			<label>Telefone Principal</label>
			<input type="text">
		</div>
		<div>
			<label>Telefone Contato</label>
			<input type="text">
		</div>
	</fieldset>
	<fieldset>
		<legend>Dados de Usuario</legend>
		<div>
			<label>Login</label>
			<input type="text">
		</div>	
		<div>
			<label>Senha</label>
			<input type="password">
		</div>
		<div>
			<label>Confimar Senha</label>
			<input type="password">
		</div>
		<div>
			<label>Ativo</label>
			<select name="ativo" id="ativo">
				<option value="">Selecione</option>
				<option value="sim">Sim</option>
				<option value="nao">Não</option>
			</select>
		</div>
	</fieldset>
	<fieldset>
		<legend>Dados Endereço</legend>
		<div>
			<label>Rua</label>
			<input type="text">
		</div>
		<div>
			<label>Numero</label>
			<input type="text">
		</div>
		<div>
			<label>Bairro</label>
			<input type="text">
		</div>
		<div>
			<label>CEP</label>
			<input type="text">
		</div>
		<div>
			<label>Municipio</label>
			<input type="text">
		</div>
		<div>
			<label>UF</label>
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
	<div>
		<button type="submit">Cadastrar</button>
		<button type="reset">Limpar Dados</button>
	</div>
</form>