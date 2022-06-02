var limit;

function contar(){
    limit = parseInt(document.getElementById("ovejas").value);
    //document.querySelector("#ovejas")
    document.querySelector("#resultado").innerHTML="";
    for(var i=1; i <= limit; i++){
        document.querySelector("#resultado").innerHTML+="<li>Se ha contado a la oveja "+i+"</li>";
        if(i%5==0){
            //TOMATE UN DESCANSO
            document.querySelector("#resultado").innerHTML+="<li>TOMATE UN DESCANSO</li>";
        }
    }
}