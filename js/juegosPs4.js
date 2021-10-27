
// DATOS EN JSON PARA CONSUMIR
const stockJuegosPS4 = "../../json/juegosPs4.json"

// AL CARGAR DOCUMENTO   JQUERY
$(document).ready(function () {
    $.getJSON(stockJuegosPS4, function (data) {
        console.log(data)
        localStorage.setItem('stockPs4', JSON.stringify(data))
        mostrarJuegos(data);
    });
});

// PINTAR JUEGOS  JQUERY
const mostrarJuegos = () => {
    $.getJSON(stockJuegosPS4,
        function (respuesta, estado) {
            if (estado === "success") {
                let juegosPS4 = respuesta
                for (const juego of juegosPS4) {
                    $("#productosContainer").append(`
                                                    <div class="col-12 mb-2 col-md-3">
                                                    <div class="card">
                                                    <a href="juegos-ps4/${juego.id}-juego-ps4.html"><div class="carr_producto__img"><img src="${juego.img}" alt="" class="card-img-top"></div></a>
                                                        <div class="card-body">
                                                            <h5 class="carr__producto__nombre">${juego.nombre}</h5>
                                                            <p class="carr__producto__precio">$ <span>${juego.precio}</span></p>
                                                            <button id="carr__producto__id" data-id="${juego.id}" class="btn btn-primary btn-comprar">Comprar</button>
                                                        </div>
                                                    </div>
                    `);
                }
            }
        }
    );
}
