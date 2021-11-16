/**
 * Creación del objeto de tipo Perfil
 * @returns {object}
 */
function declarar_perfil() {
    /**
     * Objeto con los datos del perfil
     * @type {object}
     */
    var Perfil = function () {
        /**
        * nombre del usuario
        * @type {string}
        */
        var nombre = ""
        /**
        * apellidos del usuario
        * @type {string}
        */
        var apellidos = ""
        /**
        * direccion del usuario
        * @type {string}
        */
        var direccion = ""
        /**
        * direccion de telefono del usuario
        * @type {string}
        */
        var tlfno = ""
        /**
        * direccion de email del usuario
        * @type {string}
        */
        var email = ""
    }
    return Perfil
}