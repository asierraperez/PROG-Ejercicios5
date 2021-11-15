/**
 * Compara la cantidad introducida y devuelve el numero de billetes
 * @param {number} dinero - cantidad introducida por el usuario
 * @param {string} tabla - Recoge las cantidades para mostrarlas al usuario
 * @returns {string} aux_tabla - Tabla con todos lod billetes y cantidades
 */
function conteo(dinero, tabla) {
    /**
     * auxiliar de 'dinero'
     * @type {number}
     */
    var aux_dinero = dinero
    /**
     * auxiliar de 'tabla'
     * @type {string}
     */
    var aux_tabla = tabla
    /**
     * Recoge el numero de billetes de cada cantidad
     * @type {Array}
     */
    var billetes = [0, 0, 0, 0, 0, 0]
    /**
     * Billetes de cada tipo
     * @type {array}
     */
    var contar = [200, 100, 50, 20, 10, 5]
    //comparo la cantidad introducida con el valor de cada billete. Guardo las cantidades en 'billetes[]'
    for (let index = 0; index < contar.length; index++) {
        while (aux_dinero >= contar[index]) {
            aux_dinero = aux_dinero - contar[index]
            billetes[index]++
            console.log(billetes[index])
        }
        //Guardo el numero y el tipo de billetes
        if (billetes[index] > 0) {
            aux_tabla = aux_tabla + (billetes[index] + " billete de " + contar[index] + " euros\n")
            console.log(aux_tabla)
        }
    }
    return aux_tabla
}