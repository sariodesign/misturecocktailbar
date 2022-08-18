import menuHandler from './menu';

const headerInit = () => {
    const headerElement = document.querySelector('header');
    // Intesection observe footer

    /* let options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 1.0
    } */

    let callback = entries => {
        entries.forEach((entry) => {
            entry.isIntersecting ? headerElement.classList.add('translate-out') : headerElement.removeAttribute('class')
        });
    };

    let target = document.querySelector('.footer-container');
    
    let observer = new IntersectionObserver(callback);
    observer.observe(target);


    // Handler for open and close menu on mobile
    menuHandler();
}

export default headerInit;