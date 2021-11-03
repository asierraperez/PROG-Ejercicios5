function main() {
    var dinero
    var valido
    var billetes = [0,0,0,0,0,0]
    var tabla = ""
    var contar = [200, 100, 50, 20, 10, 5]
    do {
        dinero = entrada()
        valido = comprobar(dinero)
    } while (valido != 0);
    tabla=conteo(dinero,billetes,contar,tabla)
    salida(tabla)
}
main()