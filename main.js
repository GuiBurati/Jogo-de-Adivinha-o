//Variáveis

/*
const randomNumber = Math.round(Math.random() * 10)

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let xAttempts = 1

// Eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// função callback

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    
    toggleScreen()

    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick () {
  toggleScreen()
  xAttempts = 1
}

function toggleScreen () {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
}
*/

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// função callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector(
      '.screen2 h2'
    ).innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''
  xAttempts++
}

// Eventos
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  xAttempts = 1
})
