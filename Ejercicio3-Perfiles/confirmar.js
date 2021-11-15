/**
 * Pregunta al usuario si quiere hacer alguna otra operación
 * @returns {bool} true=> finalizar ;false=> repetir operación
 */
function confirmar() {
    do {
        /**
         * recoge la elección del usuario
         */
        var confirmar = prompt("¿Quieres hacer alguna otra operacion?(Y/N)")
    } while ((confirmar != "y") & (confirmar != "n"));

    if (confirmar == "y") {
        return false
    } else {
        return true
    }
}