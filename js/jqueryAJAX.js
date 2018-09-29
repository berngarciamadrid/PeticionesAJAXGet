$(document).ready(function() {
    $.get("https://jsonplaceholder.typicode.com/todos", function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
        console.log(typeof data);
        var informacion = `<th>ID</th>
        <th>TITULO</th>
        <th>COMPLETADO</th>`;
        $("#mostrarInformacion").append(informacion);
        for (let i = 0; i < data.length; i++) {
            $("#mostrarInformacion").append(`<tr><td>${data[i].id}</td>
            <td>${data[i].title}</td><td>${data[i].completed}</td></tr>`);
        }
    });
});