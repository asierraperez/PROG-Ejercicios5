function pintura(obj_pintura,autor,estilo){
    var autor=entrada(" autor del cuadro")
    var estilo=entrada(" estilo del cuadro")
    var cuadro=new obj_pintura(autor,estilo)
    cuadro.nombre=entrada(" nombre del cuadro")
    return cuadro
    
}