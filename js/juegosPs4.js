
// DATOS EN JSON PARA CONSUMIR
let stockJuegosPS4 = "../json/juegosPs4.json"

// AL CARGAR DOCUMENTO   JQUERY
$(document).ready(function () {
    $.getJSON(stockJuegosPS4, function (data) {
        productosJuegos = data
        console.log(productosJuegos)
        localStorage.setItem('stockPs4', JSON.stringify(productosJuegos))
        mostrarJuegos(productosJuegos);
    });
});


// PINTAR JUEGOS  JQUERY
const mostrarJuegos = () => {
    productosJuegos.forEach(juego => {
        $("#productosContainer").append(`
                                            <div class="col-12 mb-2 col-md-3 card-container">
                                            <div class="card text-center h-100">
                                            <a href="juegos-ps4/${juego.id}-juego-ps4.html"><div class="carr_producto__img"><img src="${juego.img}" alt="" class="card-img-top card-img-top-juegos"></div></a>
                                                <div class="card-body">
                                                    <h5 class="carr__producto__nombre">${juego.nombre}</h5>
                                                    <p class="carr__producto__precio">$ <span>${juego.precio}</span></p>
                                                    <button id="carr__producto__id" data-id="${juego.id}" class="btn btn-primary btn-comprar">Comprar</button>
                                                </div>
                                            </div>
            `)
    });
}
