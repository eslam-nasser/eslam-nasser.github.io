export default function (modelInfo) {
    const controllersDiv = document.querySelector('#controllers');
    modelInfo.forEach((part) => {
        controllersDiv.innerHTML += `
            <label>
                <input checked type="checkbox" onchange="toggleShowPart('${part.name}', event)"/>
                <span>${part.name}</span>
            </label>
        `;
    });
}
