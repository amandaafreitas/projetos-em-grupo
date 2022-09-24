const button = document.getElementById("btn");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const nome = document.querySelector("#name");
  const telefone = document.querySelector("#telefone");
  const endereco = document.querySelector("#endereco");
  const mensagem = document.querySelectorAll(".mensagem");
  const pedido = document.querySelector("#pedido");

  if (nome.value === "") {
    const formControl = nome.parentElement;
    formControl.className = "form-control error";
    mensagem[0].innerHTML = "Preencha este campo!";
  } else {
    const formControl = nome.parentElement;
    formControl.className = "form-control sucesso";
    mensagem[0].innerHTML = "";
  }

  if (telefone.value === "") {
    const formControl = telefone.parentElement;
    formControl.className = "form-control error";
    mensagem[1].innerHTML = "Preencha este campo!";
  } else {
    const formControl = telefone.parentElement;
    formControl.className = "form-control sucesso";
    mensagem[1].innerHTML = "";
  }

  if (endereco.value === "") {
    const formControl = endereco.parentElement;
    formControl.className = "form-control error";
    mensagem[2].innerHTML = "Preencha este campo!";
  } else {
    const formControl = endereco.parentElement;
    formControl.className = "form-control sucesso";
    mensagem[2].innerHTML = "";
  }

  if (pedido.value === "") {
    const formControl = pedido.parentElement;
    formControl.className = "form-control error";
    mensagem[3].innerHTML = "Preencha este campo!";
  } else {
    const formControl = pedido.parentElement;
    formControl.className = "form-control sucesso";
    mensagem[3].innerHTML = "";
  }
});
