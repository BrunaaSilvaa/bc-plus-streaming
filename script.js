const menuBtn = document.querySelector('.mobile__menu')

const menuLinks = document.querySelector('.mobile__links')

menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('active')
} )

alert ('script carregado')