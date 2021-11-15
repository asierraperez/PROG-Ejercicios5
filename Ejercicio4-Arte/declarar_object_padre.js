/**
 * genera el objeto padre arte
 * @returns {object} arte
 */
function declarar_object_padre() {
    /**
     * objeto padre
     * @type {object}
     */
    var arte = function () { }
    arte.prototype.nombre = ""
    arte.prototype.alabar = function alabarObra() {
        console.log(this.nombre + " es impresionante")
    }
    return arte
}