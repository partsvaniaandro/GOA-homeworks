let first = false
let divs10 = document.getElementById('divs10')
window.onload = function() {
    function addDiv(){
        for(let i = 0; i<10; i++){
            if (first == false){
                let element = (document.createElement('div'))
                element.style.backgroundColor = '#FF0000'
                element.style.width = '100px'
                element.style.height = '50px'
                divs10.appendChild(element)
                first = true
            }
            if (first == true){
                let element = (document.createElement('div'))
                element.style.backgroundColor = '#00FFFF'
                element.style.width = '100px'
                element.style.height = '50px'
                divs10.prepend(element)
                first = false
            }
        }
    }
    addDiv()
  };