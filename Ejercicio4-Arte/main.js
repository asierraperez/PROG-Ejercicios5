function main() {
    var arte = declarar_object_padre()
    //Con los numeros a continuacion puedo usar un solo .js para declarar todos los hijos
    var obj_cine = declarar_object_hijo(arte, 1)
    var obj_escultura = declarar_object_hijo(arte, 2)
    var obj_pintura = declarar_object_hijo(arte, 3)
    var obj_teatro = declarar_object_hijo(arte, 4)

    while (menu <=4) {
        var menu = prompt("¿Que quieres hacer?\n1.-Cine\n2.-Escultura\n3.-Pintura\n4.-Teatro\n5.-Salir")
        menu = parseInt(menu)
        switch (menu) {
            case 1:
                var peli = cine(obj_cine)
                salida("de la pelicula", peli, menu)
                break;
            case 2:
                var figura = escultura(obj_escultura)
                salida("de la escultura", figura, menu)
                break;
            case 3:
                var cuadro = pintura(obj_pintura)
                salida("del cuadro", cuadro, menu)
                break;
            case 4:
                var obra = teatro(obj_teatro)
                salida("de la obra", obra, menu)
                break;
            default:
                break;
        }
    }

}
main()