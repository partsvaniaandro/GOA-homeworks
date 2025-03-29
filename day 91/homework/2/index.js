let input = document.getElementById('missionInput')
let button = document.getElementById('addMission')
let list = document.getElementById('orderedList')
function addToList(){
    let element = document.createElement('li')
    element.textContent = input.value
    list.prepend(element)
    input.value = ''
}
button.addEventListener('click', addToList)