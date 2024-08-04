document.getElementById('equipoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    guardarEquipo();
});

document.getElementById('verListaButton').addEventListener('click', function() {
    window.location.href = 'lista_equipos.html';
});

function guardarEquipo() {
    const nombre = document.getElementById('nombre').value;
    const modelo_id = document.getElementById('modelo_id').value;
    const categoria_id = document.getElementById('categoria_id').value;
    const costo = document.getElementById('costo').value;
    const stock_id = document.getElementById('stock_id').value;

    const equipo = {
        nombre,
        modelo_id,
        categoria_id,
        costo,
        stock_id
    };

    fetch('/guardar_equipo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(equipo)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(`Error: ${data.error}`);
        } else {
            alert('Equipo guardado correctamente');
            window.location.href = 'lista_equipos.html';  // Redirigir a la página de lista de equipos después de guardar
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
