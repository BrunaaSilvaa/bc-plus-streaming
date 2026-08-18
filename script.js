const menuBtn = document.querySelector('.mobile__menu')

const menuLinks = document.querySelector('.mobile__links')

//Abre/fecha menu ao clicar no menu hamburguer
menuBtn.addEventListener('click', (event) => {
    event.stopPropagation() // evita que esse clique seja capturado pelo listener do document
    menuLinks.classList.toggle('active')
} )

//Fecha ao clicar em qualquer link dentro dele

const menuItemLinks = document.querySelectorAll('a')
menuItemLinks.forEach (link => {
    link.addEventListener('click', () => {
        menuLinks.classList.remove('active')
    })
})

//Fecha ao clicar fora do menu
document.addEventListener('click', (event) => {
    const clicouDentroDoMenu = event.target.closest('.mobile__container')
    if (!clicouDentroDoMenu && menuLinks.classList.contains('active')) {
        menuLinks.classList.remove('active')
    }
})
