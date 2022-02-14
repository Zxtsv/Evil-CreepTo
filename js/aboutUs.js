const aboutAldair = document.getElementById("aboutMe-Aldair");
const aboutAngeles = document.getElementById("aboutMe-Angeles");
const aboutBernardo = document.getElementById("aboutMe-Bernardo");
const aboutAbril = document.getElementById("aboutMe-Abril");
const aboutJoss = document.getElementById("aboutMe-Joss");
const aboutEduardo = document.getElementById("aboutMe-Eduardo");
const aboutLiliana = document.getElementById("aboutMe-Liliana");
const aboutMau = document.getElementById("aboutMe-Mau");

aboutAldair.addEventListener('click', () => {
    Swal.fire({
        title: "Aldair \n(FullStack Developer)",
        text: "Una persona colaborativa que gusta del trabajo en equipo, apasionada y dedicada al proyecto cuidando cada detalle. Parte geek, parte músico, con el que da puntos de vista diferentes y creativos",
        imageUrl: "../images/assets/img/Aldair.png",
        imageWidth: 100,
        imageHeight: 130,
        imageAlt: "Imagen Aldair",
        timer: 9000,
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
        timer: 9000,
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
        timer: 9000,
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
        text: "Impulso la visión estratégica de Creep-tomonedas, ademas superviso todas las etapas del ciclo creativo y las tareas del equipo. Pensadora estratégica, apasionada por formar equipos y los procesos realmente eficientes.",
        imageUrl: "../images/assets/img/Abril.png",
        imageWidth: 100,
        imageHeight: 130,
        imageAlt: "Imagen Abril",
        timer: 9000,
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

aboutJoss.addEventListener('click', () => {
    Swal.fire({
        title: "Joss \n(FullStack Developer)",
        text: "Desarrolladora involucrada en cada paso del proceso para el desarrollo del proyecto, así puedo aportar mi punto de vista y ayudar a resolver los problemas que se puedan encontrar en el camino y facilitar el trabajo en equipo. Novata enamorada del desarrollo web y de los gatitos (próximamente de las criptomonedas), creciendo y desarrollando habilidades con cada línea de código.",
        imageUrl: "../images/assets/img/Joss.png",
        imageWidth: 100,
        imageHeight: 130,
        imageAlt: "Imagen Joss",
        timer: 9000,
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

aboutEduardo.addEventListener('click', () => {
    Swal.fire({
        title: "Eduardo \n(Backend Developer)",
        text: "Entusiasta de formar parte del equipo de Creep-tomonedas, soy una persona tranquila siempre en busca de mantener el orden tanto en el equipo como en las tareas. Disfruto de jugar videojuegos, juegos de mesa y siempre defenderé que Bulbasaur es el mejor inicial.",
        imageUrl: "../images/assets/img/Eduardo.png",
        imageWidth: 100,
        imageHeight: 130,
        imageAlt: "Imagen Eduardo",
        timer: 9000,
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

aboutLiliana.addEventListener('click', () => {
    Swal.fire({
        title: "Liliana \n(FullStack Developer)",
        text: "Procuro poner atención a los pequeños detalles para que los resultados sean de calidad pero también funcionales. Me gusta explorar mi parte creativa, pero también enfrentarme a desafíos en los que tenga que pensar fuera de la caja",
        imageUrl: "../images/assets/img/Lili.png",
        imageWidth: 100,
        imageHeight: 130,
        imageAlt: "Imagen Liliana",
        timer: 9000,
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

aboutMau.addEventListener('click', () => {
    Swal.fire({
        title: "Mauricio \n(FullStack Developer)",
        text: "¡Me encanta trabajar en equipo, los perros y una buena comida! Siempre busco ayudar a los demas y buscar la manera mas eficaz y eficiente de resolver problemas. Aprendiendo sobre las criptomonedas, los ajolotes y el mundo del trading.",
        imageUrl: "../images/assets/img/Mau.png",
        imageWidth: 100,
        imageHeight: 130,
        imageAlt: "Imagen Mau",
        timer: 9000,
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
