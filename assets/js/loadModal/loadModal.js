/* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */

// function extractHostname(url) {
//     let hostname;
//     if (url.indexOf('//') > -1) {
//         hostname = url.split('/')[2];
//     } else {
//         hostname = url.split('/')[0];
//     }

//     // find & remove port number
//     hostname = hostname.split(':')[0];
//     // find & remove "?"
//     hostname = hostname.split('?')[0];

//     return hostname;
// }
// function extractRootDomain(url) {
//     let domain = extractHostname(url);
//     const splitArr = domain.split('.');
//     const arrLen = splitArr.length;
//     if (arrLen > 2) {
//         domain = `${splitArr[arrLen - 2]}.${splitArr[arrLen - 1]}`;
//         if (splitArr[arrLen - 2].length === 2 && splitArr[arrLen - 1].length === 2) {
//             domain = `${splitArr[arrLen - 3]}.${domain}`;
//         }
//     }
//     return domain;
// }

export default function (info) {
    const modalWrapper = document.querySelector('.modal');
    modalWrapper.querySelector('h3').innerText = info.name || 'Fungs';
    modalWrapper.querySelector('.body').innerHTML = info.body || '';

    // const sourceLink = modalWrapper.querySelector('a.source');
    // if (!info.source) {
    //     sourceLink.style.display = 'none';
    // } else {
    //     sourceLink.href = info.source;
    //     sourceLink.innerText = `Source (${extractRootDomain(info.source)})`;
    // }
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
