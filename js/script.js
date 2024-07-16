const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const erro = document.querySelector(".erro");

let matrizCodigoEncriptar = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const matrizCodigoDescriptografia = {
  ai: "a",
  ober: "o",
  imes: "i",
  enter: "e",
  ufat: "u",
};

let textoCriptografado = "";

inputTexto.addEventListener("input", validarEntrada);

function validarEntrada() {
  const texto = inputTexto.value;
  const regex = /^[a-z\s]*$/;

  if (!regex.test(texto)) {
    erro.textContent = "Somente letras minúsculas e palavras sem acento";
    inputTexto.value = texto.replace(/[^a-z\s]/g, "");
  } else {
    erro.textContent = "";
  }
}

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensagem.value = textoEncriptado;
  mensagem.style.backgroundImage = "none";

  inputTexto.value = inputTexto.value;
}

function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < stringEncriptada.length; i++) {
    if (matrizCodigoEncriptar.hasOwnProperty(stringEncriptada[i])) {
      textoCriptografado += matrizCodigoEncriptar[stringEncriptada[i]];
    } else {
      textoCriptografado += stringEncriptada[i];
    }
  }

  return textoCriptografado;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(inputTexto.value);

  mensagem.value = textoDesencriptado;
  mensagem.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {
  stringDesencriptada = stringDesencriptada.toLowerCase();

  let textoCriptografado = [];

  for (let i = 0; i < stringDesencriptada.length; i++) {
    if (
      matrizCodigoDescriptografia.hasOwnProperty(
        stringDesencriptada.substr(i, 5)
      )
    ) {
      textoCriptografado +=
        matrizCodigoDescriptografia[stringDesencriptada.substr(i, 5)];
      i = i + 4;
    } else if (
      matrizCodigoDescriptografia.hasOwnProperty(
        stringDesencriptada.substr(i, 4)
      )
    ) {
      textoCriptografado +=
        matrizCodigoDescriptografia[stringDesencriptada.substr(i, 4)];
      i = i + 3;
    } else if (
      matrizCodigoDescriptografia.hasOwnProperty(
        stringDesencriptada.substr(i, 3)
      )
    ) {
      textoCriptografado +=
        matrizCodigoDescriptografia[stringDesencriptada.substr(i, 3)];
      i = i + 2;
    } else if (
      matrizCodigoDescriptografia.hasOwnProperty(
        stringDesencriptada.substr(i, 2)
      )
    ) {
      textoCriptografado +=
        matrizCodigoDescriptografia[stringDesencriptada.substr(i, 2)];
      i = i + 1;
    } else {
      textoCriptografado += stringDesencriptada[i];
    }
  }

  return textoCriptografado;
}

function btnCopiar() {
  var mensagem_criptografada = document.querySelector(".mensagem");
  var campo_mensagem_original = document.querySelector(".input-texto");

  campo_mensagem_original.value = mensagem_criptografada.value;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(mensagem_criptografada.value).catch((err) => {
      alert("Erro ao copiar o texto:", err);
    });
  }
}

function btnLimpar() {
  var mensagem_criptografada = document.querySelector(".mensagem");
  var campo_mensagem_original = document.querySelector(".input-texto");

  campo_mensagem_original.value = "";
  mensagem_criptografada.value = "";
}

const text = "DECODIFICADOR";
const title = document.getElementById("title");

for (let char of text) {
  const span = document.createElement("span");
  span.textContent = char;
  title.appendChild(span);
}

inputTexto.innerText = inputTexto.value.trim();
mensagem.innerText = inputTexto.value.trim();
