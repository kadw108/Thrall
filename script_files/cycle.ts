/*
Replica of Sugarcube's cycle macro. Didn't like the Twine Cookbook's implementation.

Syntax:
<a class="cycle" choices='["One", "Two", "Three"]'></a>

Stuff in the span will be an initially randomly-chosen value from choices that goes to the next value when clicked.
*/

import { randIndex } from "./utility";

function setCycleValue(el: HTMLElement, whichChoice: number) {
    const choices = JSON.parse(el.getAttribute("choices"));
    whichChoice = whichChoice % choices.length;
    el.innerText = choices[whichChoice];
    el.setAttribute("whichChoice", "" + whichChoice);
}

function clickReplaceCycle(event) {
    let whichChoice = Number(event.target.getAttribute("whichChoice"));
    whichChoice++;
    setCycleValue(event.target, whichChoice);
}

export function addCycles() {
    Array.from(document.getElementsByClassName("cycle")).forEach((e) => {
        if (e.getAttribute("choices") == null) {
            console.error("Cycle element with no choices attribute.", e);
            return;
        }

        const choices = JSON.parse(e.getAttribute("choices"));
        const whichChoice = randIndex(choices);
        setCycleValue(e as HTMLElement, whichChoice);
        e.addEventListener("click", clickReplaceCycle);
    });
}