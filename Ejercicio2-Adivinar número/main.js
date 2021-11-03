function main() {
    var confirmar = false
    do {
        var n_random = random(n_random)
        comparacion(n_random)
        confirmar=confirmacion()
    } while (confirmar == true );
}
main()