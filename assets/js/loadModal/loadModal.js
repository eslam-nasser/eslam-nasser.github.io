/* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
export default function (info) {
    const modalWrapper = document.querySelector('.modal');
    modalWrapper.querySelector('h3').innerText = info.name || 'Fungs';
    modalWrapper.querySelector('.body').innerHTML = info.body || '';
    modalWrapper.querySelector('.source').href = info.source || '';
}

// Global modal handling
window.openModal = () => {
    const modal = document.querySelector('.modal');
    const modalLayer = document.querySelector('.modal-overlay');
    modal.style.display = 'block';
    modalLayer.style.display = 'block';

    modalLayer.style.opacity = 1;
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 250);
};
window.closeModal = () => {
    const modal = document.querySelector('.modal');
    const modalLayer = document.querySelector('.modal-overlay');
    modal.style.display = 'none';
    modalLayer.style.display = 'none';

    modalLayer.style.opacity = 0;
    modal.style.opacity = 0;
};
