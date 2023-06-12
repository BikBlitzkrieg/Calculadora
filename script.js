// Variables globales
var display = document.getElementById('display');
var operation = '';

// Función para limpiar la pantalla
function clearDisplay() {
  display.value = '';
  operation = '';
}

// Función para eliminar el último carácter
function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

// Función para agregar un carácter al display
function appendCharacter(character) {
  display.value += character;
}

// Función para realizar el cálculo
function calculate() {
  var result;
  try {
    result = eval(display.value);
    if (result === undefined) {
      display.value = '';
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error';
  }
}