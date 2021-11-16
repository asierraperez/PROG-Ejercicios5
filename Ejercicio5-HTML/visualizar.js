/**
 * Muestra por pantalla los datos
 * @param {perfil} user - datos del usuario 
 * @param {array} datos - Nombre de los datos
 * @param {array} usuario - datos del usuario por duplicado
 * @param {string} tabla - almacena los datos para mostrarlos por pantalla
 */
function visualizar(user, datos, usuario, tabla) {
    usuario[0] = user.nombre
    usuario[1] = user.apellidos
    usuario[2] = user.direccion
    usuario[3] = user.tlfno
    usuario[4] = user.email
    for (let index = 0; index < 5; index++) {
        tabla = tabla + (datos[index] + " " + usuario[index] + "\n")
    }
    alert(tabla)
}