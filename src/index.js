import _ from "lodash";

import './index.css'
import baifern from '../baifern.jpg'

function component() {
    const element = document.createElement("div");
    const element2 = document.createElement("p");
    element.className = "wrapper"
    element.appendChild(element2)
    const baifernImg = new Image()
    baifernImg.src = baifern
    element.appendChild(baifernImg)
    element.innerHTML = _.join(["Baifern", "Ina"], " ");
    return element;
}

document.body.appendChild(component());
