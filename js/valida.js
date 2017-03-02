function valida() {
    var formulario = window.document.getElementById("formulario");
    var nome = formulario.nome.value;
    var telefone = formulario.telefone.value;
    var email = formulario.email.value;
    var senha = formulario.senha.value;
    var mesma_senha = formulario.mesma_senha.value;

//==============NOME==================================
	if (nome.length < 5) {
        alert('Digite seu nome completo');
        formulario.nome.focus();
	}

	if (nome.length > 80) {
        alert('Campo NOME DO CLIENTE deve ter no máximo 80 caracteres');
        formulario.nome.focus();
    }
//====================================================


//==============TELEFONE==============================
    if (isNaN(telefone)) {
        alert('Você não digitou um número de telefone');
        formulario.telefone.focus();
	}

	if (telefone.length > 14) {
        alert('O campo CELULAR deve conter no máximo 14 caracteres');
        formulario.telefone.focus();
	}

    if (telefone.length < 11) {
        alert('O campo CELULAR deve conter no mínimo 11 caracteres');
        formulario.telefone.focus();
	}
//====================================================


//==============EMAIL=================================
	var filtro_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (email.lenght < 10) {
        alert("Digite um email válido");
    }

	if (!filtro_email.test(email.getElementById("email").value)) {
        alert('Por favor, digite o email corretamente');
        email.focus();
	}

//====================================================

//=================SENHA=============================
	var filtro_senha = /[\w][\d]/;

	if (!filtro_senha.test(senha)) {
        alert('A senha deve conter carateres alfanumericos, com no minimo 8 caracteres');
        senha.focus();
	}

	if (senha.length < 8) {
        alert('A senha deve conter carateres alfanumericos, com no minimo 8 caracteres');
        formulario.senha.focus();
    }

    if (senha != mesma_senha) {
        alert('As senhas não correspondem');
        formulario.senha.focus();
    }


}
//===================================================




