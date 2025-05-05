document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const rightHeader = document.querySelector('.right-header');

    if (hamburger && rightHeader) {
        hamburger.addEventListener('click', () => {
            rightHeader.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
});
