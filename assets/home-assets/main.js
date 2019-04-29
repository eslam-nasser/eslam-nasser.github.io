/* eslint-disable */

/*
    WIKI API EXAMPLE:
    - https://en.wikipedia.org/w/api.php?action=parse&format=json&rvprop=content&page=Penicillium&contentmodel=wikitext
*/
window.onload = function() {
    renderCards();
}; // Get data

async function renderCards() {
    var data = await fetch('./data/fungi-data.json').then(function(res) {
        return res.json();
    });
    var cardsWrapper = document.querySelector('.container'); // await new Promise(resolve => setTimeout(resolve, 2000));

    var sections = {};

    for (var key in data) {
        var fungi = data[key];
        fungi['slug'] = key;

        if (sections[fungi.classification.order]) {
            sections[fungi.classification.order].push({
                ...fungi,
            });
        } else {
            sections[fungi.classification.order] = [fungi];
        }
    }

    for (var _key in sections) {
        var section = sections[_key];
        var sectionHTML = '';
        var cardsHTML = '';
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (
                var _iterator = section[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
            ) {
                var _fungi = _step.value;
                cardsHTML += '\n                <a href="fungus.html?name='
                    .concat(
                        _fungi.slug,
                        '" class="card">\n                    <div\n                        class="image"\n                        style="background-image: url(\'./assets/fungi-models/',
                    )
                    .concat(
                        _fungi.slug,
                        '/preview.PNG\')"\n                    >\n                        <div class="info">\n                            <ul>\n                                <li>\n                                    <span>Class:</span>\n                                    ',
                    )
                    .concat(
                        _fungi.classification.class,
                        '\n                                 </li>\n                                <li>\n                                    <span>Order:</span>\n                                    ',
                    )
                    .concat(
                        _fungi.classification.order,
                        '\n                                 </li>\n                                <li>\n                                    <span>Family:</span>\n                                    ',
                    )
                    .concat(
                        _fungi.classification.family,
                        '\n                                 </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <h5>',
                    )
                    .concat(_fungi.name, '</h5>\n                </a>\n            ');
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        sectionHTML = '\n            <section>\n                <h2>\n                    Order: '
            .concat(
                _key,
                '\n                    <img src="./assets/img/icons/expand.svg" />\n                </h2>\n                <div class="section-cards-wrapper">\n                    ',
            )
            .concat(cardsHTML, '\n                </div>\n            </section>\n        ');
        cardsWrapper.innerHTML += sectionHTML;
    }

    cardsWrapper.classList.remove('loading');
    collapsibleSections();
} // collapsibleSections

function collapsibleSections() {
    var sectionsTitles = document.querySelectorAll('.container section h2');
    sectionsTitles.forEach(function(title) {
        title.addEventListener('click', function(e) {
            var section = e.target.parentNode;
            var sectionCardsWrapper = section && section.querySelector('.section-cards-wrapper');
            section.classList.toggle('closed');
            DOMAnimations.slideToggle(sectionCardsWrapper);
        });
    });
}

var DOMAnimations = {
    /**
     * SlideUp
     */
    slideUp: function slideUp(element) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        return new Promise(function(resolve, reject) {
            element.style.height = element.offsetHeight + 'px';
            element.style.transitionProperty = 'height, margin, padding';
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
    slideDown: function slideDown(element) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        return new Promise(function(resolve, reject) {
            element.style.removeProperty('display');
            var display = window.getComputedStyle(element).display;
            if (display === 'none') display = 'block';
            element.style.display = display;
            var height = element.offsetHeight;
            element.style.overflow = 'hidden';
            element.style.height = 0;
            element.style.paddingTop = 0;
            element.style.paddingBottom = 0;
            element.style.marginTop = 0;
            element.style.marginBottom = 0;
            element.offsetHeight;
            element.style.transitionProperty = 'height, margin, padding';
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
    slideToggle: function slideToggle(element) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

        if (window.getComputedStyle(element).display === 'none') {
            return this.slideDown(element, duration);
        } else {
            return this.slideUp(element, duration);
        }
    },
};
