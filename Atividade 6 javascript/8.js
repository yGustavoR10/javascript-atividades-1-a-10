function calcularSalario() {
    var valorHora = document.getElementById('inputValorHora').value;
    var horasTrabalhadas = document.getElementById('inputHorasTrabalhadas').value;
    var salario = valorHora * horasTrabalhadas;
    document.getElementById('resultado').innerHTML = "O total do seu salário neste mês é " + salario.toFixed(2) + ".";
}