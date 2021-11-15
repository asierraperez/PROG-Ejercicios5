/**
 * 
 * @param {number} n_introducido - numero introducido por el usuario
 * @returns {boolean} True=> numero valido; False=> numero no válido
 */
function comprobar(n_introducido) {
    if (n_introducido > 100) {
        alert("Error, " + n_introducido + " no es valido\nInténtelo de nuevo")
        return false
    } else {
        return true
    }
}