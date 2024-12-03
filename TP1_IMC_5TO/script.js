function calcular_imc(event) {
    event.preventDefault();
    var altura;
    var peso;
    altura = document.getElementById("altura").value;
    peso = document.getElementById("peso").value;
    resu = document.getElementById("resultado");
 // Cálculo del IMC
 const imc = (peso / (altura * altura)).toFixed(2);

 // Determinación de la categoría
 let categoria = "";
 if (imc < 18.5) {
     categoria = "Bajo peso";
 } else if (imc >= 18.5 && imc < 24.9) {
     categoria = "Peso normal";
 } else if (imc >= 25 && imc < 29.9) {
     categoria = "Sobrepeso";
 } else {
     categoria = "Obesidad";
 }
 
    resu.innerText = peso/(altura*altura);					
}