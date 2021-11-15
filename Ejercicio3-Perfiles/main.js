function main() {
    /**
     * Objeto con los tipos de dato de cada perfil
     * @type {object}
     */
    var perfil = declarar_perfil()
    /**
     * variable de tipo perfil
     * @type {perfil}
     */
    var user = new perfil();
    /**
     * menu principal, operacion a realizar
     * @type {number}
     */
    var menu_op;
    /**
     * menu secundario, dato del perfil a modificar
     * @type {number}
     */
    var menu_datos;
    /**
     * array con el tipo de los datos de cada usuario
     * @type {Array}
     */
    var datos = ["Nombre ", "Apellidos ", "Direccion ", "Telefono ", "Email"]
    /**
     * array  que guarda los diferentes usuarios
     * @type {Array}
     */
    var usuario = []
    /**
     * almacena los datos para mostrarlos por pantalla
     * @type {string}
     */
    var tabla = ""
    /**
     * confirmacione de si se quiere realizar alguna otra operación
     * true=> finalizar ;false=> repetir operación
     * @type {boolean}
     */
    var confirmar_datos, confirmar_op = false
    entrada(user, usuario)
    do {
        menu_op = prompt("¿Que quieres hacer?\n1.-Visualizar tus datos\n2.-Cambiar tus datos")
        menu_op = parseInt(menu_op)
        switch (menu_op) {
            case 1:
                visualizar(user, datos, usuario, tabla)
                break;
            case 2:
                do {
                    menu_datos = prompt("Selecciona el dato a cambiar\n1.-Nombre\n2.-Apellidos\n3.-Direccion\n4.-Teléfono\n5.-Email")
                    menu_datos = parseInt(menu_datos)
                    cambio_datos(menu_datos, user)
                    confirmar_datos = confirmar()
                } while (confirmar_datos == false);
                break;
            default:
                console.log("en default menu_op")
                alert("Error,\nDato introducido no valido, intentalo de nuevo")
                break;
        }
        confirmar_op = confirmar()
    } while (confirmar_op == false);
}

main()