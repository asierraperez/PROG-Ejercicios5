/**
 * crea un objeto para almacenar los datos de un cuadro
 * @param {object} obj_pintura - 
 * @returns {obj_pintura} cuadro - datos del cuadro
 */
function pintura(obj_pintura) {
    /**
     * nombre del autor
     * @type {string}
     */
    var autor = entrada(" autor del cuadro")
    /**
     * nombre del estilo
     * @type {string}
     */
    var estilo = entrada(" estilo del cuadro")
    /**
     * guarda los datos anteriores
     * @type {obj_pintura}
     */
    var cuadro = new obj_pintura(autor, estilo)
    cuadro.nombre = entrada(" nombre del cuadro")
    cuadro.alabar()
    return cuadro

}