function producto (nombre, precio) {
    this.name = nombre;
    this.price = precio;
    this.agregarCarrito = () => {
        Carrito.push(this.name);
        total = this.price + total;
    }
}

let total = 0;
const Carrito = []
let comprar = true;

producto();

producto= [];

document.title = "Pietro Clothes";

const containerDiv = document.querySelector(".container");
const carritoDiv = document.querySelector(".carrito");
const totalCarritoDiv = document.querySelector(".totalCarrito");
const btnBorrar = document.getElementById("btnBorrar")
const checkbox = document.getElementById("checkbox");
const precioTotal = document.querySelector(".total");
const finalizar = document.getElementById("finalizar");
const cancelar = document.getElementById("cancelar");
const cuotas = document.querySelector('#cuotas');
const formaPago = document.querySelector('#formaPago');
const formCuota = document.querySelector('.form-cuota');
const divCuota = document.querySelector('.divCuotas');
const tipoDePago = document.querySelector('.tipoDePago');
let carrito = JSON.parse(localStorage.getItem('carrito')) || []

const productos = [];
const respuesta = async ()=>{
    const response = await fetch ("../../data.json");
    const data = await response.json();
    data.forEach(element=>{
        productos.push(element);
    })
    crearCards(data);
}
respuesta();


function crearCards(arrayConProductos){
    arrayConProductos.forEach(element=>{
        let {nombre, precio, img, id} = element
        containerDiv.innerHTML += `<div style="padding: 20px; background-color:white; border: 2px solid black;">
        <h4>${nombre}</h4>
        <p>$${precio}</p>
        <img src="Images/${img}" alt="">
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
    let totalCarrito;
    totalCarrito = carrito.reduce((acc, el) => acc + el.precio * el.cantidad,0)
    totalCarritoDiv.innerHTML += `
    <p>El total de su compra es $${totalCarrito}</p>
    `
    console.log(totalCarrito);

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

function fin(){
    finalizar.addEventListener("click",()=>{
        
        Swal.fire({
            icon: 'success',
            title: 'Compra exitosa!!!',
            text: 'Su compra finalizo correctamente, esperamos volver a verlo pronto muchas gracias por su visita 😀',
        })

        localStorage.removeItem("carrito");
        for (let index = 0; index < carrito.length; index++) {
            carrito.splice(index,carrito.length);;
        }
        console.log("fin");
        console.log(carrito);
        crearCarritoCard();
    })
}

fin();

let pagar;
let totalPagar;
let valorCuota;
formaPago.addEventListener('change', () => {
    pagar = formaPago.value.toLowerCase()
    seleccionPago();
});

//funcion para seleccionar forma de pago
const seleccionPago = () => {
    if (pagar === 'debito' || pagar === 'transferencia') {
        divCuota.classList.add('oculta')
        finalizar.classList.remove('oculta')
        totalPagar = totalCarritoDiv * 0.85;
        //mensaje libreria pago realizado con exito
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Realizó su pago con exito',
            color: 'rgb(156, 19, 138)',
            text: `Usted eligió la forma de pago ${pagar} con un descuento del 15%, su compra total es de $ ${totalPagar} Final`,
            showConfirmButton: false,
            timer: 4500
        })
        tipoDePago.innerText=`Usted eligió la forma de pago ${pagar} con un descuento del 15%, su compra total es de $ ${totalPagar} Final`;
    } else {
        divCuota.classList.remove('oculta')
        totalPagar = totalCarritoDiv;
        //evento change para elegir cuotas
        cuotas.addEventListener('change', () => {
            valorCuota = cuotas.value.toLowerCase();
            console.log(valorCuota);
            seleccionCuotas();
            //mensaje libreria pago realizado con exito
            Swal.fire({
                position: 'center',
                icon: 'success',
                color: 'rgb(156, 19, 138)',
                text: `Usted eligió la forma de pago ${pagar} en cantidad de cuotas, ${valorCuota}, monto de cuota a pagar ${parseInt(totalCuota)} Final`,
                showConfirmButton: false,
                timer: 5500
            })
            tipoDePago.innerText=`Usted eligió la forma de pago ${pagar} en cantidad de cuotas, ${valorCuota} , monto de cuota a pagar $ ${parseInt(totalCuota)} Final`;
        })
    }
}

//funcion para seleccionar cuotas
const seleccionCuotas = () => {
    if (valorCuota === 'una') {
        totalCuota = totalPagar / 1;
    } else if (valorCuota === 'tres') {
        totalCuota = (totalPagar * 1.25) / 3;
    } else {
        totalCuota = (totalPagar * 1.40) / 6;
    }
}
//cancelar
function cancel(){
    cancelar.addEventListener("click",()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Estas seguro que quieres cancelar tu compra?',
            text: "No podrás recuperar tu carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, borrar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'BORRADO!',
                'Su carrito fue vaciado.',
                'success'
            )
            localStorage.removeItem("carrito");
            for (let index = 0; index < carrito.length; index++) {
            carrito.splice(index,carrito.length);;
            }
            console.log(carrito);
            crearCarritoCard();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
                'CANCELADO',
                'Puede continuar su compra 🛒',
                'error'
                )
            }
        })
    })
}
crearCarritoCard();
cancel();