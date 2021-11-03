function main() {
    var confirmar = false
    do {
        var n_random = random(n_random)
        comparacion(n_random)
       /* for (let index = 0; index < 5; index++) {
            var n_introducido = entrada()
            if (n_introducido == n_random) {
                alert("Enhorabuena!!,\nAcertaste el numero\nX = "+n_random)
                break
            }
            if (n_introducido < n_random) {
                alert("Fallaste,\n" + n_introducido + " < X\nTe quedan " + (5 - (index + 1)) + " intentos")
            } else if (n_introducido > n_random) {
                alert("Fallaste,\n" + n_introducido + " > X\nTe quedan " + (5 - (index + 1)) + " intentos")
            }

        }*/
        confirmar=confirmacion()

    } while (confirmar == true );


}
main()