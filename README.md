# Juego de Piedra, Papel o Tijera

Este es un simple juego de **Piedra, Papel o Tijera** implementado en JavaScript. El juego se ejecuta en el navegador y utiliza `alerts` y la consola para interactuar con el usuario.

## Estructura del Proyecto
├── index.html
├── piedra-papel-tijera.js
└── README.md

### Descripción de los Archivos

- **index.html:** 
  - Este archivo HTML carga el juego en el navegador. Contiene la estructura básica de la página y un enlace al archivo `piedra-papel-tijera.js`.
  
- **piedra-papel-tijera.js:** 
  - Este archivo contiene toda la lógica del juego. Aquí se manejan las interacciones con el usuario, la lógica para determinar el ganador y la visualización de los resultados mediante `alerts` y la consola del navegador.

## Cómo Jugar

1. **Abrir el archivo `index.html`:** 
   - Simplemente abre el archivo `index.html` en un navegador web. Esto cargará el juego y ejecutará el código JavaScript.

2. **Interacción con el juego:**
   - Una vez que la página esté abierta, el juego comenzará a través de una serie de `alerts`.
   - Se te pedirá que elijas una opción a partir de números y esta contiene una opción entre "Piedra", "Papel" o "Tijera".
   - El juego seleccionará aleatoriamente su opción.
   - Se compararán las elecciones y se determinará el ganador.

3. **Resultados:**
   - Los resultados del juego se mostrarán en la consola del navegador.
   - Se indicará si ganaste, perdiste o si hubo un empate.

## Lógica del Juego

- **Opciones:**
  - El jugador puede elegir entre "Piedra", "Papel" o "Tijera".
  
- **Reglas:**
  - **Piedra** vence a **Tijera**.
  - **Tijera** vence a **Papel**.
  - **Papel** vence a **Piedra**.
  - Si ambos eligen la misma opción, el resultado es un empate.

- **Elección del Juego:**
  - El juego elige aleatoriamente entre las mismas tres opciones (Piedra, Papel, Tijera).

- **Determinación del Ganador:**
  - Se compara la elección del jugador con la del juego para determinar el ganador según las reglas descritas.

## Ejecución

1. Clona o descarga este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web preferido.
3. Sigue las instrucciones que aparecen en los `alerts` para jugar.

¡Diviértete jugando Piedra, Papel o Tijera!