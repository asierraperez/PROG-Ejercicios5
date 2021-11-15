function main() {
    /**
     * True=> repetir programa; False=> Finalizar
     * @type {boolean}
     */
    var confirmar = false
    /**
    * True=> numero valido; False=> numero no válido
    * @type {boolean}
    */
    var valido = false
    /**
    * True=> Se acerto el numero; False=> No se acerto el numero
    * @type {boolean}
    */
    var acierto = false
    /**
    * numero introducido por el usuario
    * @type {boolean}
    */
    var n_introducido
    do {
        /**
         * Numero aleatorio del 1 al 100
         * @type {number}
         */
        var n_random = random(n_random)
        //El usuario tiene 5 intentos para acertar
        for (let index = 0; index < 5; index++) {
            do {
                n_introducido = entrada()
                valido = comprobar(n_introducido)
            } while (valido == false);
            acierto = comparacion(n_random, n_introducido, index)
            if (acierto == true) {
                break
            }
        }
        salida(acierto, n_random)
        confirmar = confirmacion()
    } while (confirmar == true);
}
main()