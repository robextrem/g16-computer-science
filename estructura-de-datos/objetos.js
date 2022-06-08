let obj = {
    nombre: "Roberto",
    edad: 36,
    altura: 1.71,
    profesiones: [
        "sensei",
        "desarrollador",
        "pozolero"
    ]
}

console.log(obj.profesiones);

document.querySelector("#persona").innerHTML+=obj.nombre;
document.querySelector("#persona").innerHTML+=" "+obj.edad;

let profesiones = obj.profesiones;

for(let i=0;i<profesiones.length;i++){
    document.querySelector("#persona").innerHTML+= ` es ${profesiones[i]}`;
}

for(var j in profesiones){
    console.log(profesiones[j])
} 





