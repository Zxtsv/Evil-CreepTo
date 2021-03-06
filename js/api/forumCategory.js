const aplicacion = document.querySelector(".subforum");
const tema = document.querySelector(".subforum-title");
const getUrl = new URLSearchParams(window.location.search);
const btnCripto = document.querySelector(".btn-crip");
const btnBlock = document.querySelector(".btn-danger");
const btnWallet = document.querySelector(".btn-warning");
const btnInicio = document.querySelector(".btn-dark");

id = getUrl.get('cat');

const url = "http://127.0.0.1:8080/api/categoria?cat=";

let tituloTema;

switch (id) {
    case "1":
        tituloTema = "Criptomonedas";
        break;
    case "2":
        tituloTema = "Blockchain";
        break;
    case "3":
        tituloTema = "Wallets";
        break;
}

const h1 = document.createElement('h1');
h1.innerHTML = tituloTema;
tema.appendChild(h1);

fetch(`${url}${id}`)
.then(res => res.json())
.then(data => {
    data.slice().reverse().forEach(pub => {
        const div = document.createElement('div');
        let publicacion = '<div class="subforum-row"><div class="subforum-icon subforum-column center"><img src="../../images/ajolote.png" ></div><div class="subforum-description subforum-column"><h4>' + pub.pregunta_titulo + '</h4><p>' + pub.pregunta_cuerpo + '</p></div></div>';
        div.setAttribute('id',pub.id_pregunta);
        div.innerHTML = publicacion;
        div.addEventListener('click',function(){
            window.location.href = `../../foroPost.html?id=${pub.id_pregunta}`;
        });
        aplicacion.appendChild(div);
    });
})
.catch(err => console.log(err));

btnInicio.addEventListener('click',function(){
    window.location.href = `../../forums.html`;
});

btnCripto.addEventListener('click',function(){
    window.location.href = `../../forumCat.html?cat=${1}`;
});

btnBlock.addEventListener('click',function(){
    window.location.href = `../../forumCat.html?cat=${2}`;
});

btnWallet.addEventListener('click',function(){
    window.location.href = `../../forumCat.html?cat=${3}`;
});