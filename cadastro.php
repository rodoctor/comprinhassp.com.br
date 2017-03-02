<?php 
	include "conecta_db.php";

	$nome = $_POST['nome'];
	$sobrenome = $_POST['sobrenome'];
	$telefone = $_POST['telefone'];
	$email = $_POST['email'];

	$query = "INSERT INTO `cadastros`(`nome`, `sobrenome`, `telefone`, `email`) VALUES ('$nome','$sobrenome','$telefone','$email')";

	//Seleciona Tabela
	mysqli_select_db($conecta,"cadastros");

	//Inserir no banco de dados
	mysqli_query($conecta, $query);
   
   //Mensagem de Conclusão
	include "mensagem_cadastro.html"
   
?>