/**
 * crea un objecto para almacenar los datos de una pelicula
 * @param {object} obj_cine - 
 * @returns {obj_cine} peli - datos de la pelicula
 */
function cine(obj_cine) {
    /**
     * duracion de la pelicula
     * @type {number}
     */
    var duracion = entrada(" duracion de la pelicula")
    /**
     * genero de la pelicula
     * @type {string}
     */
    var genero = entrada(" genero de la pelicula")
    /**
     * guarda los datos anteriores
     * @type {obj_cine}
     */
    var peli = new obj_cine(duracion, genero)
    peli.nombre = entrada(" nombre de la pelicula")
    peli.alabar()
    return peli
}