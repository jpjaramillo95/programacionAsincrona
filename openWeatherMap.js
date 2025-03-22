const apiKey = '0f43a7755d8d4ae75326714c15df5ce0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function obtenerClima(ciudad) {
    try {
        let respuesta = await fetch(`${apiUrl}?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`);
        
        if (!respuesta.ok) {
            throw new Error('Ciudad no encontrada');
        }

        const datos = await respuesta.json();

        if (datos.cod !== 200) {
            throw new Error(datos.message || 'Error desconocido');
        }

        mostrarClima(datos);
    } catch (error) {
        document.getElementById('resultado').innerHTML = `<p class='text-danger'>${error.message}</p>`;
    }
}

function mostrarClima(datos) {
    const { name, main } = datos;
    document.getElementById('resultado').innerHTML = `
        <h3>Clima en ${name}</h3>
        <p>Temperatura: ${main.temp}°C</p>
    `;
}

document.getElementById('buscar').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudad').value.trim();
    if (ciudad) {
        obtenerClima(ciudad);
    } else {
        document.getElementById('resultado').innerHTML = '<p class="text-danger">Por favor, ingresa una ciudad</p>';
    }
});