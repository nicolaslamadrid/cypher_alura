function encriptar (){
   var texto = document.querySelector("#input").value;
   document.querySelector(".output").innerHTML = "";
   var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
   document.querySelector(".output").innerHTML= textoCifrado;
   document.querySelector("#input").value = "";
   document.querySelector(".output").focus()
 }



var boton1 = document.querySelector("#btn"); 

boton1.onclick = encriptar;

function desencriptar (){ 
   var texto = document.querySelector(".input").value; 
      
    document.querySelector(".output").innerHTML = "";
    var textodesCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".output").innerHTML = textodesCifrado; 
    document.querySelector(".input").value = "";
    document.querySelector(".output").focus();
    
}

var boton2 = document.querySelector("#btn-desencriptar"); 
boton2.onclick = desencriptar;

var boton3 = document.querySelector("#btn-copy"); 
boton3.onclick = copytoClipboard;
function copytoClipboard(){
   let copyText = document.getElementById('output').innerText 
  const textArea = document.createElement('textarea');
  textArea.textContent = copyText;
  document.body.append(textArea);       
  textArea.select();       
  document.execCommand("copy");  
  alert('Copiado!')
   }

