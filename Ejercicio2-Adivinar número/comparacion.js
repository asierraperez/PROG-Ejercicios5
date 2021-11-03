function comparacion(n_random){
    var intentos   
    for (let index = 0; index < 5; index++) {
        do {
        var n_introducido = entrada()
        var valido=comprobar(n_introducido)
    } while (valido==false);
        if (n_introducido == n_random) {
            alert("Enhorabuena!!,\nAcertaste el numero\nX = "+n_random)
            break
        }
        if (n_introducido < n_random) {
            alert("Fallaste,\n" + n_introducido + " < X\nTe quedan " + (5 - (index + 1)) + " intentos")
        } else if (n_introducido > n_random) {
            alert("Fallaste,\n" + n_introducido + " > X\nTe quedan " + (5 - (index + 1)) + " intentos")
        }
        intentos=index
    }
    if (intentos==4) {
        alert("Perdiste,\nEl numero era el "+n_random)
    }
    console.log(intentos)
}