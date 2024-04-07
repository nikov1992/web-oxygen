
const formElement = document.getElementById("formularioRegistro")

formElement.addEventListener("submit", async(event) => {
    event.preventDefault(); //evita el reload del navegador
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value
    let compañia = document.getElementById("compania").value
    let pais = document.getElementById("pais").value
    let password = document.getElementById("password").value
    let password2 = document.getElementById("password2").value
    let email = document.getElementById("email").value
    let datosUsuario = {Name : nombre , Surname : apellido , Company : compañia , Country : pais , Pass : password, Pass2 : password2,  Email : email}
    let datosUsuarioJson = JSON.stringify(datosUsuario);
    const res = await fetch("http://localhost:10000/api/register", {     
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






