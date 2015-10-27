<?php

// A sess�o precisa ser iniciada em cada p�gina diferente
if (!isset($_SESSION)) session_start();

$nivel_necessario = 2;

// Verifica se n�o h� a vari�vel da sess�o que identifica o usu�rio
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
            <a href="restrito.php?pagina=1" class="thumbnail" title="Acesse o Menu de Clientes">
                <img src="img/icons/clientes.png" alt="Clientes" width="90" height="90" >
            </a>
        </div>
        <div class="hidden-xs col-sm-1">
            <a href="restrito.php?pagina=2" class="thumbnail" title="Acesse o Menu de Funcionarios">
                <img src="img/icons/funcionarios.jpg" alt="Funcinarios" >
            </a>
        </div>
        <div class="hidden-xs col-sm-1" >
            <a href="restrito.php?pagina=3" class="thumbnail" title="Acesse o Menu de Fornecedores">
                <img src="img/icons/fornecedores.jpg" alt="Fornecedores" >
            </a>
        </div>
        <div class="hidden-xs col-sm-1" >
            <a href="restrito.php?pagina=7" class="thumbnail" title="Acesse o Menu de Estoque">
                <img src="img/icons/produto.png" alt="Produtos" >
            </a>
        </div>
        <div class="hidden-xs col-sm-1">
            <a href="restrito.php?pagina=4" class="thumbnail" title="Acesse o Menu de Veiculos">
                <img src="img/icons/veiculo.jpg" alt="Veiculos">
            </a>
        </div>
        <div class="hidden-xs col-sm-1">
            <a href="restrito.php?pagina=5" class="thumbnail" title="Acesse o Menu de O.S">
                <img src="img/icons/ordem.jpg" alt="Ordem servi�o">
            </a>
        </div>
        <div class="hidden-xs col-sm-1">
            <a href="restrito.php?pagina=6" class="thumbnail" title="Acesse o Menu de Relatorios">
                <img src="img/icons/relatorios.jpg" alt="Relatorios" >
            </a>
        </div>
        <div class="hidden-xs col-sm-1">
            <a href="restrito.php?pagina=8" class="thumbnail" title="Acesse o Menu de Suporte">
                <img src="img/icons/suporte.png" alt="Suporte" width="90" height="90" >
            </a>
        </div>
        <div class="hidden-xs col-sm-1">
            <a href="logout.php" class="thumbnail">
                <img src="img/icons/sair_porta.png" alt="Sair" title="Sair do Sistema">
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
        			include "menuClientes.php"; 					
       			 break;

    			case 2:
       				 include "menuFuncionario.php"; 
       			 break;

   				 case 3:
       			 	 include "menuFornecedor.php"; 
       			 break;

       			 case 4:
       			 	echo "Veiculo ";
       			 break;

   				 case 5:
       			 	echo "Ordem Servi�o ";
       			 break;

   				 case 6:
       			 	echo "relatorios ";
       			 break;

          case 7:
              echo "Estoque ";
          break;
   				 
   				 default:
     				  echo "i is not equal to 0, 1 or 2";
					}
				?>
		</div>
	</section>

</body>
</html>
