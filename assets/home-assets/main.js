/* eslint-disable */

/*
    WIKI API EXAMPLE:
    - https://en.wikipedia.org/w/api.php?action=parse&format=json&rvprop=content&page=Penicillium&contentmodel=wikitext
*/

window.onload = () => {
    renderCards();
};

// Get data
async function renderCards() {
    const data = await fetch('./data/fungi-data.json').then(res => res.json());
    const cardsWrapper = document.querySelector('.container');
    // await new Promise(resolve => setTimeout(resolve, 2000));
    let sections = {};
    for (let key in data) {
        const fungi = data[key];
        fungi['slug'] = key;
        if (sections[fungi.classification.order]) {
            sections[fungi.classification.order].push({ ...fungi });
        } else {
            sections[fungi.classification.order] = [fungi];
        }
    }
    for (let key in sections) {
        let section = sections[key];
        let sectionHTML = '';
        let cardsHTML = '';
        for (let fungi of section) {
            cardsHTML += `
                <a href="fungus.html?name=${fungi.slug}" class="card">
                    <div
                        class="image"
                        style="background-image: url('./assets/fungi-models/${
                            fungi.slug
                        }/preview.PNG')"
                    >
                        <div class="info">
                            <ul>
                                <li>
                                    <span>Class:</span>
                                    ${fungi.classification.class}
                                 </li>
                                <li>
                                    <span>Order:</span>
                                    ${fungi.classification.order}
                                 </li>
                                <li>
                                    <span>Family:</span>
                                    ${fungi.classification.family}
                                 </li>
                            </ul>
                        </div>
                    </div>
                    <h5>${fungi.name}</h5>
                </a>
            `;
        }
        sectionHTML = `
            <section>
                <h2>
                    Order: ${key}
                    <img src="./assets/img/icons/expand.svg" />
                </h2>
                <div class="section-cards-wrapper">
                    ${cardsHTML}
                </div>
            </section>
        `;
        cardsWrapper.innerHTML += sectionHTML;
    }
    cardsWrapper.classList.remove('loading');
    collapsibleSections();
}

// collapsibleSections
function collapsibleSections() {
    const sectionsTitles = document.querySelectorAll('.container section h2');
    sectionsTitles.forEach(title => {
        title.addEventListener('click', e => {
            const section = e.target.parentNode;
            const sectionCardsWrapper =
                section && section.querySelector('.section-cards-wrapper');
            section.classList.toggle('closed');
            DOMAnimations.slideToggle(sectionCardsWrapper);
        });
    });
}

const DOMAnimations = {
    /**
     * SlideUp
     */
    slideUp: function(element, duration = 500) {
        return new Promise(function(resolve, reject) {
            element.style.height = element.offsetHeight + 'px';
            element.style.transitionProperty = `height, margin, padding`;
            element.style.transitionDuration = duration + 'ms';
            element.offsetHeight;
            element.style.overflow = 'hidden';
            element.style.height = 0;
            element.style.paddingTop = 0;
            element.style.paddingBottom = 0;
            element.style.marginTop = 0;
            element.style.marginBottom = 0;
            window.setTimeout(function() {
                element.style.display = 'none';
                element.style.removeProperty('height');
                element.style.removeProperty('padding-top');
                element.style.removeProperty('padding-bottom');
                element.style.removeProperty('margin-top');
                element.style.removeProperty('margin-bottom');
                element.style.removeProperty('overflow');
                element.style.removeProperty('transition-duration');
                element.style.removeProperty('transition-property');
                resolve(false);
            }, duration);
        });
    },

    /**
     * SlideDown
     */
    slideDown: function(element, duration = 500) {
        return new Promise(function(resolve, reject) {
            element.style.removeProperty('display');
            let display = window.getComputedStyle(element).display;

            if (display === 'none') display = 'block';

            element.style.display = display;
            let height = element.offsetHeight;
            element.style.overflow = 'hidden';
            element.style.height = 0;
            element.style.paddingTop = 0;
            element.style.paddingBottom = 0;
            element.style.marginTop = 0;
            element.style.marginBottom = 0;
            element.offsetHeight;
            element.style.transitionProperty = `height, margin, padding`;
            element.style.transitionDuration = duration + 'ms';
            element.style.height = height + 'px';
            element.style.removeProperty('padding-top');
            element.style.removeProperty('padding-bottom');
            element.style.removeProperty('margin-top');
            element.style.removeProperty('margin-bottom');
            window.setTimeout(function() {
                element.style.removeProperty('height');
                element.style.removeProperty('overflow');
                element.style.removeProperty('transition-duration');
                element.style.removeProperty('transition-property');
            }, duration);
        });
    },

    /**
     * SlideToggle
     */
    slideToggle: function(element, duration = 500) {
        if (window.getComputedStyle(element).display === 'none') {
            return this.slideDown(element, duration);
        } else {
            return this.slideUp(element, duration);
        }
    }
};
