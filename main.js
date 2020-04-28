function contar(){
    var entrada = document.getElementById("entrada").value

    var resultado1 = entrada.length
    document.getElementById("resultado1").innerHTML = "Número de caracteres inseridos " + resultado1
    
    var resultado2 = entrada.split(' ')
    for(i=0;i<resultado2.length;i++);
	document.getElementById('resultado2').innerHTML = "Número de palavras ou espaços " + i;
}