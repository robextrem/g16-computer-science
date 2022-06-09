let frutas = ["Manzana", "Banana", "Uvas", "Mangos", "Limones"];
console.log(frutas);
//frutas[1]
//frutas[2] Uvas
//frutas[5]

//For
for(let i=0; i<frutas.length; i++){
    //console.log("Esta es la vuelta "+i)
    //console.log(i+" es menor que "+frutas.length)
    //console.log("Entonces i ahora vale "+(i+2));
    //console.log("frutas[i]="+frutas[i]);
    //alert("vuelta");
}

/*
for(var i in frutas){
    console.log(frutas[i])
}*/

var persona = {
    nombre : "Roberto",
    edad: 15,
    profesiones: [
        "sensei",
        "desarrollador",
        "chef"
    ],
    alumnos: [
        {
        nombre: "Alberto",
        calificacion:10
        },
        {
            nombre: "Deisy",
            calificacion: 8
        },
        {
            nombre: "Orlando",
            calificacion: 6
        },
        {
            nombre: "Mario",
            calificacion: 0
        },
        {
            nombre: "José",
            calificacion: 10
        }
    ]
}

let cadena ="El "+persona.profesiones[0]+" "+ persona.nombre +" tiene "+ persona.edad+" años y su alumno favorito es ";
console.log(cadena);


