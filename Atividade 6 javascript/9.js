function converteParaCelsius() {
    var tempFahrenheit = document.getElementById('inputFahrenheit').value;
    var tempCelsius = 5 * ((tempFahrenheit - 32) / 9);
    document.getElementById('outputCelsius').innerHTML = "Temperatura em Celsius: " + tempCelsius;
}
