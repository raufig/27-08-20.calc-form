const inputName = document.getElementById('inputName'), inputLastName = document.getElementById('inputLastName'), inputEmail = document.getElementById('inputEmail'), inputPass = document.getElementById('inputPass'), inputCell = document.getElementById('inputCell'), nombreMensaje = document.getElementById('nombreMensaje')
let loQueSea = [];
validarFormulario = (event) => {
    event.preventDefault()

loQueSea[0] = inputName;
loQueSea[1] = inputLastName;
loQueSea[2] = inputEmail;
loQueSea[3] = inputPass;
loQueSea[4] = inputCell; 

loQueSea.forEach(i=>{ 
    if (i.value === ""){
        i.className = 'alert';
        let spanError = document.createElement('span');
        spanError.innerText= 'Llene este campo por favor';
        spanError.className = 'mensajeSpan';
        i.parentElement.appendChild(spanError);
        setTimeout(()=>{spanError.remove();i.classList.remove('alert')},2000);
        swal("wrong!", "Diligencia todos los datos", "error");
    } 
})
  if(inputName.value && inputLastName.value && inputEmail.value && inputPass.value && inputCell.value)  
  window.location = "./calc.html" 
  };
  