function conteo(dinero, tabla) {
    var aux_dinero = dinero
    var aux_tabla = tabla
    var billetes = [0, 0, 0, 0, 0, 0]
    var contar = [200, 100, 50, 20, 10, 5]
    for (let index = 0; index < 6; index++) {
        while (aux_dinero >= contar[index]) {
            aux_dinero = aux_dinero - contar[index]
            billetes[index]++
            console.log(billetes[index])
        }
        if (billetes[index] > 0) {
            aux_tabla = aux_tabla + (billetes[index] + " billete de " + contar[index] + " euros\n")
            console.log(aux_tabla)
        }
    }
    return aux_tabla
}