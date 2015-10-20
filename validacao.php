<?php

// Verifica se houve POST e se o usuário ou a senha é(são) vazio(s)
if (!empty($_POST) AND (empty($_POST['usuario']) OR empty($_POST['senha']))) {
	echo "<script>alert('Login ou senha vazio !!!');top.location.href='index.php';</script>"; exit;
}

// Tenta se conectar ao servidor MySQL
@mysql_connect('mysql.hostinger.com.br', 'u915558826_admin', 'lauanny5g1') or trigger_error(mysql_error());
// Tenta se conectar a um banco de dados MySQL
mysql_select_db('u915558826_loja') or trigger_error(mysql_error());

$usuario = mysql_real_escape_string($_POST['usuario']);
$senha = mysql_real_escape_string($_POST['senha']);

// Validação do usuário/senha digitados
$sql = "SELECT `id`, `nome`, `nivel` FROM `usuarios` WHERE (`usuario` = '". $usuario ."') AND (`senha` = '". sha1($senha) ."') AND (`ativo` = 1) LIMIT 1";
$query = mysql_query($sql);
if (mysql_num_rows($query) != 1) {
	// Mensagem de erro quando os dados são inválidos e/ou o usuário não foi encontrado
	echo "<script>alert('Login invalido !!!');top.location.href='index.php';</script>"; exit;
} else {
	// Salva os dados encontados na variável $resultado
	$resultado = mysql_fetch_assoc($query);

	// Se a sessão não existir, inicia uma
	if (!isset($_SESSION)) session_start();

	// Salva os dados encontrados na sessão
	$_SESSION['UsuarioID'] = $resultado['id'];
	$_SESSION['UsuarioNome'] = $resultado['nome'];
	$_SESSION['UsuarioNivel'] = $resultado['nivel'];

	// Redireciona o visitante
	header("Location: restrito.php"); exit;
}

?>