function main() {
    /**
     * objeto padre
     * @type {object}
     */
    var arte = declarar_object_padre()
    //Con los numeros a continuacion puedo usar un solo .js para declarar todos los hijos
    /**
     * objeto hijo cine
     * @type {cine}
     */
    var obj_cine = declarar_object_hijo(arte, 1)
    /**
    * objeto hijo escultura
    * @type {escultura}
    */
    var obj_escultura = declarar_object_hijo(arte, 2)
    /**
    * objeto hijo pintura
    * @type {pintura}
    */
    var obj_pintura = declarar_object_hijo(arte, 3)
    /**
    * objeto hijo teatro
    * @type {teatro}
    */
    var obj_teatro = declarar_object_hijo(arte, 4)
    /**
     * selección de operación a realizar
     * @type {menu}
     */
    var menu = 0

    while (menu <= 4) {

        menu = prompt("¿Que quieres hacer?\n1.-Cine\n2.-Escultura\n3.-Pintura\n4.-Teatro\n5.-Salir")
        menu = parseInt(menu)
        switch (menu) {
            case 1:
                /**
                 * guarda los datos de una pelicula
                 * @type {obj_cine}
                 */
                var peli = cine(obj_cine)
                salida("de la pelicula", peli, menu)
                break;
            case 2:
                /**
                 * guarda los datos de una escultura
                 * @type {obj_escultura}
                 */
                var figura = escultura(obj_escultura)
                salida("de la escultura", figura, menu)
                break;
            case 3:
                /**
                 * guarda los datos de una cuadro
                 * @type {obj_pintura}
                 */
                var cuadro = pintura(obj_pintura)
                salida("del cuadro", cuadro, menu)
                break;
            case 4:
                /**
                 * guarda los datos de una obra de teatro
                 * @type {obj_teatro}
                 */
                var obra = teatro(obj_teatro)
                salida("de la obra", obra, menu)
                break;
            default:
                break;
        }
    }

}
main()