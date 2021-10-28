
// DATOS EN JSON PARA CONSUMIR
const stockJuegosXbox = "../json/juegosXboxOne.json"

// AL CARGAR DOCUMENTO   JQUERY
$(document).ready(function () {
    $.getJSON(stockJuegosXbox, function (data) {
        console.log(data)
        localStorage.setItem('stockXbox', JSON.stringify(data))
        mostrarJuegos(data);
    });
});

// PINTAR JUEGOS  JQUERY
const mostrarJuegos = () => {
    $.getJSON(stockJuegosXbox,
        function (respuesta, estado) {
            if (estado === "success") {
                let juegosXbox = respuesta
                for (const juego of juegosXbox) {
                    $("#productosContainer").append(`
                                                    <div class="col-12 mb-2 col-md-3">
                                                    <div class="card text-center h-100">
                                                    <a href="juegos-xboxone/${juego.id}-juego-ps4"><div class="carr_producto__img"><img src="${juego.img}" alt="" class="card-img-top"></div></a>
                                                        <div class="card-body">
                                                            <h5 class="carr__producto__nombre">${juego.nombre}</h5>
                                                            <p class="carr__producto__precio">$ <span>${juego.precio}</span></p>
                                                            <button id="carr__producto__id" data-id="${juego.id}" class="btn btn-success btn-comprar">Comprar</button>
                                                        </div>
                                                    </div>
                    `);
                }
            }
        }
    );
}

