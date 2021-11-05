function salida(nombre, obra_arte, selector) {
    switch (selector) {
        case 1:
            alert("Nombre " + nombre + ": " + obra_arte.nombre + "\nDuracion " + nombre + ": " + obra_arte.duracion + "\nGenero " + nombre + ": " + obra_arte.genero)
            console.table(obra_arte)
            obra_arte.alabar()
            obra_arte.mostrar()
            break;
        case 2:
            alert("Nombre " + nombre + ": " + obra_arte.nombre + "\nDuracion " + nombre + ": " + obra_arte.material + "\nGenero " + nombre + ": " + obra_arte.epoca)
            console.table(obra_arte)
            obra_arte.alabar()
            obra_arte.mostrar()
            break;
        case 3:
            alert("Nombre " + nombre + ": " + obra_arte.nombre + "\nDuracion " + nombre + ": " + obra_arte.autor + "\nGenero " + nombre + ": " + obra_arte.estilo)
            console.table(obra_arte)
            obra_arte.alabar()
            obra_arte.mostrar()
            break;
        case 4:
            alert("Nombre " + nombre + ": " + obra_arte.nombre + "\nDuracion " + nombre + ": " + obra_arte.duracion + "\nGenero " + nombre + ": " + obra_arte.epoca)
            console.table(obra_arte)
            obra_arte.alabar()
            obra_arte.mostrar()
            break;
    }

}