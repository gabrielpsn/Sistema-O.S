<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title><?php print($cabecalho); ?></title>
		<link rel="stylesheet" href="css/reset.css">
		<link rel="stylesheet" href="css/estilos.css">
		<link rel="stylesheet" href="css/mobile.css" media="(max-width: 939px)">
	</head>
	<body>
		<header class="container">
			<h1>
				<img src="img/logo.png" alt="Ipsep Informatica">
			</h1>
			<p class="sacola">
				<?php
					echo "Seja Bem Vindo(a), " . $_SESSION['usuarioNome'];
				?>
			</p>
			<nav class="menu-opcoes">
				<ul>
					<li><a href="index.php?pagina=1">Cadastrar usuario</a></li>
					<li><a href="#">Categorias</a></li>
					<li><a href="#">Produtos</a></li>
					<li><a href="#">Banner</a></li>
					<li><a href="#">Promoções</a></li>
					<li><a class="close" href="logout.php">Sair</a></li>
				</ul>
			</nav>
		</header>
	</body>
</html>