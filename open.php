<?php // session_start inicia a sessão
 session_start(); 

 // as variáveis login e senha recebem os dados digitados na página anterior 
 $login = $_POST['usuario']; 
 $senha = $_POST['senha']; 

 // as próximas 3 linhas são responsáveis em se conectar com o bando de dados.

  $con = @mysql_connect("mysql.hostinger.com.br", "u915558826_admin", "lauanny5g1") or die ("Sem conexão com o servidor"); 
  $select = mysql_select_db("u915558826_loja") or die("Sem acesso ao DB, Entre em contato com o Administrador, gilson_sales@bytecode.com.br"); 

  // A vriavel $result pega as varias $login e $senha, faz uma pesquisa na tabela de usuarios

   $result = mysql_query("SELECT * FROM `usuario` WHERE `login` = '$login' AND `senha`= '$senha'"); 

   /* Logo abaixo temos um bloco com if e else, verificando se a variável $result foi bem sucedida, ou seja se ela estiver encontrado algum registro idêntico o seu valor será igual a 1, se não, se não tiver registros seu valor será 0. Dependendo do resultado ele redirecionará para a pagina site.php ou retornara para a pagina do formulário inicial para que se possa tentar novamente realizar o login */ 

   if(mysql_num_rows ($result) > 0 ) { 

   	$_SESSION['login'] = $login; 
   	$_SESSION['senha'] = $senha;
   	 echo "<script>alert('Login Realizado com sucesso!!!');top.location.href='home.php';</script>";;
   } else{ 
   	  	unset ($_SESSION['login']); 
   	  	unset ($_SESSION['senha']); 
   	   	echo "<script>alert('Verifique seu login e senha!!!');top.location.href='index.php';</script>"; } 
 ?>
