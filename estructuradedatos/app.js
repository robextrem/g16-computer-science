let agenda=[];
document.querySelector("#formulario").addEventListener("submit",registrar);

function registrar(evt){
    evt.preventDefault();
    const {nombre, edad, foto} = evt.target;

    /*
    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;
    let foto = document.querySelector("#foto").value;
    */

    let persona={
        name: nombre.value,
        age: edad.value,
        photo: foto.value
    }
    console.log(persona);
    agenda.push(persona);
    document.querySelector("#formulario").reset()
    //this.reset();
    listar();
}

function listar(){

    document.querySelector("#resultado").innerHTML="";

    for(var i in agenda){
        let contenido=`<div class="col-3">
            <div class="card">
                <img src="${agenda[i].photo}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${agenda[i].name}</h5>
                    <p class="card-text">Edad: ${agenda[i].age}</p>
                </div>
            </div>
        </div>`;

        let col = document.createElement("div");
        col.classList.add("col-3");

        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src=agenda[i].photo;

        /*
        img.dataset.nombre = agenda[i].name;
        img.dataset.foto = agenda[i].photo;
        img.dataset.edad = agenda[i].age;

        img.addEventListener("click",function(e){
            //e.target;
            console.log(this.dataset["nombre"]);
            console.log(this.dataset["foto"]);
            console.log(this.dataset["edad"]);

            console.log(agenda[i].name);

        });*/

        card.append(img);
        //img.setAttribute("src",agenda[i].photo);

        let card_body = document.createElement("div");
        card.append(card_body)

        card_body.classList.add("card-body");

        let h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerHTML=agenda[i].name;
        card_body.append(h5)

        let p = document.createElement("p");
        p.classList.add("card-text");
        //p.innerHTML="Edad: "+agenda[i].age;
        card_body.append(p)
        card.append(card_body)

        col.append(card);

        document.querySelector("#resultado").append(col);
    }
}



