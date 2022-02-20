const walletButtom = document.querySelector(".activarWallet");

walletButtom.addEventListener("click", () => {
    getWallet();
});

async function getWallet() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    let mensaje = "Te haz conectado a la blockchain de Creep-toMonedas \n" + "Por pertenecer a la comunidad fundadora, te enviaremos un NFT de Creep-toMonedas en menos de 1 semana";
    Swal.fire(
        '¡Buen trabajo!',
        mensaje,
        'success'
    );
}