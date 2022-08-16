const menuHandler = () => {
    let documentPage = document.querySelector('html');
    let menuContainer = document.querySelector('.js-menu');
    let buttonHandler = document.querySelector('.js-menu-handler');
    buttonHandler.addEventListener('click', () => {
        documentPage.classList.toggle('is-locked');
        menuContainer.classList.toggle('is-open');
    })
}

export default menuHandler