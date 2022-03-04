const aplicacion = document.querySelector(".Comments");
const tituloPregunta = document.querySelector(".Pregunta");
const getUrl = new URLSearchParams(window.location.search);
const btnInicio = document.querySelector(".btn-inicio");

id = getUrl.get('id');

const url = "https://jsonplaceholder.typicode.com/comments?postId=";

const urlPost = "http://127.0.0.1:8080/api/publicacion/publicacion?pub=";

fetch(`${urlPost}${id}`)
.then(res => res.json())
.then(data => {
    const h2 = document.createElement('h2');
    h2.innerHTML = data.pregunta_titulo;
    tituloPregunta.appendChild(h2);
    const p = document.createElement('p');
    p.innerHTML = data.pregunta_cuerpo;
    tituloPregunta.appendChild(p);
})

fetch(`${url}${id}`)
.then(res => res.json())
.then(data => {
    data.forEach(comentario => {
        const div = document.createElement('div');
        let publicacion = '<div class="col-2 text-end"><img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/100/000000/external-user-shopping-mall-xnimrodx-blue-xnimrodx.png"class="img-fluid shadow-1-strong rounded-5" style="width: 8rem;border-radius:50%;"/></div><div class="col-10"><p class="mb-2"><strong>' + comentario.name + '</strong></p><p>' + comentario.body + '</p></div>';
        div.classList.add("row","mb-4");
        div.innerHTML=publicacion;
        aplicacion.appendChild(div);
    });
});

btnInicio.addEventListener('click',function(){
    window.location.href = `../../forums.html`;
});