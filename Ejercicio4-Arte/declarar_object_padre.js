function declarar_object_padre(){
    var arte = function () {}
    arte.prototype.nombre=""
    arte.prototype.alabar=function alabarObra() {
            console.log(this.nombre + " es impresionante")
        }
    return arte
}