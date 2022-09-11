// function solicitarNombre() {
//     alert("Bienvenido a Pietro Clothes")
//     let nombre = prompt("Ingrese su nombre");
//     while(nombre === "")
//     nombre = prompt("Ingrese su nombre");
//     let apellido = prompt("ingrese su apellido");
//     while(apellido === "")
//     apellido = prompt("ingrese su apellido");
//     alert("Hola " + nombre + " " + apellido + "!");
// }

const { removeAllListeners } = require("npmlog");
const { updateLocale } = require("yargs");

// function mostrarRopa() {
//     let ropa;
//     do{
//         ropa = parseInt(prompt("Que ropa va a llevar? \n1)Hoodie\n2)Jogger\n3)Zapatillas"))
//     }while(ropa !=1 && ropa !=2 && ropa !=3);
// switch(ropa){
//     case 1:
//         return "Hoodie";
//     case 2:
//         return "Jogger";
//     case 3:
//         return "Zapatillas";
// }
// }

// function confirmarPrecio(ropa) {
//     if(ropa==="Hoodie"){
//         return 7500;
//     }
//     else if(ropa==="Jogger"){
//         return 6500;
//     }
//     else{
//         return 15000;
//     }
// }

// function cobrar(ropaNombre,precioRopa) {
//     alert("Usted eligió el siguiente producto: " +ropaNombre+ " \nPrecio: $" +precioRopa)
//     let pago;
//     do{
//         pago = parseInt(prompt("Con que medio de pago quiere abonar? \n1)Efectivo\n2)Tarjeta crédito\n3)Tarjeta débito"))
//     }while(pago !=1 && pago !=2 && pago !=3);
// switch(pago){
//     case 1:
//         alert("Efectivo");
//         break;
//     case 2:
//         alert("Tarjeta Crédito");
//         break;
//     case 3:
//         alert("Tarjeta Débito");
//         break;
//     }
// }

// solicitarNombre();

function producto (nombre, precio) {
    this.name = nombre;
    this.price = precio;
    this.agregarCarrito = () => {
        Carrito.push(this.name);
        total = this.price + total;
    }
}

const producto1 = new producto ("Jogger", 6500)
const producto2 = new producto ("Hoodie", 7500)
const producto3 = new producto ("Zapatillas", 15000)
const producto4 = new producto ("Gorra", 4000)
const producto5 = new producto ("Remera", 4500)
const producto6 = new producto ("Campera", 20000)

let total = 0;
const Carrito = []
let comprar = true;

// while (comprar) {
//     let producto = prompt("¿Qué prenda desea llevar?\nJogger\nHoodie\nZapatillas\nGorra\nRemera\nCampera\nFinalizar compra")
    
//     if (producto === "Jogger") {
//             producto1.agregarCarrito();
//             console.log(Carrito);
//         }

//             else if (producto === "Hoodie") {
//                 producto2.agregarCarrito();
//                 console.log(Carrito);
//                 }

//             else if (producto === "Zapatillas") {
//                 producto3.agregarCarrito();
//                 console.log(Carrito);
//                 }

//             else if (producto === "Gorra") {
//                 producto4.agregarCarrito();
//                 console.log(Carrito);
//                 }
        
//             else if (producto === "Remera") {
//                 producto5.agregarCarrito();
//                 console.log(Carrito);
//                 }

//             else if (producto === "Campera") {
//                 producto6.agregarCarrito();
//                 console.log(Carrito);
//                 }

//             else if (producto === "Finalizar compra") {
//                 comprar = false;
//                 console.log("Las prendas seleccionadas son:\n"+Carrito.join("\n")+".\nEl precio total de tu compra es $"+total);
//             }

//             else {
//                 alert("No seleccionaste ninguna prenda");
//             }
//         }

producto();

producto= [];
producto.push(producto1,producto2,producto3,producto4,producto5,producto6)

// let encontrado= producto.find(el=>{
//     return el.name === "Hoodie";
// })

// console.log(encontrado);

// let precioMayor= producto.filter(el=>{
//     return el.price > 10000;
// })

// console.log(precioMayor)

const productos= [
    { id: 1, nombre: "Hoodie", precio: 7500, img: "hoodie.jpg" },
    { id: 2, nombre: "Zapatillas", precio: 15000, img: "zapatillas.jpg" },
    { id: 3, nombre: "Remera", precio: 4500, img: "remera.jpg" },
    { id: 4, nombre: "Campera", precio: 20000, img: "campera.jpg" },
    { id: 5, nombre: "Gorra", precio: 4000, img: "gorra.jpg" },
    { id: 6, nombre: "Jogger", precio: 6500, img: "jogger.jpg" },
];

for (const producto of productos) {
    let li= document.createElement('li')
    li.innerHTML=`
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <img src="../../Images/${producto.img}" alt="">`
    ul.append(li) 
}

// const titulo= document.getElementsByClassName('card_header');
// const texto= document.createElement('p');
// texto.innerHTML= `<p>Ropa nueva</p>`;
// document.titulo.append(texto);