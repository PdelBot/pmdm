$(document).ready (function name(params) {
    
$.ajax ({
"url": "https://swapi.dev/api/people/", method: "GET"
}).done(function (data) {
    /**
     * JSON.parse() toma como entrada el texto en json que me llega
     * al servidor y lo convierte en un objeto
     */
    var json = JSON.parse(data);
    

    //Lo que se programa dentro de esta funcion 
    //sera ejecutado cuando se haya resuelto la peticion asincrona
    //es decir, cuando llegue la respuesta del servidor
});

});