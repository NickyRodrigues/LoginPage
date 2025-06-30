function mostrar() {
    let inputpass = document.getElementById('senha');
    let btnmostrar = document.getElementById('btn-senha');

if (inputpass.type === 'password'){
    inputpass.setAttribute('type','text')
    btnmostrar.classList.replace('bi-eye','bi-eye-slash')
}
    else{
        inputpass.setAttribute('type','password')
        btnmostrar.classList.replace('bi-eye-slash','bi-eye')
    }
}