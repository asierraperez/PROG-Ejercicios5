/**
 * crea un objecto para almacenar los datos de una escultura
 * @param {object} obj_escultura 
 * @returns {obj_escultura} figura - datos de la escultura
 */
function escultura(obj_escultura) {
    /**
     * material de la escultura
     * @type {string}
     */
    var material = entrada(" material de la escultura")
    /**
     * epoca en la que se esculpio
     * @type {string}
     */
    var epoca = entrada(" epoca de la escultura")
    /**
     * guarda los datos anteriores
     * @type {obj_escultura}
     */
    var Figura = new obj_escultura(material, epoca)
    Figura.nombre = entrada(" nombre de la escultura")
    Figura.alabar()
    return Figura
}