$("#exampleModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data("whatever"); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find(".modal-title").text("Nueva entrada");
    modal.find(".modal-body input").val(recipient);
});

document.getElementById("Benviar").addEventListener("click", enviars);

const categoriaSelect = document.querySelector("#exampleFormControlSelect1");
var seleccionada;
categoriaSelect.addEventListener("change",function(){
    var opcionSeleccionada = this.options[categoriaSelect.selectedIndex];
    seleccionada = opcionSeleccionada.value;
});

function enviars() {
    let url = "http://127.0.0.1:8080/api/publicacion/";
    const titulo = document.getElementById("comment-title").value;
    const cuerpo = document.getElementById("message-text").value;
    const categoria = seleccionada;
    
    fetch(url,{
        //Tipo de método
        method: "POST",
        body: JSON.stringify({
            id_categoria: categoria,
            id_usuario: 3,
            pregunta_titulo: titulo,
            pregunta_cuerpo: cuerpo
        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    });
    alerta();
}

function alerta() {
    Swal.fire('Tu publicación se ha publicado correctamente');
}

function selectCategory() {
    let selection = document.getElementById("exampleFormControlSelect1");
    return selection.selectedIndex + 1;
}