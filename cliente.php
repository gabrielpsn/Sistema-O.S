<?php

// A sessão precisa ser iniciada em cada página diferente
if (!isset($_SESSION)) session_start();

?>

<html>
<head>
	<title></title>
	
</head>
<body>

<h1>Página de clientes</h1>
<p>Olá, <?php echo $_SESSION['UsuarioNome']; ?>!</p></br>

<a href="logout.php">Sair</a>

</body>




</html>