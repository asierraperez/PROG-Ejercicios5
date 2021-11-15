/**
 * Compara en nvalor introducido por el usuario con el generado aleatoriamente
 * @param {number} n_random - Numero aleatorio del 1 al 100
 * @param {number} n_introducido - numero introducido por el usuario
 * @param {number} index - Numero de intentos
 * @returns {boolean} - True=> Se acerto el numero; False=> No se acerto el numero
 */
function comparacion(n_random, n_introducido, index) {
    /**
     * Auxiliar de 'n_random'
     * @type {number}
     */
    var aux_n_random = n_random
    /**
     * auxiliar de 'n_introducido'
     * @type {number}
     */
    var aux_n_introducido = n_introducido
    /**
     * auxiliar de 'index'
     * @type {number}
     */
    var aux_index = index
    if (aux_n_introducido == aux_n_random) {
        return true
    }
    if (aux_n_introducido < aux_n_random) {
        alert("Fallaste,\n" + aux_n_introducido + " < X\nTe quedan " + (5 - (aux_index + 1)) + " intentos")
        return false
    } else if (aux_n_introducido > aux_n_random) {
        alert("Fallaste,\n" + aux_n_introducido + " > X\nTe quedan " + (5 - (aux_index + 1)) + " intentos")
        return false
    }
}