// MENU HAMBURGUER
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// ANIMAÇÃO AO ROLAR
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
        }
    });
});

// VALIDAÇÃO DO FORMULÁRIO
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos!');
    } else {
        alert('Mensagem enviada com sucesso!');
        form.reset();
    }
});
