function teatro(obj_teatro,duracion,epoca){
    duracion=entrada(" duracion de la obra")
    epoca=entrada(" epoca de la obra")
    obra=new obj_teatro(duracion,epoca)
    obra.nombre=entrada(" nombre de la obra")
    return obra
}