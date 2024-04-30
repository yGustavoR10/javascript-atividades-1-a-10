function calcularArea() {
    var raio = document.getElementById('inputRaio').value;
    var area = Math.PI * Math.pow(raio, 2);
    document.getElementById('resultado').innerHTML = "A área do círculo com raio " + raio + " é " + area.toFixed(2) + ".";
}