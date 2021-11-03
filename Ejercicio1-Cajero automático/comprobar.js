function comprobar(dinero){
var valido=dinero%5
if (valido!=0){
    alert("Error, "+dinero+" no es una cantidad retirable\nInténtelo de nuevo")
}
return valido
}