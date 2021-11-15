function main() {
    /**
     * Cantidad de dinero introducida por el usuario
     * @type {number}
     */
    var dinero
    /**
     * Comprobación, true=> cantidad valida; false=> cantidad no válida
     * @type {boolean}
     */
    var valido = false
    /**
     * Recoge las cantidades para mostrarlas al usuario
     * @type {string}
     */
    var tabla = ""
    do {
        dinero = entrada()
        valido = comprobar(dinero)
    } while (valido == false);
    tabla = conteo(dinero, tabla)
    salida(tabla)
}
main()