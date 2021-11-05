function escultura(obj_escultura,material,epoca){
    material=entrada(" material de la escultura")
    epoca=entrada(" epoca de la escultura")
    Figura=new obj_escultura(material,epoca)
    Figura.nombre=entrada(" nombre de la escultura")
    Figura.alabar()
    return Figura
}