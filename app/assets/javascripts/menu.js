const menuHandler = () => {
    let menuContainer = document.querySelector('.js-menu');
    let buttonHandler = document.querySelector('.js-menu-handler');
    buttonHandler.addEventListener('click', () => {
        menuContainer.classList.toggle('is-open');
    })
}

export default menuHandler