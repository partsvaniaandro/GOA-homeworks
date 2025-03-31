let numInput = document.getElementById('numInput')
let addBtn = document.getElementById('addBtn')
let list = document.getElementById('list')
let warning = document.getElementById('warning')
let clearBtn = document.getElementById('clear')
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