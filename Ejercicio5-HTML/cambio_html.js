/**
 * Muestro en el HTML los datos introducidos
 * @param {string} datos - Dato registrado
 * @param {string} posicion - posicion en el HTML
 */
function cambio_html(datos, posicion) {
    txt = document.getElementById(posicion);

    txt.innerHTML = "<p>" + datos + "</p>"
    console.log(txt.innerHTML);
}