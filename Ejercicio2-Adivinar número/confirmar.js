/**
 * Pregunta al usuario si quiere repetir la operación
 * @returns {boolean} True=> repetir programa; False=> Finalizar
 */
function confirmacion() {
    /**
     * recoge la respuesta del usuario
     * @type {string}
     */
    var confirmar = ""
    do {
        var confirmar = prompt("¿Quieres volver a intentarlo?(Y/N)")
        console.log(confirmar)
        confirmar = confirmar.toLowerCase()

        if ((confirmar != "y") & (confirmar != "n")) {
            alert("Error,\nVuelve a intentarlo")
        }
    } while ((confirmar != "y") & (confirmar != "n"));
    if (confirmar == "y") {

        return true
    } else {
        alert("Finalizando programa")
        return false
    }

}