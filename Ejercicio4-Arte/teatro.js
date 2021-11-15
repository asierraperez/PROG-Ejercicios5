/**
 * crea un objecto para almacenar los datos de una obra de teatro
 * @param {object} obj_teatro 
 * @returns {obj_teatro} - datos almacenados
 */
function teatro(obj_teatro) {
    /**
     * duracion de la obra
     * @type {number}
     */
    duracion = entrada(" duracion de la obra")
    /**
     * epoca en la que se escribió
     * @type {string}
     */
    epoca = entrada(" epoca de la obra")
    /**
     * guarda los datos anteriores
     * @type {obj_teatro}
     */
    obra = new obj_teatro(duracion, epoca)
    obra.nombre = entrada(" nombre de la obra")
    obra.alabar()
    return obra
}