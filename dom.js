function saludar() {
    var elemento = document.getElementById('saludo')
    elemento.innerHTML = 'Bienvenido';
}

var noticias = ["Noticia 1", "Noticia 2", "Noticia 3", "Noticia 4"]
function cargarLista() {
    var lista = document.getElementById('lista');
    
    for (var i=0; i<noticias.length; i++) {
        var li = document.createElement("li");
        li.innerText = noticias[i];
        lista.appendChild(li);
    }
}

function cambiarImagen() {
    var imagen = document.getElementById('imagen');
    // imagen.src = "./images/2.png"              // Formas tradicional de cambiar un atributo
    imagen.setAttribute('src', './images/2.png'); // Forma moderna de cambiar el atributo
}