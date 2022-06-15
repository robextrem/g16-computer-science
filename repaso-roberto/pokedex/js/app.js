let pokemones = [];
const formSearch=document.querySelector("#search-pokemon");
const resetList=document.querySelector("#reset");

fetch('https://raw.githubusercontent.com/robextrem/g16-computer-science/develop/repaso-roberto/pokedex/js/pokemones.json')
.then(response => response.json())
.then(data => {
    pokemones = data;
    render(pokemones);
});

function render(pokemones){
 
    document.querySelector("#resultado").innerHTML = "";

    //recorremos el array pokemones
    //for / forEach / for in
    for(var i in pokemones){
        //console.log(pokemones[i])
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
            let tipos = pokemones[i].type;
            /*for(var j=0; j<pokemones[i].type.length; j++){
                card+=`<span class="badge text-bg-primary">${pokemones[i].type[j]}</span>`
            }*/
            for(var j=0; j<tipos.length; j++){
                card+=`<span class="badge ms-1 text-bg-primary">${tipos[j]}</span>`;
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

function search(p){
    let results = pokemones.filter(function(pokemon){
        //return pokemon.name.toLowerCase().includes(p);
        return pokemon.name === pokemon
    });
    render(results);
}

resetList.addEventListener("click", function(e){
    e.preventDefault();
    render(pokemones);
    return false;
});

formSearch.addEventListener("submit", function(e){
    e.preventDefault();
    search(e.target.pokemon.value);
    return false;
});
