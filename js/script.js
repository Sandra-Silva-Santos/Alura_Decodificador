const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const inputOriginalOculto = document.querySelector('.input-original-oculto');
const erro = document.querySelector(".erro");

inputTexto.addEventListener('input', validarEntrada);

function validarEntrada() {
    const texto = inputTexto.value;
    const regex = /^[a-z\s]*$/;

    if (!regex.test(texto)) {
        erro.textContent = "Somente letras minúsculas e palavras sem acento";
        inputTexto.value = texto.replace(/[^a-z\s]/g, '');
    } else {
        erro.textContent = "";
    }
}

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "none";

    inputOriginalOculto.value = inputTexto.value;
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "shit"], ["i", "imes"], ["a", "aiui"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputOriginalOculto.value);
    mensagem.value = textoDesencriptado;
    mensagem.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "shit"], ["i", "imes"], ["a", "aiui"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnCopiar() {
    var mensagem_criptografada = document.querySelector('.mensagem');
    var campo_mensagem_original = document.querySelector('.input-texto');

    campo_mensagem_original.value = mensagem_criptografada.value;
}

function btnLimpar() {
    var mensagem_criptografada = document.querySelector('.mensagem');
    var campo_mensagem_original = document.querySelector('.input-texto');

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
