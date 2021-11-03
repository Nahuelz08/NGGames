
// DATOS EN JSON PARA CONSUMIR
const stockJuegosXbox = "../json/juegosXboxOne.json"

// AL CARGAR DOCUMENTO   JQUERY
$(document).ready(function () {
    $.getJSON(stockJuegosXbox, function (data) {
        productosJuegos = data
        console.log(productosJuegos)
        localStorage.setItem('stockXbox', JSON.stringify(productosJuegos))
        mostrarJuegos(productosJuegos);
    });
});


// PINTAR JUEGOS  JQUERY
const mostrarJuegos = () => {
    productosJuegos.forEach(juego => {
        $("#productosContainer").append(`
                                            <div class="col-lg-3 mb-2 col-md-6 card-container">
                                            <div class="card text-center h-100">
                                            <a href="juegos-xboxone/${juego.id}-juego-xboxone.html"><div class="carr_producto__img"><img src="${juego.img}" alt="" class="card-img-top card-img-top-juegos"></div></a>
                                                <div class="card-body">
                                                    <h5 class="carr__producto__nombre">${juego.nombre}</h5>
                                                    <p class="carr__producto__precio">$ <span id="carr__producto__precio">${juego.precio}</span></p>
                                                    <button id="carr__producto__id" data-id="${juego.id}" class="btn btn-success btn-comprar">Comprar</button>
                                                </div>
                                            </div>
            `)
    });
}

