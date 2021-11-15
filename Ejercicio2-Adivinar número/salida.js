/**
 * Muestra al usuario si acertó o no el numero 
 * @param {boolean} acierto - True=> Se acerto el numero; False=> No se acerto el numero
 * @param {number} n_random - Numero aleatorio del 1 al 100
 */
function salida(acierto, n_random) {
    if (acierto == true) {
        alert("Enhorabuena!!,\nAcertaste el numero\nX = " + n_random)
    }
    if (acierto == false) {
        alert("Perdiste,\nEl numero era el " + n_random)
    }
}
