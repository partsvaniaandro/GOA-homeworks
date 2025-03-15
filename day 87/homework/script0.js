let displayImg = document.getElementById("langIcon")
function changeToHtml(){
    displayImg.src = "./images/html.png"
    displayImg.style.width = '350px'
}
document.getElementById('htmlBtn').addEventListener('click', changeToHtml)
function changeToCss(){
    displayImg.src = "./images/css.png"
    displayImg.style.width = '600px'
}
document.getElementById('cssBtn').addEventListener('click', changeToCss)
function changeToJs(){
    displayImg.src = "./images/js.png"
    displayImg.style.width = '800px'
}
document.getElementById('jsBtn').addEventListener('click', changeToJs)
function changeToReact(){
    displayImg.src = "./images/react.png"
    displayImg.style.width = '500px'
}
document.getElementById('reactBtn').addEventListener('click', changeToReact)


let numInput = document.getElementById('inputNum')
let textInput = document.getElementById('inputText')
let output = document.getElementById('textDisplay')
function displayAmountInput(){
    // textVal = textInput.value
    // numVal = numInput.value
    result = textInput.value.repeat(numInput.value)
    output.textContent = result
}
document.getElementById('displayBtn').addEventListener('click', displayAmountInput)