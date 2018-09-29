'use strict';

window.onload = init;

function init() {
    let url = 'https://jsonplaceholder.typicode.com/todos';
    let data = "";

    fetch(url)
        .then(res => res.json())
        .then((datos) => {
            console.log('Mira este JSON! ', datos);
            data = datos;
            console.log(data);
            mostrarData(data);
            return data;
        })
        .catch(err => { throw err });

    function mostrarData(data) {
        var informacion = `<th>ID</th>
        <th>TITULO</th>
        <th>COMPLETADO</th>`;
        for (let i = 0; i < data.length; i++) {
            informacion += `<tr><td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].completed}</td></tr>`;
        }
        document.getElementById('mostrarInformacion').innerHTML = informacion;
    };
}