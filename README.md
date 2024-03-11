# Congruencia-Adictivo
se crea una secuencia de números pseudoaleatorios utilizando el método de congruencia lineal. Además, visualiza estos números en una tabla HTML y un gráfico de líneas utilizando la biblioteca Chart.js.

## Como funciona el codigo ?
Función generarNumeros():

Recupera los valores de entrada (x0, m, n) desde elementos de entrada HTML.
Limpia el contenido de una tabla HTML con el id tablaResultados.
Inicializa variables para almacenar la secuencia de números generados, el número de números repetidos y una matriz para los valores de R.
Inicia un bucle para generar la secuencia de números.
Calcula el siguiente número (xn1) en la secuencia y el valor de R.
Llama a la función agregarFilaTabla() para agregar una fila a la tabla con la iteración, x y r correspondientes.
Verifica si hay números repetidos y aplica estilos CSS a la tabla en consecuencia.
Si el valor de R es un entero, aplica estilos CSS a la tabla.
Actualiza el valor de xn para la próxima iteración.
Imprime en la consola la cantidad de números repetidos.
Crea un gráfico de líneas utilizando Chart.js con los valores de R.
Función agregarFilaTabla(iteracion, x, r):

Recibe la iteración actual, el valor de x y el valor de r.
Obtiene la tabla con el id tablaResultados.
Inserta una nueva fila en la tabla.
Inserta celdas en la fila para la iteración, x y r, y establece su contenido.
Para que este código funcione correctamente, necesitarás tener en tu HTML elementos con los IDs correspondientes (xInput, mInput, nInput, tablaResultados, myChart). Además, deberás incluir la biblioteca Chart.js en tu página HTML.

![image](https://github.com/AxelAceves/Congruencia-Adictivo/assets/149019864/fadcde70-f3af-4847-8d61-5b3a53ed6c25)

## link del manual :
https://www.file.io/kOFh/download/u5QqV5HD1vUt
