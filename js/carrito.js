
let carrito = []
let stockProductos = [];

const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const contadorCarritoDesktop = document.getElementById('contadorCarritoDesktop');
const carritoPrecioTotal = document.getElementById('precioTotal');
const productosContainer = document.getElementById('productosContainer');

$(document).ready(function () {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        mostrarCarrito()
    }
    recuperarStock();
});

function recuperarStock() {
    let stockPs4 = JSON.parse(localStorage.getItem('stockPs4'))
    let stockXbox = JSON.parse(localStorage.getItem('stockXbox'))
    let stockConsolaPs4 = JSON.parse(localStorage.getItem('stockConsolaPs4'))
    let stockConsolaXbox = JSON.parse(localStorage.getItem('stockConsolaXbox'))

    if(stockPs4){   // DEVUELVE STOCK DE JUEGOS PS4 
        stockPs4.forEach(el => stockProductos.push(el))
        console.log(stockProductos)
    }
    if(stockConsolaPs4){   // DEVUELVE STOCK DE CONSOLA PS4 
        stockConsolaPs4.forEach(el => stockProductos.push(el))
        console.log(stockProductos)
    }
    if(stockXbox){  // DEVUELVE STOCK DE JUEGOS XBOX
        stockXbox.forEach(el => stockProductos.push(el))
        console.log(stockProductos)
    }
    if(stockConsolaXbox){   // DEVUELVE STOCK DE CONSOLA PS4 
        stockConsolaXbox.forEach(el => stockProductos.push(el))
        console.log(stockProductos)
    }
}


if (productosContainer) {
    productosContainer.addEventListener("click", e => {
        agregarCarrito(e)
    
       
        
    })
}

contenedorCarrito.addEventListener("click", e => {
    btnAccion(e)
})

const animarCarrito = () => {
     // ANIMAR CARRITO
    $(".fa-shopping-cart").animate({
        fontSize: "28px"
    },150)
    $(".fa-shopping-cart").animate({
        fontSize: "24px"
    },150)
}

const agregarCarrito = e => {
    if (e.target.classList.contains("btn-primary")){
        setCarrito (e.target.parentElement)
        animarCarrito()
    }
    if (e.target.classList.contains("btn-success")){
        setCarrito (e.target.parentElement)
        animarCarrito()
    }
    e.stopPropagation()
}

const setCarrito = productos => {
    let producto = {
        id: productos.querySelector("#carr__producto__id").dataset.id,
        nombre: productos.querySelector(".carr__producto__nombre").textContent,
        precio: productos.querySelector("#carr__producto__precio").textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    mostrarCarrito()
    actualizarCarrito()
}

const mostrarCarrito = () => {
    // SI NO HAY PRODUCTOS EN CARRITO, EL CONTENEDOR SE HACE MAS CHICO
    if (Object.keys(carrito).length === 0 ) {
            if (window.matchMedia('(max-width: 767px)').matches) {
                $(".modal-carrito").css("min-width", 150);
            } else {
                $(".modal-carrito").css("min-width", 500);
            };
    } else {  // SI HAY PRODUCTOS, AGRANDA SU TAMAÑO
            if (window.matchMedia('(max-width: 767px)').matches) {
                $(".modal-carrito").css("min-width", 270);
            } else {
                $(".modal-carrito").css("min-width", 750);
            }
    }


    contenedorCarrito.innerHTML = ""
    Object.values(carrito).forEach(producto => {
        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `<div class="container">
                            <div class="row">
                                <div class="col-6"><p><b>Nombre:</b> <span class="d-flex">${producto.nombre}</span></p></div>
                                <div class="col-2"><p><b>Precio:</b> <span class="precio-producto d-flex"> ${producto.precio}</span></p></div>
                                <div class="col-4 d-flex align-items-center"><p id="cantidad${producto.id}"><b>Cantidad:</b> <span class="d-flex">${producto.cantidad}</span></p>
                                    <td>
                                        <button class="btn btn-info btn-sm" id="btn-comprar-mas" data-id="${producto.id}">
                                            +
                                        </button>
                                        <button class="btn btn-danger btn-sm" id="btn-comprar-menos" data-id="${producto.id}">
                                            -
                                        </button>
                                    </td>
                                </div>
                            </div>
                        </div>
                        `
        contenedorCarrito.appendChild(div)
    })
    actualizarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


function  actualizarCarrito (){
    contadorCarrito.innerText = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad ,0 )
    contadorCarritoDesktop.innerText = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad ,0 )
    precioTotal.innerText = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0 )
    
    const btnVaciar = document.getElementById("btn-vaciar-carrito")
    btnVaciar.addEventListener("click", () => {
        carrito = {}
        mostrarCarrito()
    })
}

const btnAccion = e => {
    //AUMENTAR
    if(e.target.classList.contains("btn-info")) {
        console.log(carrito[e.target.dataset.id])
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        mostrarCarrito()
    }
    //DISMINUIR
    if(e.target.classList.contains("btn-danger")) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad === 0 ) {
            delete carrito[e.target.dataset.id]
        }
        mostrarCarrito()
    }
}