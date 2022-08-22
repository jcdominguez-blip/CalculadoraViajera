class User {

    constructor(username, email, password){
    
        this.email = email
        this.password = password


    }
}

const formulario = document.getElementById("idform")
const usuarios = []

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    let email = document.getElementById('email1').value
    let password = document.getElementById('contraseña').value
    const user = new User (email, password)
    usuarios.push(user)
    console.log(usuarios)
    formulario.reset() 

    if(email == "jorge@hotmail.com" && password == "1234"){ 

        window.location= "calculadora.html";
        localStorage.usuario=email
        localStorage.contraseña=password

    }
})

/*
const email = document.getElementById("email1")
const password = document.getElementById("contraseña")
const form = document.getElementById("form")
const alerta = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings =""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.value.length <2){
        warnings += "el nombre no es valido <br>"
        entrar= true
    
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += "el email no es valido <br>"
        entrar= true

    }
    if(password.value.length < 8){ 
        warnings += "la contraseña no es valido <br>"
        entrar= true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }



})

*/

