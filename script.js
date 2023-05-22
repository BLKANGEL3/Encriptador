const textArea = document.querySelector(".texto-area")
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}


function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

        }

    }
    return stringDesencriptado;
}

//function llamarfunciones(){  intento de hacer aparecer y desaparecer el boton copiar
 //   copiar();
 //   mostrar();
//}

function copiar(){
    const btnCopiar = document.querySelector('.btn-copiar');
    const textoCopiado = document.querySelector('.mensaje');
    textoCopiado.select();
    document.execCommand('copy');
}


//function mostrar(){          intento de hacer aparecer y desaparecer el boton copiar
 //   const texto = document.querySelector(".mensaje");
  //  const Copiar = document.querySelector(".copiarboton");

  //  if (texto.value !== "") {
  //      Copiar.style.display = "block";
   // } else {
   //    Copiar.style.display = "none";
   // }
//}

function autoResize() {
    const mensaje = document.querySelectorByClass(".mensaje");
    mensaje.style.height = "auto";
    mensaje.style.heigh = mensaje.scrollHeight + "px";
}



