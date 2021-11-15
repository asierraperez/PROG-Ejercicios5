/**
 * genera los objetos hijo
 * @param {object} arte - objeto padre
 * @param {number} selector - seleccion del objeto a generar
 * @returns 
 */
function declarar_object_hijo(arte, selector) {
    switch (selector) {
        //Declarar objeto hijo cine
        case 1:
            var hijo = function (duracion, genero) {
                this.duracion = duracion
                this.genero = genero
                this.mostrar = function () {
                    console.log(this.duracion + " " + this.genero)
                }
            }
            for (const id in arte.prototype) {
                hijo.prototype[id] = arte.prototype[id]
            }
            return hijo
            break;
        //Declarar objeto hijo escultura    
        case 2:
            var hijo = function (material, epoca) {
                this.material = material
                this.epoca = epoca
                this.mostrar = function () {
                    console.log(this.material + " " + this.epoca)
                }
            }
            for (const id in arte.prototype) {
                hijo.prototype[id] = arte.prototype[id]
            }
            return hijo
            break;
        //Declarar objeto hijo pintura 
        case 3:
            var hijo = function (autor, estilo) {
                this.autor = autor
                this.estilo = estilo
                this.mostrar = function () {
                    console.log(this.autor + " " + this.estilo)
                }
            }
            for (const id in arte.prototype) {
                hijo.prototype[id] = arte.prototype[id]
            }
            return hijo
            break;
        //Declarar objeto hijo teatro
        case 4:
            var hijo = function (duracion, epoca) {
                this.duracion = duracion
                this.epoca = epoca
                this.mostrar = function () {
                    console.log(this.duracion + " " + this.epoca)
                }
            }
            for (const id in arte.prototype) {
                hijo.prototype[id] = arte.prototype[id]
            }
            return hijo
            break;
    }

}