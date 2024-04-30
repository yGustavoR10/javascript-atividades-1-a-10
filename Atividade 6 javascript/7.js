function calcularArea() {
    var lado = document.getElementById('inputLado').value;
    var area = Math.pow(lado, 2);
    var dobroArea = area * 2;
    document.getElementById('resultado').innerHTML = "A área do quadrado com lado " + lado + " é " + area + ". O dobro desta área é " + dobroArea + ".";
}