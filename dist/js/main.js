// Get DOM elements
const menu = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile');
const btnProyectos = document.querySelector('.button-proyectos');
const burger = document.querySelector('.burger');
const btnEnviar = document.querySelector('#enviar');
const footer = document.querySelector('footer');
const floatingMenu = document.querySelector('.floating-menu');
var sections = {};

// Events Handler
menu.addEventListener('click', (e) => { MenuScroll(e) })
menuMobile.addEventListener('click', (e) => { MenuScroll(e) })
btnProyectos.addEventListener('click', (e) => { MenuScroll(e) });
floatingMenu.addEventListener('click', (e) => { MenuScroll(e); })
footer.addEventListener('click', (e) => { MenuScroll(e); })

// Get sections coordinates
window.onload = () => {
    sections = {
        home: document.querySelector('.home').offsetTop,
        proyectos: document.querySelector('.proyectos').offsetTop,
        acerca: document.querySelector('.acerca').offsetTop,
        contacto: document.querySelector('.contacto').offsetTop
    }
}

window.onscroll = () => {
    if (window.scrollY > sections.proyectos - 200) {
        floatingMenu.style.display = 'flex';
    } else {
        floatingMenu.style.display = 'none';
    }
}

burger.onclick = () => {
    menuMobile.classList.toggle('visible');
}

btnEnviar.onclick = () => {
    const msg = document.querySelector('#msg');
    msg.innerHTML = 'Gracias por enviar su mensaje';
    msg.classList.toggle('send');
    window.setTimeout(() => {
        msg.innerHTML = 'Envíame tu mensaje y te responderé a la brevedad';
        msg.classList.toggle('send');
        const forms = document.querySelectorAll('#form-name, #form-email, #form-msg');
        forms.forEach((element) => {
            element.value = '';
        });
    }, 3000)
}

function MenuScroll(e) {
    switch (e.target.id) {
        case 'home':
            window.scrollTo(0, sections.home);
            break;

        case 'proyectos':
            window.scrollTo(0, sections.proyectos);
            break;

        case 'acerca':
            window.scrollTo(0, sections.acerca);
            break;

        case 'contacto':
            window.scrollTo(0, sections.contacto);
            break;
    }
}