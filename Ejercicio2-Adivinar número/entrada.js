/**
 * Recoge un valor introducido por el usuario
 * @returns {number} numero
 */
function entrada() {
    /**
     * numero introducido por el usuario
     * @type {number}
     */
    var numero = prompt("Adivina el numero\nIntroduce un numero entre menor a 100")
    numero = parseInt(numero)
    return numero
}