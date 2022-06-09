function saludar(){
    let nombre =document.querySelector("#nombre").value;
    let apellido =document.querySelector("#apellido").value;
    let m = despedir(nombre, apellido);
    document.getElementById("titulo").innerHTML=m;
}

function despedir(nombre, apellido){
    let frase = "Adios "+nombre+" "+apellido;
    return frase;
}

document.querySelector("#boton").addEventListener("click",saludar)
//click
//submit
//keydown | keyup
//mouseenter



//console.log(m);