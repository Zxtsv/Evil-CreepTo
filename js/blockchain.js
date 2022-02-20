const donationButtom = document.querySelector(".Donate");
// Accionables
donationButtom.addEventListener("click", () => {
  getAccountDonate();
});

// Funcionalidades
function getAccountDonate() {
  Swal.fire({
    title: "¡Dona Bitcoin con Bitso!",
    text: "Abre la app de Bitso y escanea el código",
    imageUrl: "../images/CodigoDonacion.png",
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "Código donación",
  });
}
