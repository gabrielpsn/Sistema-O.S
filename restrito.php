<?php

// A sessão precisa ser iniciada em cada página diferente
if (!isset($_SESSION)) session_start();

$nivel_necessario = 2;

// Verifica se não há a variável da sessão que identifica o usuário
if (!isset($_SESSION['UsuarioID']) OR ($_SESSION['UsuarioNivel'] < $nivel_necessario)) {
	// Redireciona o cliente para pagina de cliente
	header("Location: cliente.php"); exit;
}

?>

<!DOCTYPE html >
<html>
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Genrenciador de Oficina Mecanica</title>

  
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/login.css" rel="stylesheet">
  <link href="css/animate.css" rel="stylesheet">
  <link href="css/font-awesome.css" rel="stylesheet">
  <link href="css/theme-loading-bar.css" rel="stylesheet" />
  <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:700,400|Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
</head>

<body >
	<div class="container" id="container">
	<header>
		<!-- Main comapny header -->
			<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
			  <div class="container">
			  	<div class="row navbar-active container-fluid">
			  	
			  	</div>
				<div class="navbar-header">
				  <div class="container">
    <div class="row" id="menu">
        <div class="hidden-xs col-sm-1">
            <a href="restrito.php?pagina=1" class="thumbnail">
                <img src="img/icons/clientes.jpg" alt="Clientes"><br>
            </a>
        </div>
        <div class="hidden-xs col-sm-1">
            <a href="restrito.php?pagina=2" class="thumbnail">
                <img src="img/icons/funcionarios.jpg" alt="Funcinarios" >
            </a>
        </div>
        <div class="hidden-xs col-sm-1" >
            <a href="restrito.php?pagina=3" class="thumbnail">
                <img src="img/icons/fornecedores.jpg" alt="Fornecedores" >
            </a>
        </div>
        <div class="hidden-xs col-sm-1">
            <a href="restrito.php?pagina=4" class="thumbnail">
                <img src="img/icons/veiculo.jpg" alt="Veiculos">
            </a>
        </div>
        <div class="hidden-xs col-sm-1">
            <a href="restrito.php?pagina=5" class="thumbnail">
                <img src="img/icons/ordem.jpg" alt="Ordem serviço">
            </a>
        </div>
        <div class="hidden-xs col-sm-1">
            <a href="restrito.php?pagina=6" class="thumbnail">
                <img src="img/icons/relatorios.jpg" alt="Relatorios" >
            </a>
        </div>
        <div class="hidden-xs col-sm-1">
            <a href="logout.php" class="thumbnail">
                <img src="img/icons/sair_porta.png" alt="Sair">
            </a>
        </div>
    </div>
</div>
				</div>
				
			  </div>
			</nav>
	</header>
	<section>
		<div class="centro animated fadeInDown">
			<?php
				$pagina = $_GET['pagina'];
				switch ($pagina) {
   				 case 1:
        			echo" Cliente "; 					
       			 break;

    			case 2:
       				 echo "Funcionarios ";
       			 break;

   				 case 3:
       			 	echo "fornecedor ";
       			 break;

       			 case 4:
       			 	echo "Veiculo ";
       			 break;

   				 case 5:
       			 	echo "Ordem Serviço ";
       			 break;

   				 case 6:
       			 	echo "relatorios ";
       			 break;
   				 
   				 default:
     				  echo "i is not equal to 0, 1 or 2";
					}
				?>
		</div>
	</section>

</body>
</html>
