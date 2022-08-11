const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
         nav.style.right = '0px';
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.style.right = '-300px';
    })
}

const cart = document.getElementById('cart');
const bag = document.getElementById('bag');
// const vac = document.getElementById('carrito-vaciar');
const closeCart = document.getElementById('close-cart');


if(bag){
    bag.addEventListener('click', () => {
        cart.style.right='0px';
    })
}

// if(vac){
//     vac.addEventListener('click', () => {
//         cart.style.right = '-35%';
//     })
// }

if(closeCart){
    closeCart.addEventListener('click', () =>{
        cart.style.right = '-35%';
    })
}