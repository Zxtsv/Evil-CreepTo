const aboutAldair = document.getElementById("aboutMe-Aldair");
const aboutAngeles = document.getElementById("aboutMe-Angeles");
const aboutBernardo = document.getElementById("aboutMe-Bernardo");
const aboutAbril = document.getElementById("aboutMe-Abril");

aboutAldair.addEventListener('click', () => {
    Swal.fire({
        title: "Aldair \n(Backend Developer)",
        text: "Una persona colaborativa que gusta del trabajo en equipo, apasionada y dedicada al proyecto cuidando cada detalle. Parte geek, parte músico, con el que da puntos de vista diferentes y creativos",
        imageUrl: "../images/assets/img/Aldair.png",
        imageWidth: 100,
        imageHeight: 130,
        imageAlt: "Imagen Aldair",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {

            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    });
    });

aboutAngeles.addEventListener('click', () => {
    Swal.fire({
        title: "Angeles \n(FullStack Developer)",
        text: "Soy una persona curiosa , proactiva que gusta de estar en constante actualización y participar en las diferentes etapas del proceso de desarrollo de software. Aficionada de la musica, la playa y la buena comida",
        imageUrl: "../images/assets/img/Angeles.png",
        imageWidth: 100,
        imageHeight: 130,
        imageAlt: "Imagen Angeles",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {

            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    });
});


aboutBernardo.addEventListener('click', () => {
    Swal.fire({
        title: "Bernardo \n(Backend Developer)",
        text: "Una persona que le gustan los proyectos ambiciosos y dedicada. Parte financiero con Criptomonedas, parte geek, apasionado por Blockchain y otras tecnologías.",
        imageUrl: "../images/assets/img/Bernardo.png",
        imageWidth: 100,
        imageHeight: 130,
        imageAlt: "Imagen Bernardo",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {

            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    });
});

aboutAbril.addEventListener('click', () => {
    Swal.fire({
        title: "Abril \n(Backend Developer)",
        text: "Impulsa la visión estratégica de Creep-tomonedas, ademas superviso todas las etapas del ciclo creativo y las tareas del equipo. Pensadora estratégica, apasionada por formar equipos y los procesos realmente eficientes.",
        imageUrl: "../images/assets/img/Abril.png",
        imageWidth: 100,
        imageHeight: 130,
        imageAlt: "Imagen Abril",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {

            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    });
});

