function calc(event) {
  event.preventDefault()

let alcoholInput = document.getElementById('alcohol').value  
let gasolineInput = document.getElementById('gasoline').value
let contentResult = document.getElementById('content-result')
let textResult = document.getElementById('text-result')

let alcoholSpan = document.getElementById('alcohol-result')
let gasolineSpan = document.getElementById('gasoline-result')


let calc = (alcoholInput / gasolineInput)

if( calc < 0.7) {
  textResult.innerHTML = "Compensa usar Álcool"
} else {
  textResult.innerHTML = "Compensa usar Gasolina"
  
}

gasolineSpan.innerHTML = "Gasolina R$ " + gasolineInput

alcoholSpan.innerHTML = "Álcool R$ " + alcoholInput

contentResult.classList.remove('hide')

}

/*
  Calculo: Alcool / gasolina
  E se o resultado for menor que 0.7 compensa usar alcool
*/ 