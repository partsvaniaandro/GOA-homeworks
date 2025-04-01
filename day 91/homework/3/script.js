let numInput = document.getElementById('numInput')
let numInput1 = document.getElementById('numInput1')

let addBtn = document.getElementById('addBtn')
let addBtn1 = document.getElementById('addBtn1')

let list = document.getElementById('list')
let list1 = document.getElementById('list1')

let warning = document.getElementById('warning')
let warning1 = document.getElementById('warning1')

let clearBtn = document.getElementById('clear')
let clearBtn1 = document.getElementById('clear1')

function higherOrLower(){
    if (numInput.value.length > 3){
        warning.textContent = 'input must not be longer than 3 characters'
        return
    }
    let p = document.createElement("p")
    p.textContent = numInput.value
    if (Number(numInput.value) > 20){
        list.appendChild(p)
        warning.textContent = ''
    }
    else if (Number(numInput.value) <= 20){
        list.prepend(p)
        warning.textContent = ''
    }
    numInput.value = ''
}
addBtn.addEventListener('click', higherOrLower)

function clearList(){
    list.innerHTML = ''
}
clearBtn.addEventListener('click', clearList)



function endsWith(){
    let color = document.createElement('div')
    let lastChar = numInput1.value.slice(-1);
    color.style.width = '50px'
    color.style.height = '50px'
    if (lastChar == '1'){
        color.style.background = 'red'
        list1.appendChild(color)
    }
    else if (lastChar == '2'){
        color.style.background = 'green'
        list1.appendChild(color)
    }
    else if (lastChar == '3'){
        color.style.background = 'blue'
        list1.appendChild(color)
    }
    numInput1.value = ''
}
addBtn1.addEventListener('click', endsWith)
function clearList1(){
    list1.innerHTML = ''
}
clearBtn1.addEventListener('click', clearList1)