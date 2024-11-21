let producto = "";
let cantidad = 0;
let cantidadTotal = 0;
let precio = 0;
let precioTotal = 0;
let seguirComprando = true;

alert("Bienvenido a mi Ecommerce");

function tiendaTecnologica() {
    do {
        producto = prompt("Que producto desea comprar?\n Celular\n Laptop\n TV\n Tablet");
        cantidad = parseInt(prompt("Que cantidad quiere llevar?"));

        cantidadCorrecta();

        elegirProductos();

        precioTotal += precio * cantidad;
        cantidadTotal += cantidad;

        seguirComprando = confirm("Desea seguir comprando?");
    } while (seguirComprando);
    alert(`Resumen de la compra:\nCantidad de productos: ${cantidadTotal}\nPrecio total: ${precioTotal}`);
}
tiendaTecnologica();

function elegirProductos() {
    switch (producto) {
        case "Celular":
            precio = 1500;
            break;
        case "Laptop":
            precio = 4000;
            break;
        case "TV":
            precio = 3000;
            break;
        case "Tablet":
            precio = 2000;
            break;
        default:
            alert("Producto no disponible")
    }
}

function cantidadCorrecta() {
    while (cantidad <= 0 || isNaN(cantidad)) {
        alert("No se agregaron productos o el formato es incorrecto");
        cantidad = parseInt(prompt("Que cantidad quiere llevar?"));
    }
}