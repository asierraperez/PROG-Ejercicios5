/**
 * Visualiza los datos introducidos
 * @param {string} nombre - nombre de la peli/escultura/cuadro/obre 
 * @param {Object} obra_arte - objeto donde estan almacenados los datos
 * @param {number} selector - selección del objeto
 */
function salida(nombre, obra_arte, selector) {
    switch (selector) {
        case 1:
            //cine
            alert("Nombre " + nombre + ": " + obra_arte.nombre + "\nDuracion " + nombre + ": " + obra_arte.duracion + "\nGenero " + nombre + ": " + obra_arte.genero)
            console.table(obra_arte)
            obra_arte.alabar()
            obra_arte.mostrar()
            break;
        case 2:
            //escultura
            alert("Nombre " + nombre + ": " + obra_arte.nombre + "\nDuracion " + nombre + ": " + obra_arte.material + "\nGenero " + nombre + ": " + obra_arte.epoca)
            console.table(obra_arte)
            obra_arte.alabar()
            obra_arte.mostrar()
            break;
        case 3:
            //pintura
            alert("Nombre " + nombre + ": " + obra_arte.nombre + "\nDuracion " + nombre + ": " + obra_arte.autor + "\nGenero " + nombre + ": " + obra_arte.estilo)
            console.table(obra_arte)
            obra_arte.alabar()
            obra_arte.mostrar()
            break;
        case 4:
            //teatro
            alert("Nombre " + nombre + ": " + obra_arte.nombre + "\nDuracion " + nombre + ": " + obra_arte.duracion + "\nGenero " + nombre + ": " + obra_arte.epoca)
            console.table(obra_arte)
            obra_arte.alabar()
            obra_arte.mostrar()
            break;
    }

}