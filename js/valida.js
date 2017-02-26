function validar() {
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
        return false;
	}

	if (nome.length > 80) {
        alert('Campo NOME DO CLIENTE deve ter no máximo 80 caracteres');
        formulario.nome.focus();
        return false;
    }
//====================================================


//==============TELEFONE==============================
    if (isNaN(telefone)) {
        alert('Você não digitou um número de telefone');
        formulario.telefone.focus();
        return false;
	}

	if (telefone.length > 14) {
        alert('O campo TELEFONE deve conter no máximo 14 caracteres');
        formulario.telefone.focus();
        return false;
	}

    if (telefone.length < 11) {
        alert('O campo TELEFONE deve conter no mínimo 11 caracteres');
        formulario.telefone.focus();
        return false;
	}
//====================================================


//==============EMAIL=================================
	var filtro_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	if (!filtro_email.test(document.getElementById("email").value)) {
        alert('Por favor, digite o email corretamente');
        document.getElementById("email").focus();
        return false
	}

//====================================================

//=================SENHA=============================
	var filtro_senha = /[\w][\d]/;

	if (!filtro_senha.test(senha)) {
        alert('A senha deve conter carateres alfanumericos, com no minimo 8 caracteres');
        senha.focus();
        return false
	}

	if (senha.length < 8) {
        alert('A senha deve conter carateres alfanumericos, com no minimo 8 caracteres');
        formulario.senha.focus();
        return false;
    }

    if (senha != mesma_senha) {
        alert('As senhas não correspondem');
        formulario.senha.focus();
        return false;
    }


}
//===================================================




