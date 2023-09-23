const formulario = document.getElementById("contacto")
const empresa1 = document.getElementById("empresa");
const nombre1 = document.getElementById("nombre");
const email1 = document.getElementById("email");
const mensaje1 = document.getElementById("mensaje");
let body;

formulario.addEventListener('submit',(event) => {
    event.preventDefault()
    let empresa = empresa1.value;
    let nombre = nombre1.value;
    let email = email1.value;
    let mensaje = mensaje1.value;
    body = {empresa, nombre, email, mensaje};
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
