 function generarNumeros() {
    const x0 = parseInt(document.getElementById('xInput').value);
    const m = parseInt(document.getElementById('mInput').value);
    const n = parseInt(document.getElementById('nInput').value);

    document.getElementById('tablaResultados').innerHTML = "";
    let numeros = {};
    let numerosRepetidos = 0;
    let valoresR = [];

    let xn = x0;

    for (let i = 1; i <= n; i++) {
        const xn1 = (xn + x0) % m;
        const rn = xn / m;

        agregarFilaTabla(i, xn, rn.toFixed(4));

        valoresR.push(rn);

        if (numeros[xn]) {
            numerosRepetidos++;
            document.getElementById('tablaResultados').lastChild.lastChild.previousSibling.classList.add('resaltado');
        } else {
            numeros[xn] = true;
        }

        if (Number.isInteger(rn)) {
            document.getElementById('tablaResultados').lastChild.lastChild.classList.add('entero');
        }

        xn = xn1;
    }

    console.log("Números repetidos:", numerosRepetidos);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from(Array(n).keys()),
            datasets: [{
                label: 'Valores de R',
                data: valoresR,
                borderColor: 'blue',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function agregarFilaTabla(iteracion, x, r) {
    const tabla = document.getElementById('tablaResultados');
    const fila = tabla.insertRow();
    const celdaIteracion = fila.insertCell(0);
    const celdaX = fila.insertCell(1);
    const celdaR = fila.insertCell(2);

    celdaIteracion.textContent = iteracion;
    celdaX.textContent = x;
    celdaR.textContent = r;
}
