document.getElementById('calculate').addEventListener('click', function(){
    // Obtendo os valores dos inputs
    const value = document.getElementById('value').value
    const fee = (document.getElementById('fee').value) / 100
    const time = document.getElementById('time').value

    // Aplicar a forma de juros compostos
    const total = value * (1 + fee)**time
    // Mostrar o resultado
    document.getElementById('total').innerHTML = ("R$" + total.toFixed(2).replace('.', ','))
})