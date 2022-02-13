function sendEmail(){
    Email.send({
    Host : "smtp.mailtrap.io",
    Username : "490439c788be8f",
    Password : "12c3eb7f8e54fd",
    To : 'creep2monedas@gmail.com',
    From :document.querySelector('form').elements["email"].value,
    Subject :document.querySelector('form').elements["firstName"].value,
    Body :document.querySelector('form').elements["message"].value
}).then(
message => alert("Correo enviado")
);
crear();
}
function crear(){
        sessionStorage.setItem("nombre",document.querySelector('form').elements["firstName"].value);
        sessionStorage.setItem("mail",document.querySelector('form').elements["email"].value);
        sessionStorage.setItem("phone",document.querySelector('form').elements["phone"].value);
    }