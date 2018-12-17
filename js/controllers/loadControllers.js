/* eslint no-param-reassign: ["error", { "props": false }] */
import scene from '../world/scene';

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

window.toggleShowPart = (name, e) => {
    // const label = e.target.parentNode;
    // const allInputs = Array.from(label.parentNode.querySelectorAll('input'));
    // const isAllChecked = allInputs.every(el => el.checked === true);
    // console.log(isAllChecked);
    // if (isAllChecked) {
    //     allInputs.forEach((el) => {
    //         el.checked = false;
    //     });
    //     e.target.checked = true;
    // }

    // query the object by its name
    const object = scene.getObjectByName(name, true);
    // toggle its opacity
    if (e.target.checked === false) {
        object.traverse((node) => {
            if (node.material) {
                node.material.opacity = 0.1;
                node.material.transparent = true;
            }
        });
    } else {
        object.traverse((node) => {
            if (node.material) {
                node.material.opacity = 1;
                node.material.transparent = true;
            }
        });
    }
};
