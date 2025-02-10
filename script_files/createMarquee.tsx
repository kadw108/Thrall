/*
Creates marquee.
*/

import { h } from "dom-chef";

export function createMarquee(list: Array<String>, defaultText: boolean = true) {
    let trueList = list;
    while (trueList.join(" ").length < 200) {
        trueList = trueList.concat(list);
    }

    const marqueeChildren = document.querySelectorAll(".marquee p");
    const divider = " ❉️ ";
    const tickerText = trueList.join(divider) + divider;

    Array.from(marqueeChildren).forEach(paragraph => {
        paragraph.innerHTML = tickerText;
    });

    if (defaultText) {
        // @ts-expect-error
        window.story.state.marqueeText = list;
    }
}

function returnToDefaultMarquee() {
    // @ts-expect-error
    if (window.story.state.marqueeText == null) {
        console.error("Return to default marquee with no marquee text.");
    }

    // @ts-expect-error
    createMarquee(window.story.state.marqueeText);
}

export function createMouseoverMarquee(lists: Array<Array<String>>) {
    const mouseovers = Array.from(document.querySelectorAll(".mousemarquee"));
    for (let i = 0; i < mouseovers.length; i++) {
        mouseovers[i].addEventListener("mouseover", (event) => createMarquee(lists[i], false));
        mouseovers[i].addEventListener("mouseout", (event) => returnToDefaultMarquee());
    }
}