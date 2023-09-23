const formulario = document.getElementById("contacto")
const empresa = document.getElementById("empresa");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
let body;

formulario.addEventListener('submit',(event) => {
    event.preventDefault()
    let empresa1 = empresa.value;
    let nombre1 = nombre.value;
    let email1 = email.value;
    let mensaje1 = mensaje.value;
    body = {empresa1, nombre1, email1, mensaje1};
    enviarDatos(body);
    }
)

function enviarDatos(datos) {
    let url = "/api/contacto";
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log("enviarDatos" + JSON.stringify(datos));
    })
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  };
