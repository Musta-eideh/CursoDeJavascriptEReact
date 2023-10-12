const forms = document.getElementById('forms');
const resultadoImc = document.getElementById('resultadoImc');

forms.addEventListener('submit', function(e){
    e.preventDefault();

    const peso = forms.elements['peso'].value;
    const altura = forms.elements['altura'].value;

    if(isNaN(peso) || isNaN(altura)) {
        resultadoImc.innerHTML = `<p>Por favor, insira dados válidos para peso e altura</p>`;
    }else {
        function caluloImc (peso, altura) {
            
            const imc = peso/(altura*altura);
            console.log('IMC:', imc);
    
            if(imc <= 18.5){
                resultadoImc.innerHTML = `<p>Você está abaixo do peso.</p>`
            } else if(imc >= 18.5 && imc <= 24.9){
                resultadoImc.innerHTML = `<p>Parabéns seu peso está normal.</p>`
            } else if(imc >= 25 && imc <= 29.9){
                resultadoImc.innerHTML = `<p>Cuidado, você está com sobrepeso.</p>`
            } else if(imc >= 30 && imc <= 34.9){
                resultadoImc.innerHTML = `<p>Cuidado, você está com Obesidade grau 1.</p>`
            } else if(imc >= 35 && imc <= 39.9){
                resultadoImc.innerHTML = `<p>Cuidado, você está com Obesidade grau 2.</p>`
            } else if(imc >= 40){
                resultadoImc.innerHTML = `<p>Cuidado, você está com Obesidade grau 3.</p>`
            }else {
                resultadoImc.innerHTML = `<p>Por favor, tente novamente.</p>`
            }
        }

    }
    caluloImc(peso,altura);
})