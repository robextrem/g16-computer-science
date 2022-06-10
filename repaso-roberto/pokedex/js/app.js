let pokemones = [];

fetch('https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json')
.then(response => response.json())
.then(data => {
    pokemones = data;
    render();
});

function render(){
    //recorremos el array pokemones
    //for / forEach / for in
    for(var i in pokemones){
        console.log(pokemones[i].name);
    }
    //termina el for

        /*let frutas = ["Banana", "Pera", "Manzana"]
    ¿Cómo recorrer un arreglo?
    frutas.forEach(function(fruta){
        console.log(fruta)
    })
    frutas.forEach(fruta => {
        console.log(fruta)
    })
    for(var i=0;i<frutas.length;i++){
        console.log(frutas[i])
    }
    */
}
