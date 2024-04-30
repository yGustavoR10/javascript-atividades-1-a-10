function converteParaFahrenheit() {
    var tempCelsius = document.getElementById('inputCelsius').value;
    var tempFahrenheit = (tempCelsius * 9/5) + 32;
    document.getElementById('outputFahrenheit').innerHTML = "Temperatura em Fahrenheit: " + tempFahrenheit;
}