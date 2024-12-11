class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularPrecioTotal() {
        return this.precio * this.cantidad;
    }
}

alert("Bienvenido a ProGainz");

const listaProductos = [
    {id: 1, nombre: "Proteina", precio: 500},
    {id: 2, nombre: "Creatina", precio: 700},
    {id: 3, nombre: "Gainer", precio: 1000},
    {id: 4, nombre: "Pre-entreno", precio: 600},
    {id: 5, nombre: "Vitaminas", precio: 300},
    {id: 6, nombre: "Shaker", precio: 200}
]

const productos = [];
let nombre = "";
let precio = 0;
let precioTotal = 0;
let cantidad = 0;
let cantidadTotal = 0;
let seguirComprando = true;

function tiendaSuplementos() {
    do {
        nombre = prompt("Que suplemento desea comprar?\n Proteina\n Creatina\n Gainer\n Pre-entreno\n Vitaminas\n Shaker");
        if (!validarProductos(nombre)) {
            alert("El producto ingresado no es válido, por favor vuelva a intentarlo");
            continue;
        }

        cantidad = parseInt(prompt("Que cantidad quiere llevar?"));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("La cantidad ingresada no es válida, por favor vuelva a intentarlo");
            continue;
        }

        const encontrarProducto = listaProductos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase())
        if (encontrarProducto) {
            precio = encontrarProducto.precio;
        }

        let producto = new Producto(nombre, precio, cantidad);
        productos.push(producto)

        precioTotal += producto.calcularPrecioTotal();

        cantidadTotal += cantidad;

        seguirComprando = confirm("Desea seguir comprando?");
    } while (seguirComprando);
    alert(`Resumen de la compra:\nCantidad de productos: ${cantidadTotal}\nPrecio total: ${precioTotal}`);
}

function validarProductos() {
    return listaProductos.some(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}
tiendaSuplementos();
console.log(productos);
