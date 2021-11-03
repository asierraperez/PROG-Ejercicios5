function comprobar(n_introducido){
    var valido=false
    if (n_introducido>100){
        alert("Error, "+n_introducido+" no es valido\nInténtelo de nuevo")
        valido=false
    }else{
        valido=true
    }

    return valido
    }