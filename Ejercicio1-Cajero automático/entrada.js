/**
 * Recoge la cantidad de dinero
 * @returns {number} dinero - cantidad introducida
 */
function entrada() {
    var dinero = prompt("Introduce una cantidad a retirar")
    dinero = parseInt(dinero)
    return dinero
}