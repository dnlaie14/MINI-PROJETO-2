const alunos = [];

class Aluno {
  constructor(nome, telefoneContato, email, cpf) {
    this.nome = nome;
    this.telefoneContato = telefoneContato;
    this.email = email;
    this.cpf = cpf;
  }
}

const nomeInput = document.getElementById('nome');
const telefoneContatoInput = document.getElementById('telefoneContato');
const emailInput = document.getElementById('email');
const cpfInput = document.getElementById('cpf');
const btnSave = document.getElementById("btn-save");
const btnList = document.getElementById("btn-list");
const containerList = document.getElementById("container-alunos");
const ulListAlunos = document.getElementById("alunosCadastrados");

btnSave.addEventListener("click", () => {

  if (nomeInput.value && telefoneContatoInput.value && emailInput.value && cpfInput.value) {
    const aluno = new Aluno(
      nomeInput.value,
      telefoneContatoInput.value,
      emailInput.value,
      cpfInput.value
    );

    alunos.push(aluno);
    alert("Cadastro Concluido. Clique (Alunos) para visualizar.");
    limparFormulario();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

btnList.addEventListener("click", listCadastros);

function listCadastros() {
  ulListAlunos.innerHTML = '';
  alunos.forEach((aluno, index) => {
    createList(index, aluno);
  });
}


function createList(index, aluno) {
  const btnDelete = document.createElement("button");
  const btnEdit = document.createElement("button");

  const listItem = document.createElement("li");
  listItem.classList.add("aluno-card");

  const nomeAluno = document.createElement("h3");
  nomeAluno.classList.add("aluno-nome");
  nomeAluno.innerHTML = aluno.nome;

  const divInformacoes = document.createElement("div");
  divInformacoes.classList.add("aluno-info");

  const telefoneContatoAluno = document.createElement("p");
  telefoneContatoAluno.classList.add("telefone");
  telefoneContatoAluno.innerHTML = `Telefone: ${aluno.telefoneContato}`;

  const emailAluno = document.createElement("p");
  emailAluno.classList.add("email");
  emailAluno.innerHTML = `Email: ${aluno.email}`;

  const cpfAluno = document.createElement("p");
  cpfAluno.classList.add("cpf");
  cpfAluno.innerHTML = `CPF: ${aluno.cpf}`;

  btnEdit.innerHTML = 'Editar';
  btnDelete.innerHTML = 'Deletar';

  btnEdit.style.padding = "0.5rem 1rem";
  btnEdit.style.margin = "0.5rem";
  btnEdit.style.borderRadius = "5px";
  btnEdit.style.cursor = "pointer";
  btnEdit.style.fontSize = "1.4rem";
  btnEdit.style.backgroundColor = "#4CAF50";
  btnEdit.style.color = "white";
  btnEdit.style.border = "none";
  btnEdit.style.transition = "background-color 0.3s";

  btnEdit.addEventListener("mouseover", () => {
    btnEdit.style.backgroundColor = "#45a049";
  });

  btnEdit.addEventListener("mouseout", () => {
    btnEdit.style.backgroundColor = "#4CAF50";
  });

  btnDelete.style.padding = "0.5rem 1rem";
  btnDelete.style.margin = "0.5rem";
  btnDelete.style.borderRadius = "5px";
  btnDelete.style.cursor = "pointer";
  btnDelete.style.fontSize = "1.4rem";
  btnDelete.style.backgroundColor = "#f44336";
  btnDelete.style.color = "white";
  btnDelete.style.border = "none";
  btnDelete.style.transition = "background-color 0.3s";
  btnDelete.addEventListener("mouseover", () => {
    btnDelete.style.backgroundColor = "#e53935";
  });

  btnDelete.addEventListener("mouseout", () => {
    btnDelete.style.backgroundColor = "#f44336";
  });

  btnEdit.addEventListener("click", () => {

    nomeInput.value = aluno.nome;
    telefoneContatoInput.value = aluno.telefoneContato;
    emailInput.value = aluno.email;
    cpfInput.value = aluno.cpf;


    btnSave.removeEventListener("click", saveAluno);
    btnSave.addEventListener("click", () => {
      alunos[index] = new Aluno(
        nomeInput.value,
        telefoneContatoInput.value,
        emailInput.value,
        cpfInput.value
      );
      alert("Aluno atualizado!");
      listCadastros();
      limparFormulario();
    });
  });

  btnDelete.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja deletar este aluno?")) {
      alunos.splice(index, 1);
      listCadastros();
    }
  });

  divInformacoes.appendChild(telefoneContatoAluno);
  divInformacoes.appendChild(emailAluno);
  divInformacoes.appendChild(cpfAluno);
  divInformacoes.appendChild(btnEdit);
  divInformacoes.appendChild(btnDelete);

  listItem.appendChild(nomeAluno);
  listItem.appendChild(divInformacoes);

  ulListAlunos.appendChild(listItem);
}


function limparFormulario() {
  nomeInput.value = "";
  telefoneContatoInput.value = "";
  emailInput.value = "";
  cpfInput.value = "";
}