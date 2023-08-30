
const degreeInput = document.getElementById('degree');
const tempTypeSelect = document.getElementById('temp-type');
const celsiusValue = document.getElementById('celsius-value');
const convertButton = document.getElementById('convert');

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// Function to perform conversion based on selected temperature type
function convertTemperature() {
    const degree = parseFloat(degreeInput.value);
    const tempType = tempTypeSelect.value;

    let result = '';

    if (tempType === 'Fahrenheit') {
        result = fahrenheitToCelsius(degree).toFixed(2) + '°C';
    } else if (tempType === 'Kelvin') {
        result = kelvinToCelsius(degree).toFixed(2) + '°C';
    }

    celsiusValue.textContent = result;
}

// Attach event listener to the convert button
convertButton.addEventListener('click', convertTemperature);
