<?php 
	include "conecta_db.php";

	$nome = $_POST['nome'];
	$telefone = $_POST['telefone'];
	$email = $_POST['email'];
	$senha = $_POST['senha'];

	$query = "INSERT INTO `cadastros`(`nome`, `telefone`, `email`, 'senha') VALUES ('$nome', $telefone','$email', 'senha')";

	//Seleciona Tabela
	mysqli_select_db($conecta,"cadastros");

	//Inserir no banco de dados
	mysqli_query($conecta, $query);
   
   //Mensagem de Conclusão
	include "mensagem_cadastro.html"
   
?>