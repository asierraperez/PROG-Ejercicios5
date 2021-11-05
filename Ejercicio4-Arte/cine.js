function cine(obj_cine) {
    var duracion = entrada(" duracion de la pelicula")
    var genero = entrada(" genero de la pelicula")
    var peli = new obj_cine(duracion, genero)
    peli.nombre = entrada(" nombre de la pelicula")
    return peli
}