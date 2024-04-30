function converterParaCentimetros() {
    var metros = document.getElementById('inputMetros').value;
    var centimetros = metros * 100;
    document.getElementById('resultado').innerHTML = metros + " metros é igual a " + centimetros + " centímetros.";
}


