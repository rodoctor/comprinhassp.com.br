function valida()
{
	var elemento;
	
	//Teste de Nome
	elemento = document.getElementsByName("nome");


	if (elemento.value == null || elemento.value == "") {
		alert("Inválido");
		elemento.setCustomValidity('Preencha o campo nome');
		return false
	} else {
		alert('Ok!');
		return true
	}
	
}