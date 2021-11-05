function entrada(user,usuario) {
    user.nombre = prompt("Introduce tu nombre")
    //user.nombre ="alvaro"
    cambio_html(user.nombre,"nombre")
    usuario[0] = user.nombre
    user.apellidos = prompt("Introduce tu apellidos")
    //user.apellidos ="Sierra"
    cambio_html(user.apellidos,"apellidos")
    usuario[1] = user.apellidos
    user.direccion = prompt("Introduce tu direccion")
    //user.direccion ="Calle falsa"
    usuario[2] = user.direccion
    cambio_html(user.direccion,"direccion")
    user.tlfno = prompt("Introduce tu numero de telefono")
    //user.tlfno ="123456"
    cambio_html(user.tlfno,"tlfno")
    usuario[3] = user.tlfno
    user.email = prompt("Introduce tu direccion de email")
    //user.email ="a@jiop.es"
    cambio_html(user.email,"email")
    usuario[4] = user.email
    console.table(user)
}