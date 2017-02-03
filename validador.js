function valida()
{
	var elemento;
	
	//Teste de Telefone
	elemento = document.getElementsByName("telefone");
	if (elemento.length < 11) {
		elemento.setCustomValidity('Put here custom message');
		//alert("I am an alert box!");
	}
}