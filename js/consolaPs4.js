
// DATOS EN JSON PARA CONSUMIR
let stockConsolaPS4 = "../json/consolaPs4.json"

// AL CARGAR DOCUMENTO   JQUERY
$(document).ready(function () {
    $.getJSON(stockConsolaPS4, function (data) {
        productosJuegos = data
        console.log(productosJuegos)
        localStorage.setItem('stockConsolaPs4', JSON.stringify(productosJuegos))
        mostrarProductos(productosJuegos);
    });
});


// PINTAR CONSOLA  JQUERY
const mostrarProductos = () => {
    productosJuegos.forEach(productos => {
        $("#productosContainer").append(`
                                            <div class="col-12 mb-2 col-md-3 card-container">
                                            <div class="card text-center h-100">
                                            <a href="consola-ps4/${productos.id}-consola-ps4.html"><div class="carr_producto__img"><img src="${productos.img}" alt="" class="card-img-top card-img-top-juegos"></div></a>
                                                <div class="card-body">
                                                    <h5 class="carr__producto__nombre">${productos.nombre}</h5>
                                                    <p class="carr__producto__precio">$ <span>${productos.precio}</span></p>
                                                    <button id="carr__producto__id" data-id="${productos.id}" class="btn btn-primary btn-comprar">Comprar</button>
                                                </div>
                                            </div>
            `)
    });
}
