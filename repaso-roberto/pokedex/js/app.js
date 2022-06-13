let pokemones = [];

fetch('https://raw.githubusercontent.com/robextrem/g16-computer-science/develop/pokedex-filas-y-colas/data/pokemons.json')
.then(response => response.json())
.then(data => {
    pokemones = data;
    render();
});

function render(){
    //recorremos el array pokemones
    //for / forEach / for in
    for(var i in pokemones){
        console.log(pokemones[i])
        let card = `<div class="col-3">
            <div class="card mt-4">
                <img src="${pokemones[i].ThumbnailImage}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${pokemones[i].name}</h5>
                    <p class="card-text">#${pokemones[i].number}</p>`;
            /*Aqui puedo manipular mis tipos*/
            /*Esta no la voy a usar
            card+=`<span class="badge text-bg-primary">${pokemones[i].type[0]}</span>
                    <span class="badge text-bg-danger">${pokemones[i].type[1]}</span>`;
            */
            console.log(pokemones[i].type)
            let tipos = pokemones[i].type;
            /*for(var j=0; j<pokemones[i].type.length; j++){
                card+=`<span class="badge text-bg-primary">${pokemones[i].type[j]}</span>`
            }*/
            for(var j=0; j<tipos.length; j++){
                card+=`<span class="badge text-bg-primary">${tipos[j]}</span>`;
            }
            /*Ya los manipule*/

        card+=`</div>
            </div>
        </div>`;
        document.querySelector("#resultado").innerHTML += card;

        //console.log(pokemones[i].name);
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
