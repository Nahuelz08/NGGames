
// DATOS EN JSON PARA CONSUMIR
let stockConsolaPS4 = "../json/consolaXboxOne.json"

// AL CARGAR DOCUMENTO   JQUERY
$(document).ready(function () {
    $.getJSON(stockConsolaPS4, function (data) {
        productosJuegos = data
        console.log(productosJuegos)
        localStorage.setItem('stockConsolaXbox', JSON.stringify(productosJuegos))
        mostrarProductos(productosJuegos);
    });
});


// PINTAR JUEGOS  JQUERY
const mostrarProductos = () => {
    productosJuegos.forEach(productos => {
        $("#productosContainer").append(`
                                            <div class="col-lg-3 mb-2 col-md-6 card-container"> 
                                            <div class="card text-center h-100">
                                            <a href="consola-xbox/${productos.id}-consola-xbox.html"><div class="carr_producto__img"><img src="${productos.img}" alt="" class="card-img-top card-img-top-consolas"></div></a>
                                                <div class="card-body">
                                                    <h5 class="carr__producto__nombre">${productos.nombre}</h5>
                                                    <p class="carr__producto__precio">$ <span id="carr__producto__precio">${productos.precio}</span></p>
                                                    <button id="carr__producto__id" data-id="${productos.id}" class="btn btn-success btn-comprar">Comprar</button>
                                                </div>
                                            </div>
            `)
    });
}
