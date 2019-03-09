/* eslint-disable */
window.onload = () => {
    renderCards();
};

// Get data
async function renderCards() {
    const data = await fetch('./data/fungi-data.json').then(res => res.json());
    const cardsWrapper = document.querySelector('.cards-wrapper');
    let sections = {};
    for (let key in data) {
        const fungi = data[key];
        fungi['slug'] = key;
        if (sections[fungi.order]) {
            sections[fungi.order].push({ ...fungi });
        } else {
            sections[fungi.order] = [fungi];
        }
    }
    for (let key in sections) {
        let section = sections[key];
        let sectionHTML = '';
        let cardsHTML = '';
        for (let fungi of section) {
            cardsHTML += `
                <a href="/fungus.html?name=${fungi.slug}" class="card">
                    <div
                        class="image"
                        style="background-image: url('./assets/${fungi.slug}/preview.PNG')"
                    >
                        <div class="info">
                            <ul>
                            <li>Class: CLASS NAME </li>
                            <li>Order: ORDER NAME </li>
                            <li>Family: FAMILY NAME </li>
                            </ul>
                        </div>
                    </div>
                    <h5>${fungi.name}</h5>
                </a>
            `;
        }
        sectionHTML = `
            <section>
                <h2>${key}</h2>
                ${cardsHTML}
            </section>
        `;
        cardsWrapper.innerHTML += sectionHTML;
    }
}
