function valida() {
    var formulario = window.document.getElementById("formulario");
    var nome = formulario.nome.value;
    var telefone = formulario.telefone.value;
    var email = formulario.email.value;
    var senha = formulario.senha.value;
    var mesma_senha = formulario.mesma_senha.value;

//==============NOME==================================
 	if (nome.length < 8) {
        alert('Digite seu nome completo');
        formulario.nome.style.backgroundColor = "#e2a7a7";
        formulario.nome.focus;
	}

	if (nome.length > 80) {
        alert('Campo NOME deve ter no máximo 80 caracteres');
        formulario.nome.style.backgroundColor = "#e2a7a7";
        formulario.nome.focus;
    }

    // Testes Ok
    if (nome.length >= 8 && nome.length <=80) {
        formulario.nome.style.backgroundColor = "#FFFFFF";
    }
//====================================================


//==============TELEFONE==============================
    if (isNaN(telefone)) {
        alert('Você não digitou um número de telefone');
        formulario.telefone.style.backgroundColor = "#e2a7a7";
        formulario.telefone.focus;
	}

	if (telefone.length > 14) {
        alert('O campo CELULAR deve conter no máximo 14 caracteres');
        formulario.telefone.style.backgroundColor = "#e2a7a7";
        formulario.telefone.focus;
	}

    if (telefone.length < 11) {
        alert('O campo CELULAR deve conter no mínimo 11 caracteres');
        formulario.telefone.style.backgroundColor = "#e2a7a7";
        formulario.telefone.focus;
	}

    if (isNaN(telefone) == false && telefone.length <= 14 && telefone.length >= 11) {
        formulario.telefone.style.backgroundColor = "#FFFFFF";
    }
//====================================================


//==============EMAIL=================================
	var filtro_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (email.length < 10) {
        alert("Digite um email válido");
        formulario.email.style.backgroundColor = "#e2a7a7";
        email.focus;
    }

	if (!filtro_email.test(email)) {
        alert('Por favor, digite o email corretamente');
        formulario.email.style.backgroundColor = "#e2a7a7";
        email.focus;
	}

    if (email.length > 10 && filtro_email.test(email) == true){
        formulario.email.style.backgroundColor = "#FFFFFF";
    }
//====================================================

//=================SENHA=============================
	var filtro_senha = /[\w][\d]/;

	if (!filtro_senha.test(senha)) {
        alert('A senha deve conter carateres alfanumericos');
        formulario.senha.style.backgroundColor = "#e2a7a7";
        senha.focus;
	}

	if (senha.length < 8) {
        alert('A senha deve conter carateres alfanumericos, com no minimo 8 caracteres');
        formulario.senha.style.backgroundColor = "#e2a7a7";
        formulario.senha.focus;
    }

    if (senha != mesma_senha) {
        alert('As senhas não correspondem');
        formulario.senha.style.backgroundColor = "#e2a7a7";
        formulario.mesma_senha.style.backgroundColor = "#e2a7a7";
        formulario.senha.focus;
    }

    if (senha.length >= 8 && filtro_senha.test(senha) == true){
        formulario.senha.style.backgroundColor = "#FFFFFF";
    }

}
//===================================================




