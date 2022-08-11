const contenedorProductos = document.getElementById('pro-container');
let stockProductos = [
    {
        "id": 1, "nombre": "Buzo 1", "cantidad": 1, "desc": "Remera", "precio": 1200, "talle": "xl", "urlImage":"images/products/f1.jpg"
    },
    {
        "id": 2, "nombre": "Buzo 2", "cantidad": 1, "desc": "Remera", "precio": 1300, "talle": "xl", "urlImage":"images/products/f2.jpg"
    },
    {
        "id": 3, "nombre": "Buzo 3", "cantidad": 1, "desc": "Remera", "precio": 200, "talle": "xl", "urlImage":"images/products/f3.jpg"
    },
    {
        "id": 4, "nombre": "Buzo 4", "cantidad": 1, "desc": "Remera", "precio": 200, "talle": "xl", "urlImage":"images/products/f4.jpg"
    }
]

stockProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('pro');
    div.innerHTML = `
    <img src="${producto.urlImage}" alt="">
    <div class="des">
        <span>adidas</span>
        <h5>${producto.nombre}</h5>
        <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <h4>${producto.precio}</h4>
    </div>
    <a id="agregar${producto.id}"><i class="fal fa-shopping-cart cart"></i></a>
    `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`);

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})

let carrito = []
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId);
    debugger;
    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === prodId){
                prod.cantidad ++;
            }
        });
    }
    else{
        const item = stockProductos.find((prod) => prod.id === prodId);
        carrito.push(item);
        console.log(carrito);
    }

    actualizarCarrito();
}

const eliminarDelCarrito = (prodId) => {
    const item = stockProductos.find((producto) => producto.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
    console.log(carrito);
}

//hay que crear el div y que on click, se muestre el carrito
const carritoContenedor = document.getElementById('carrito-container');
const counterCart = document.getElementById('counter-cart');
const totalPrice = document.getElementById('total-price-cart');

const actualizarCarrito = () => {
    carritoContenedor.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.classList.add('productCart');
        div.innerHTML = `
        <p> ${prod.nombre}</p>
        <p> Precio: ${prod.precio}</p>
        <p> Cantidad: <span id="cantidad"> ${prod.cantidad}</span></p>
        <button class="normal" onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"> Eliminar</button>
        `
        carritoContenedor.appendChild(div);

        // localStorage.setItem('carrito', JSON.stringify(carrito));
    })

    counterCart.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);;
    totalPrice.innerText = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0); // suma los precios de todos los productos, inicia en 0
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const emptyCartButton = document.getElementById('empty-cart');

emptyCartButton.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
})

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    actualizarCarrito();
}
)