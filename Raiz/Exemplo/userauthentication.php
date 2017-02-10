<?php
	        error_reporting (E_ALL & ~ E_NOTICE & ~ E_DEPRECATED);
			$host="mysql.hostinger.com.br";
			$user="u249511724_biz";
			$pass="u249511724_biz";
			$dbname="u249511724_biz";
			
			$conexao=mysql_connect($host,$user,$pass) or die (mysql_error());
			$selectdb=mysql_select_db($dbname);
			
?>	
<!DOCTYPE html>
<html>
<head>
<title>Autenticando </title>
<meta charset="UTF-8" http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<script type="text/javascript">
function loginsuccessfully (){
    setTimeout("window.location='painel.php'", 3000);
}
function loginfailed(){
    setTimeout("window.location='login.php'", 3000);
}
</script>

</head>
<body>
<?php
$email=$_POST ['email'];
$senha=$_POST ['senha'];
$sql = mysql_query ("SELECT * FROM  usuarios WHERE email = '$email' AND senha = '$senha'") or die (mysql_error());
$row = mysql_num_rows ($sql);
if($row > 0) {
    session_start();
 $_SESSION ['email']=$_POST ['email'];
 $_SESSION ['senha']=$_POST ['senha'];
 echo "<script>loginsuccessfully()</script>";
 echo "Você foi autenticado com sucesso! Aguade um instante.";
} else {
 echo "Nome de usuário ou senha inválido! aguarde um instante.";
 echo "<script>loginfailed()</script>";  
}
?>



</body>
</html>