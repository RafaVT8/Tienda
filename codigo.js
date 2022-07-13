let historial = document.querySelector('.h-ventas');
//console.log(historial);
for (let i = 1; i <= 10; i++) {

    let venta = document.createElement('p');
    let node = document.createTextNode(`Venta-${i} | 10:${i}3:${i}4`);
    venta.appendChild(node);
    historial.appendChild(venta);

}