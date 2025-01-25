/*
Syntax:

<a class="panelOpener" identifier="test" >Click to make it show up!</a>
<div class="panelFull absoluteAlign hidden" identifier="test">How wonderful. I love my life.</div>

*/

import { h } from "dom-chef";

function clickOpener(event: Event) {
    if (event.target === null) {
        return;
    }

    const identifier = (event.target as HTMLElement).getAttribute("identifier");
    if (identifier === null) {
        console.error("Panel opener without identifier!");
        console.error(event.target);
        return;
    }

    const replacer = document.querySelector(".panelFull[identifier='" + identifier + "']");

    if (replacer === null) {
        console.error("Panel opener without panel!");
        console.error(event.target);
        return;
    }

    openMenuPanel(replacer);
}

function openMenuPanel(menuPanel: Element) {
    const screenCover = document.getElementById("screenCover");
    screenCover.style.display = "block";

    menuPanel.classList.remove("hidden");
}

function editMenuPanel(menuPanel: Element) {
    if (menuPanel.querySelector(".closeButton") !== null) {
        return;
    }

    const closeButton = (
        <button type="button" className="closeButton">
            X
        </button>
    );
    closeButton.addEventListener("click", () => {
        closePanel(menuPanel);
    });

    menuPanel.prepend(closeButton);
}

function closePanel(menuPanel: Element) {
    menuPanel.classList.add("hidden");

    const screenCover = document.getElementById("screenCover");
    screenCover.style.display = "none";
}

function addMenuPanels() {
    Array.from(document.getElementsByClassName("panelOpener")).forEach((e) => {
        e.addEventListener("click", clickOpener);
    });

    Array.from(document.getElementsByClassName("panelFull")).forEach((e) => {
        editMenuPanel(e);
    });
}

/*
Returns the close button so functions that call this
can add more event listeners to it
*/
function addCloseButton(element: Element): Element {
    const closeButton = (
        <button type="button" className="closeButton">
            X
        </button>
    );
    closeButton.addEventListener("click", () => {
        element.remove();
    });
    element.prepend(closeButton);
    return closeButton;
}
function clearAndAddCloseButton(element: Element): Element {
    element.innerHTML = "";
    return addCloseButton(element);
}

export { addMenuPanels, editMenuPanel, closePanel, openMenuPanel, clearAndAddCloseButton };
