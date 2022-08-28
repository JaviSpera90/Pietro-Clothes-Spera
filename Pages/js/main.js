function solicitarNombre() {
    alert("Bienvenido a Pietro Clothes")
    let nombre = prompt("Ingrese su nombre");
    while(nombre === "")
    nombre = prompt("Ingrese su nombre");
    let apellido = prompt("ingrese su apellido");
    while(apellido === "")
    apellido = prompt("ingrese su apellido");

    alert("Hola " + nombre + " " + apellido + "!");
}

function mostrarRopa() {
    let ropa;
    do{
        ropa = parseInt(prompt("Que ropa va a llevar? \n1)Hoodie\n2)Jogger\n3)Zapatillas"))
    }while(ropa !=1 && ropa !=2 && ropa !=3);
switch(ropa){
    case 1:
        return "Hoodie";
    case 2:
        return "Jogger";
    case 3:
        return "Zapatillas";
}
}

function confirmarPrecio(ropa) {
    if(ropa==="Hoodie"){
        return 7500;
    }
    else if(ropa==="Jogger"){
        return 6500;
    }
    else{
        return 15000;
    }
}

function cobrar(ropaNombre,precioRopa) {
    alert("Usted eligió el siguiente producto: " +ropaNombre+ " \nPrecio: $" +precioRopa)
    let pago;
    do{
        pago = parseInt(prompt("Con que medio de pago quiere abonar? \n1)Efectivo\n2)Tarjeta crédito\n3)Tarjeta débito"))
    }while(pago !=1 && pago !=2 && pago !=3);
switch(pago){
    case 1:
        alert("Efectivo");
        break;
    case 2:
        alert("Tarjeta Crédito");
        break;
    case 3:
        alert("Tarjeta Débito");
        break;
    }
}

solicitarNombre();
let ropaNombre = mostrarRopa();
let precioRopa = confirmarPrecio(ropaNombre);
cobrar(ropaNombre,precioRopa)