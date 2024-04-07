
const formElement = document.getElementById("formularioLogin")

formElement.addEventListener("submit", async(event) => {
    event.preventDefault(); //evita el reload del navegador
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let datosUsuario = {Pass : password , Email : email}
    let datosUsuarioJson = JSON.stringify(datosUsuario);
    const res = await fetch("http://localhost:10000/api/login", {     
        method: 'POST',
            headers:
            {
            'Content-Type': 'application/json'
            },
            body: datosUsuarioJson
        })
        const resJson = await res.json();
        if(resJson.redirect){
            window.location.href = resJson.redirect;
          }
})




////////////PARA DIRECCIONAR TENGO QUE IR AL MAINJS ! 






