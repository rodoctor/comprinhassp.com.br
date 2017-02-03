<?php
	        error_reporting (E_ALL & ~ E_NOTICE & ~ E_DEPRECATED);
			$host="mysql.hostinger.com.br";
			$user="u249511724_biz";
			$pass="u249511724_biz";
			$dbname="u249511724_biz";
			
			$conexao=mysql_connect($host,$user,$pass) or die (mysql_error());
			$selectdb=mysql_select_db($dbname);
			
?>
<?php
session_start();
if(!isset($_SESSION["email"]) || !isset($_SESSION["senha"])){
    header("Location: login.php");
    exit;
}else {
    echo "<center>Você está logado!!!</center>";
}

?>

<!DOCTYPE html>
<html>
<head>
<title>Painel</title>
<meta charset="UTF-8" http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
</head>
<body>
<center><h1>Bem vindo ao conteúdo exclusivo<h1></center>
<br><li><a href = "http://eusemprequeromais.com.br">Dicas de Finanças</a></li>
<br><li><a href = "http://www.mulheresaobra.com.br">Dicas para mulheres</a></li>
<br><li><a href = "http://www.centrobitcoin.com.br">Informações sobre BitCoin</a></li>
<br><li><a href = "http://www.centauro.com.br">Centauro Ecommerce</a></li>
<br><li><a href = "http://www.facebook.com">Facebook</a></li>
<br><li><a href = "http://www.google.com.br">Google</a></li>
<br><li><a href = "http://www.uol.com.br">uol</a></li>
<br>

<br>
<center><a href = "logout.php">Sair</a></center>
</body>
</html>