function conteo(dinero,billetes,contar,tabla){
    for (let index = 0; index < 6; index++) {
        while (dinero >= contar[index]) {
            dinero = dinero - contar[index]
            billetes[index]++
            console.log(billetes[index])
        }
        if (billetes[index] > 0) {
            tabla = tabla + (billetes[index] + " billete de " + contar[index] + " euros\n")
            console.log(tabla)
        }

    }
    return tabla
}