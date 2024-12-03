// Constantes de conversión
const cmToMeters = 0.01; // 1 cm = 0.01 m
const kmToMiles = 0.621371; // 1 km = 0.621371 mi

// Selección de elementos
const conversionType = document.getElementById('conversion-type');
const valueInput = document.getElementById('value');
const convertButton = document.getElementById('convert-btn');
const resultOutput = document.getElementById('result');

// Función para convertir
convertButton.addEventListener('click', () => {
    const value = parseFloat(valueInput.value);
    if (isNaN(value) || value < 0) {
        alert('Por favor, introduce un número válido.');
        return;
    }

    let result = 0;
    const conversion = conversionType.value;

    if (conversion === 'cm-to-m') {
        result = value * cmToMeters; // Convertir centímetros a metros
    } else if (conversion === 'km-to-mi') {
        result = value * kmToMiles; // Convertir kilómetros a millas
    }

    resultOutput.textContent = result.toFixed(2); // Mostrar resultado con 2 decimales
});