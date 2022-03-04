const aplicacion = document.querySelector(".subforum");
const btnCripto = document.querySelector(".btn-crip");
const btnBlock = document.querySelector(".btn-danger");
const btnWallet = document.querySelector(".btn-warning");
const btnInicio = document.querySelector(".btn-dark");

const url = "http://127.0.0.1:8080/api/publicacion/";

fetch(url)
.then(res => res.json())
.then(data => {
    data.slice().reverse().forEach(pub => {
        const div = document.createElement('div');
        let publicacion = '<div class="subforum-row"><div class="subforum-icon subforum-column center"><img src="../../images/ajolote.png" ></div><div class="subforum-description subforum-column"><h4>' + pub.pregunta_titulo + '</h4><p>' + pub.pregunta_cuerpo + '</p></div><div class="subforum-info subforum-column"><b><a href="">Last post</a></b> by <a href="">JustAUser</a> <br>on <small>04 Mar 2022</small></div></div>';
        div.setAttribute('id',pub.id_pregunta);
        div.setAttribute('categoria',pub.id_categoria);
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