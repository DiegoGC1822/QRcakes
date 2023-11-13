//permite al menu tener fondo cuando se baja con la rueda del raton

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

//permite el efecto suave de desplazamiento y vista centrada al momento de presionar el enlace

const enlacesMenu = document.querySelectorAll('a[href^="#section"]');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault(); // Evita la acción predeterminada del enlace
        
        // Obtiene el ID de la sección de destino desde el atributo href
        const sectionID = this.getAttribute('href').substring(1);
        
        // Obtiene la sección de destino
        const seccionDestino = document.getElementById(sectionID);
        
        // Ajusta la posición de la sección para que esté centrada verticalmente
        seccionDestino.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});



