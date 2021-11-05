function cambio_datos(menu_datos, user) {
    switch (menu_datos) {
        case 1:
            user.nombre = prompt("Introduce nuevo nombre")
            cambio_html(user.nombre,"nombre")
            break;
        case 2:
            user.apellidos = prompt("Introduce nuevos apellidos")
            cambio_html(user.apellidos,"apellidos")
            break;
        case 3:
            user.direccion = prompt("Introduce nueva dirrecion")
            cambio_html(user.direccion,"direccion")
            break;
        case 4:
            user.tlfno = prompt("Introduce nuevo telefono")
            cambio_html(user.tlfno,"tlfno")
            break;
        case 5:
            user.email = prompt("Introduce nuevo email")
            cambio_html(user.email,"email")
            break;
        default:
            alert("Error,\nDato introducido no valido, intentalo de nuevo")
            break;
           
    }
    


}