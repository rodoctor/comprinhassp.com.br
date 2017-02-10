<?php
	        error_reporting (E_ALL & ~ E_NOTICE & ~ E_DEPRECATED);
			$host="mysql.hostinger.com.br";
			$user="u249511724_biz";
			$pass="u249511724_biz";
			$dbname="u249511724_biz";
			
			$conexao=mysql_connect($host,$user,$pass);
			$selectdb=mysql_select_db($dbname);
			
			
?>	
<!DOCTYPE html>
<html>
<head>
<title>Cadastrando</title>
<meta charset="UTF-8" http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
</head>

<body>
<?php

$nome=$_POST['nome'];
$email=$_POST['email'];
$senha=$_POST['senha'];

$sql=mysql_query("INSERT INTO usuarios(nome,email,senha) VALUES('$nome','$email','$senha')");
echo "<center><h1>Cadastro efetuado com sucesso!!!</h1></center>"

?>

<br>
<center><a href = "login.php">login</a></center>



<body>
</html>