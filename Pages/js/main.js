function producto (nombre, precio) {
    this.name = nombre;
    this.price = precio;
    this.agregarCarrito = () => {
        Carrito.push(this.name);
        total = this.price + total;
    }
}

// const producto1 = new producto ("Jogger", 6500)
// const producto2 = new producto ("Hoodie", 7500)
// const producto3 = new producto ("Zapatillas", 15000)
// const producto4 = new producto ("Gorra", 4000)
// const producto5 = new producto ("Remera", 4500)
// const producto6 = new producto ("Campera", 20000)

let total = 0;
const Carrito = []
let comprar = true;

producto();

producto= [];
// producto.push(producto1,producto2,producto3,producto4,producto5,producto6)

// const productos= [
//     { id: 1, nombre: "Hoodie", precio: 7500, img: "hoodie.jpg" },
//     { id: 2, nombre: "Zapatillas", precio: 15000, img: "zapatillas.jpg" },
//     { id: 3, nombre: "Remera", precio: 4500, img: "remera.jpg" },
//     { id: 4, nombre: "Campera", precio: 20000, img: "campera.jpg" },
//     { id: 5, nombre: "Gorra", precio: 4000, img: "gorra.jpg" },
//     { id: 6, nombre: "Jogger", precio: 6500, img: "jogger.jpg" },
// ];

// console.log(productos);
document.title = "Pietro Clothes";

const containerDiv = document.querySelector(".container");
const carritoDiv = document.querySelector(".carrito");
const totalCarritoDiv = document.querySelector(".totalCarrito");
let carrito = JSON.parse(localStorage.getItem('carrito')) || []

const productos = [];
const respuesta = async ()=>{
    const response = await fetch ("js/data.json");
    const data = await response.json();
    data.forEach(element=>{
        productos.push(element);
    })
    crearCards(data);
}
respuesta();


function crearCards(arrayConProductos){
    // containerDiv.innerHTML = "";
    arrayConProductos.forEach(element=>{
        let {nombre, precio, img, id} = element
        containerDiv.innerHTML += `<div style="padding: 20px; background-color:white; border: 2px solid black;">
        <h4>${nombre}</h4>
        <p>$${precio}</p>
        <img src="../../Images/${img}" alt="">
        <button class="btnCarrito" id="btn-agregar${id}">Agregar</button>
        </div>`
    })
    agregarFuncionAlBoton(arrayConProductos);
}

function agregarFuncionAlBoton(){
    productos.forEach(producto=>{
        document
        .querySelector(`#btn-agregar${producto.id}`)
        .addEventListener("click",()=>{
            agregarAlCarrito(producto)
        })
    })
}

function agregarAlCarrito(producto){
    let existe = carrito.some((prod)=>prod.id === producto.id);
    if(existe===false){
        producto.cantidad = 1
        carrito.push(producto)
    } else{
        let prodFind = carrito.find((prod)=> prod.id===producto.id);
        prodFind.cantidad++
    }

crearCarritoCard();
}

function crearCarritoCard(){
    carritoDiv.innerHTML = ""
    carrito.forEach((prod)=>{
        let valorSuma = `${prod.precio * prod.cantidad}`
        carritoDiv.innerHTML += `
        <div style="padding: 20px; background-color:white; border: 2px solid black;">
            <h4>${prod.nombre}</h4>
            <h3>CANTIDAD: ${prod.cantidad}</h3>
            <p>$${valorSuma}</p>
            <button class="btnCarrito" id="btn-borrar${prod.id}">Borrar</button>
            </div>`
    })
    totalCarritoDiv.innerHTML = '';
    let totalCarrito = carrito.reduce((acc, el) => acc + el.precio * el.cantidad,0)
    totalCarritoDiv.innerHTML += `
    <p>El total de su compra es $${totalCarrito}</p>
    `
    console.log(totalCarrito);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    localStorage.setItem('total', JSON.stringify(total))

    borrarProducto()
}

function borrarProducto(){
    carrito.forEach((producto)=>{
        document
        .querySelector(`#btn-borrar${producto.id}`)
        .addEventListener("click",()=>{
            let indice = carrito.findIndex((element)=>element.id===producto.id);
            carrito.splice(indice,1);
            crearCarritoCard()
        })
    })
}

crearCarritoCard();

  const { value: accept } = Swal.fire({
    title: 'WELCOME TO PIETRO CLOTHES',
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder:
      'You need to be over 18 years old for continue',
    confirmButtonText:
      'Enter <i class="fa fa-arrow-right"></i>',
  })
