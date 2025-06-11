const upload = document.getElementById('uploadSimbolo');
    const avatar = document.getElementById('avatarPreview');
    const arquivoSelecionado = document.getElementById('arquivoSelecionado');
    const forca = document.getElementById('forca');
    const forcaValor = document.getElementById('forcaValor');
    const form = document.getElementById('formPersonagem');

    // Atualiza o texto com o valor da força
    forca.addEventListener('input', () => {
      forcaValor.textContent = forca.value;
    });

    // Troca a imagem do avatar com o arquivo enviado
    upload.addEventListener('change', () => {
      const file = upload.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          avatar.src = e.target.result;
        };
        reader.readAsDataURL(file);
        arquivoSelecionado.textContent = `Imagem selecionada: ${file.name}`;
      } else {
        arquivoSelecionado.textContent = '';
      }
    });

    // Envia os dados do formulário
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const simbolo = upload.files[0] ? upload.files[0].name : "nenhum";
      const forcaAtual = forca.value;
      const codigo = document.getElementById('codigoSecreto').value;

      alert(`Perfil salvo!\n\nAvatar: ${simbolo}\nForça: ${forcaAtual}\nCódigo secreto: ${codigo}`);
    });