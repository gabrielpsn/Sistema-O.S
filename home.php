<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>Ipsep Informatica </title>
		<script src="js/jquery.js"></script>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/mobile.css" media="(max-width: 939px)">
		<link href='http://fonts.googleapis.com/css?family=PT+Sans|Bad+Script' rel='stylesheet'>
	</head>
	<body>
		<div id="geral">
			<header>
				<?php include("cabecalho.php") ?>
			</header>
			<section>
				<?php
				$pagina = $_GET['pagina'];
				switch ($pagina) {
    case 1:
        include ("cad_usuario.php");
        break;
    case 2:
        echo "i equals 1";
        break;
    case 3:
        echo "i equals 2";
        break;
    default:
       echo "i is not equal to 0, 1 or 2";
}
				?>
			</section>
		</div>

	</body>
</html>

<br>
