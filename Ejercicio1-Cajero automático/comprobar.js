/**
 * Comprueba si la cantidad es multiplo de 5
 * @param {number} dinero - cantidad introducida por el usuario
 * @returns {boolean} valido - false=> cantidad no válida; true=> cantidad valida
 */
function comprobar(dinero) {
    var aux_dinero = dinero
    if (aux_dinero % 5 != 0) {
        alert("Error, " + aux_dinero + " no es una cantidad retirable\nInténtelo de nuevo")
        var valido = false
    }
    return valido
}