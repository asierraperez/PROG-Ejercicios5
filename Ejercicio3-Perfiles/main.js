function main() {
    var Perfil = function () {
        var nombre = ""
        var apellidos = ""
        var direccion = ""
        var tlfno = ""
        var email = ""
    }
    var user = new Perfil();
    var menu_op;
    var menu_datos;
    var datos = ["Nombre ", "Apellidos ", "Direccion ", "Telefono ", "Email"]
    var usuario = []
    var tabla = ""
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