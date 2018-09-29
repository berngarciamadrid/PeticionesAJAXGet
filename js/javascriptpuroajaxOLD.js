'use strict';

window.onload = init;

function init() {
    var xhttp = new XMLHttpRequest();
    var informacion = `<th>ID</th>
    <th>TITULO</th>
    <th>COMPLETADO</th>`;
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(typeof this.responseText); // El tipo de dato es un string, seguro
            var datos = JSON.parse(this.responseText); // Me pasa de String a JSON
            for (let i = 0; i < datos.length; i++) {
                informacion += "<tr><td>" + datos[i].id + "</td><td>" + datos[i].title +
                    "</td><td>" + datos[i].completed + "</td></tr>";
            }
            document.getElementById("mostrarInformacion").innerHTML = informacion;
            // document.getElementById("mostrarInformacion").innerHTML = this.responseText;
        }
    };
    xhttp.send();
}