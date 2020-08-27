/*swal("Good job!", "You clicked the button!", "success");
const inputName = document.getElementById('inputName')
const nombreMensaje = document.getElementById('nombreMensaje')
console.log(inputName)
validarFormulario = (event) => {
    event.preventDefault()
    if(inputName.value == ""){
        inputName.classList.add('alert')
        nombreMensaje.innerText = 'Llene este campo por favor'
        inputName.placeholder = 'Ej: pepito perez'
    }
    //window.location = "./calc.html"
  };*/

  //const form = document.getElementById [{'inputName'}, ]

let loQueSea = []
loQueSea[0] = document.getElementById("inputName").value;
loQueSea[1] = document.getElementById("inputLastName").value;
loQueSea[2] = document.getElementById("inputEmail").value;
loQueSea[3] = document.getElementById("inputPass").value;
loQueSea[4] = document.getElementById("inputCell").value;

//let newLoQueSea = loQueSea.map(h=> console.log(h))
let newLoQueSea = loQueSea.forEach(h=> console.log(h))
validarFormulario = (event) => {
    event.preventDefault()
    if(loQueSea.value == ""){
        loQueSea.forEach('alert')
        loQueSea.forEach = 'Llene este campo por favor'
        loQueSea.forEach = 'Ej: pepito perez'
    }
    //window.location = "./calc.html"
  };