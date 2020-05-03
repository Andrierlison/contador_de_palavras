function contarPalavrasECaracteres() {
    var entrada = document.getElementById("entrada").value

    var resultado1 = entrada.length
    document.getElementById("resultado1").innerHTML = "NÚMERO DE CARACTERES INSERIDOS " + resultado1

    var resultado2 = entrada.split(' ')
    for (i = 0; i < resultado2.length; i++);
    document.getElementById('resultado2').innerHTML = "NÚMERO DE PALAVRAS OU ESPAÇOS " + i;
}