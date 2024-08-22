// apiKey = BC120E74-7504-494F-ACDD-FA60185F8714

async function obtenerDatosCriptomonedas() {
    const apiKey = 'BC120E74-7504-494F-ACDD-FA60185F8714';
    const url = 'https://rest.coinapi.io/v1/exchanges';

    try {
        const response = await fetch(url, {
            headers: { 'X-CoinAPI-Key': apiKey }
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const datos = await response.json();
        const lista = document.getElementById('lista-exchanges');
        lista.classList.add('card-container');

        datos.slice(0, 16).forEach(exchange => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h5 class="card-title">${exchange.name}</h5>
                <p class="card-text">
                    <strong>Cotización por hora:</strong> ${exchange.volume_1hrs_usd.toFixed(2)} USD<br>
                    <strong>Cotización del día:</strong> ${exchange.volume_1day_usd.toFixed(2)} USD
                    <strong>Website:</strong> <a href="${exchange.website}" target="_blank">${exchange.website}</a>
                </p>
            `;
            lista.appendChild(card);
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

obtenerDatosCriptomonedas();



// async function obtenerDatosCriptomonedas() {
//     const apiKey = 'BC120E74-7504-494F-ACDD-FA60185F8714';
//     const url = 'https://rest.coinapi.io/v1/exchanges';

//     try {
//         const response = await fetch(url, {
//             headers: { 'X-CoinAPI-Key': apiKey }
//         });

//         if (!response.ok) throw new Error(`Error: ${response.status}`);

//         const datos = await response.json();
//         const lista = document.getElementById('lista-exchanges');

//         datos.slice(0, 16).forEach(exchange => {
//             const listItem = document.createElement('li');
//             listItem.innerHTML = `
//                 <strong>Nombre:</strong> ${exchange.name} <br>
//                 <strong>Cotización por hora:</strong> ${exchange.volume_1hrs_usd.toFixed(2)} USD <br>
//                 <strong>Cotización del día:</strong> ${exchange.volume_1day_usd.toFixed(2)} USD
//             `;
//             lista.appendChild(listItem);
//         });
//     } catch (error) {
//         console.error('Error al obtener datos:', error);
//     }
// }

// obtenerDatosCriptomonedas();


