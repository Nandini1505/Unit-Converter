let inputBox = document.getElementById("num-input")
let convertBtn = document.getElementById("converter")
let lengthDiv = document.getElementById("length-div")
let volumeDiv = document.getElementById("volume-div")
let massDiv = document.getElementById("mass-div")

convertBtn.addEventListener("click", function(){
    lengthConverter(inputBox.value)
    volumeConverter(inputBox.value)
    massConverter(inputBox.value)
})

function lengthConverter(num1){
    let metres = num1 * 3.281 
    let feets = num1 * 0.305
    lengthDiv.innerHTML = `<p>${num1} meters = ${metres.toFixed(3)} feet | ${num1} feet = ${feets.toFixed(3)} meters</p>`
}

function volumeConverter(num1){
    let litres = num1 * 0.264 
    let gallons = num1 * 3.787
    volumeDiv.innerHTML = `<p>${num1} litres = ${litres.toFixed(3)} gallons | ${num1} gallons = ${gallons.toFixed(3)} liters</p>`
}

function massConverter(num1){
    let kilos = num1 * 2.204
    let pounds = num1 * 0.454
    massDiv.innerHTML = `<p>${num1} kilos = ${kilos.toFixed(3)} pounds | ${num1} pounds = ${pounds.toFixed(3)} kilos</p>`
}