function main() {
    var dinero
    var valido
    var tabla = ""
    do {
        dinero = entrada()
        valido = comprobar(dinero)
    } while (valido != 0);
    tabla = conteo(dinero, tabla)
    salida(tabla)
}
main()