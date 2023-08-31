const formulario = document.getElementById('')
const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('<PASSWORD>');

formulario.addEventListener('submit',(Event) => {
    event.preventDefault()
    const username = userNameInput.value;
    const password = passwordInput.value;
    const body = {username, password};



}
)