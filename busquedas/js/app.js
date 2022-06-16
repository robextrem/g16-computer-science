let pokemones = [];
const formSearch = document.querySelector("#search-pokemon");
const result = document.querySelector("#resultado");
const input = document.querySelector("#pokemon");
const buttonWater = document.querySelector("#button-water");
const buttonFire = document.querySelector("#button-fire");
const buttonElectric = document.querySelector("#button-electric");
const buttonAsc = document.querySelector("#button-asc");
const buttonDesc = document.querySelector("#button-desc");
const buttonAscNum = document.querySelector("#button-asc-num");
const buttonDescNum = document.querySelector("#button-desc-num");


/**Esta es una busqueda lineal
 * 
 * for(var i = 0; i < pokemones.length; i++){
    console.log(pokemones[i].name + " == Vulpix");
    if(pokemones[i].name ==="Vulpix"){
        console.log("El pokemon es el "+pokemones[i].number);
        break;
    }
}

//Esto tambien funciona asi
pokemones.filter(function(pokemon){
    return pokemon.name === "Vulpix"
})


 * 
*/

formSearch.addEventListener("submit",search);
input.addEventListener("keyup",search)
buttonWater.addEventListener("click",searchWater);
buttonFire.addEventListener("click", searchFire);
buttonElectric.addEventListener("click", searchElectric)
buttonAsc.addEventListener("click", orderAsc)
buttonDesc.addEventListener("click",orderDesc)
buttonAscNum.addEventListener("click",reiniciar)
buttonDescNum.addEventListener("click",orderNumDesc)

fetch('js/pokemones.json')
.then(response => response.json())
.then(data => {
    pokemones = data;
    render(pokemones);
});


function reiniciar(){
    pokemones.sort(function(pokemon1,pokemon2){
        if(pokemon1.number > pokemon2.number){
            return 1; //Si empieza con una letra mayor enviala a la derecha +1
        }else{
            return -1; //Si empieza con una letra menor enviala a la izquierda -1
        }
    });
    render(pokemones);
}


function orderNumDesc(){
    pokemones.sort(function(pokemon1,pokemon2){
        if(pokemon1.number < pokemon2.number){
            return 1; //Si empieza con una letra mayor enviala a la derecha +1
        }else{
            return -1; //Si empieza con una letra menor enviala a la izquierda -1
        }
    });
    render(pokemones);
}

function orderAsc(){
    pokemones.sort(function(pokemon1,pokemon2){
        if(pokemon1.name > pokemon2.name){
            return 1; //Si empieza con una letra mayor enviala a la derecha +1
        }else{
            return -1; //Si empieza con una letra menor enviala a la izquierda -1
        }
    });
    render(pokemones);
}

function orderDesc(){
    pokemones.sort(function(pokemon1,pokemon2){
        if(pokemon1.name < pokemon2.name){
            return 1; //Si no empieza con una letra mayor enviala a la derecha +1
        }else{
            return -1; //Si no empieza con una letra menor enviala a la izquierda -1
        }
    });
    render(pokemones);
}

function search(e){
    e.preventDefault();
    reiniciar(); // <-- Reicinio el ordern numerico ascendente 
    let s = input.value;
    let pokemonesFiltrados = pokemones.filter(function(pokemon){
        return pokemon.name.toLowerCase().includes(s.toLowerCase());
    });
    render(pokemonesFiltrados);
}

function searchWater(){
    let pokemonesFiltrados = pokemones.filter(function(pokemon){
        return pokemon.type.includes("water");
    });
    render(pokemonesFiltrados);
}

function searchFire(){
    let pokemonesFiltrados = pokemones.filter(function(pokemon){
        return pokemon.type.includes("fire");
    });
    render(pokemonesFiltrados);
}

function searchElectric (){
    let pokemonesFiltrados = pokemones.filter(function(pokemon){
        return pokemon.type.includes("electric")
    });
    render(pokemonesFiltrados);
}


function render(pokemones){
    result.innerHTML = "";
    for(var i in pokemones){
        let column = document.createElement("div");
        column.classList.add("col-3")

        let card = `<div class="card mt-4">
                <img src="${pokemones[i].ThumbnailImage}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${pokemones[i].name}</h5>
                    <p class="card-text">#${pokemones[i].number}</p>`;

            let tipos = pokemones[i].type;

            for(var j=0; j<tipos.length; j++){
                card+=`<span class="badge ms-1 text-bg-primary">${tipos[j]}</span>`;
            }

        card+=`</div>
            </div>`;
        column.innerHTML=card;
        result.append(column);
    }
}

/*
search = (p) =>{
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
});*/
