function somarNumeros() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var soma = Number(numero1) + Number(numero2);
    document.getElementById("resultado").innerHTML = "A soma é " + soma;
    }