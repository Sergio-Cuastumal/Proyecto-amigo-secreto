// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [ ];
//variable para la lista en el HTML
let listaHTML = document.getElementById('listaAmigos'); 
    

function agregarAmigo(){
    //document.getElementById('sorteo').removeAttribute('disabled');
    //ingresar nombre de amigo
    let amigo = document.getElementById('amigo').value;
    console.log(amigo);
    //evaluar dato valido
    if(amigo == '' || amigo == parseInt(amigo) ||listaHTML=='' ){
        alert('Ingrese un nombre válido por favor.');
    }else{
        listaAmigos.push(amigo);
    }
    //console.log(typeof(amigo));
    //adicionar a la lista de amigos
    console.log(listaAmigos);
    console.log(typeof(listaAmigos.length));//numero
    //borrar texto luego de enviar nombre
    document.querySelector('#amigo').value='';
    mostrarLista();
}

function sortearAmigo(){
    if(listaAmigos.length!=0){
        //designar posición del array
        let posicion = posicionAleatoria(listaAmigos.length);
        console.log(posicion);
        //alert(`Tu amigo secreto es: ${listaAmigos[posicion]}`);
        document.getElementById('resultado').innerHTML= "Tu amigo secreto es "+listaAmigos[posicion];
        listaHTML.innerHTML='';
        listaAmigos=[];
    }else{
        alert('La lista está vacía. Ingrese un nombre válido');
    }
}
//generar numero para posicion aleatoria
function posicionAleatoria(limSup){
    return Math.floor(Math.random()*limSup);
}
function mostrarLista(){
    
    listaHTML.innerHTML = "";//limpiar lista
    console.log(listaHTML);
    for (let i = 0; i < listaAmigos.length; i++) {
        //almacenar un elemento 'li' en itemLista
        let itemLista = document.createElement('li');
        console.log(typeof(itemLista));
        //asignar el contenido a la posicion i
        itemLista.textContent = listaAmigos[i];
        //agregar el elemento li
        listaHTML.appendChild(itemLista);
    }
}
