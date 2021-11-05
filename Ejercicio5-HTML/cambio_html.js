function cambio_html(datos,posicion){
    txt = document.getElementById(posicion);
    
    txt.innerHTML="<p>"+datos+"</p>"
    console.log(txt.innerHTML);
}