function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value; // Alterado para 'mensagem'
  
    if (nome === '' || email === '' || mensagem === '') { // Alterado para 'mensagem'
      alert('Por favor, preencha todos os campos.');
      return false;
    }
  
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      alert('Por favor, digite um email válido.');
      return false;
    }
  
    alert('Dados enviados com sucesso!');
    return true;
  }
  
  const botaoEnviar = document.getElementById('enviar');
  botaoEnviar.addEventListener('click', function(event) {
    event.preventDefault();
  
    if (validarFormulario()) {
      document.getElementById('formulario').submit();
    }
  });