class Contato {
    constructor(nome, email, telefone) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
    }
  }
  
  let contatos = [];
  
  // Função para atualizar a lista de contatos no DOM
  function atualizarLista() {
    const listaContatos = document.getElementById('lista-contatos');
    listaContatos.innerHTML = '';
    
    contatos.forEach((contato, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}
                      <button onclick="editarContato(${index})">Editar</button>
                      <button onclick="excluirContato(${index})">Excluir</button>`;
      listaContatos.appendChild(li);
    });
  }
  
  // Função para cadastrar um novo contato
  function cadastrarContato(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    
    const novoContato = new Contato(nome, email, telefone);
    contatos.push(novoContato);
    
    document.getElementById('form-contato').reset();
    atualizarLista();
  }
  
  // Função para editar um contato
  function editarContato(index) {
    const contato = contatos[index];
    document.getElementById('nome').value = contato.nome;
    document.getElementById('email').value = contato.email;
    document.getElementById('telefone').value = contato.telefone;
    
    // Alterar a lógica do botão para salvar as edições
    document.getElementById('form-contato').onsubmit = function(event) {
      event.preventDefault();
      contato.nome = document.getElementById('nome').value;
      contato.email = document.getElementById('email').value;
      contato.telefone = document.getElementById('telefone').value;
      atualizarLista();
      document.getElementById('form-contato').reset();
    };
  }
      // Função para excluir um contato
      function excluirContato(index) {
        contatos.splice(index, 1);
        atualizarLista();
      }
  
      // Adicionando o evento de submit no formulário
      document.getElementById('form-contato').addEventListener('submit', cadastrarContato);
  
      // Atualizar a lista inicialmente
      atualizarLista();