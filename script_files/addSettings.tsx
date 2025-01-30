/*
Adds settings menu and button for changing marquee speed.
*/

import { h } from "dom-chef";

export function createSettings() {
    const menu =
        // @ts-expect-error
        <div className="panelFull absoluteAlign hidden" identifier="settings">
            <input type="reset"></input>

            <p>
                <label htmlFor="marqueeSpeed">Scrolling text speed: </label>
                <output id="rangeValue">100%</output>
                <br/>
                <input type="range" id="marqueeSpeed" name="marqueeSpeed" min="0" max="100" value="100"/>
            </p>

            <p>
                <label htmlFor="fontSize">Font size: </label>
                <output id="fontSizeValue">100%</output>
                <br/>
                <input type="range" id="fontSize" name="fontSize" min="50" max="150" value="100"/>
            </p>
        </div>;
    document.getElementById("passagesFake").append(menu);


    const marqueeInput = menu.querySelector("input#marqueeSpeed");
    function changeMarqueeSpeed(speed) {
        const output = menu.querySelector("output#rangeValue") as HTMLElement;
        output.innerText = speed + "%";

        const marquees = document.getElementsByClassName("marquee");
        Array.from(marquees).forEach((m) => {
            if (speed == 0) {
                m.classList.remove("marquee-animation");
            }
            else {
                m.classList.add("marquee-animation");
                // @ts-expect-error
                m.style["-webkit-animation-duration"] = 40 * (100 / speed) + "s";
            }
        });

        // @ts-expect-error
        marqueeInput.value = speed;
    }
    marqueeInput.addEventListener("change", (event) => {
        // @ts-expect-error
        changeMarqueeSpeed(event.target.value);
    });


    const fontInput = menu.querySelector("input#fontSize");
    function changeFontSize(fontSize) {
        const output = menu.querySelector("output#fontSizeValue") as HTMLElement;
        output.innerText = fontSize + "%";

        document.getElementById("screenContents").style.fontSize = fontSize + "%";

        // @ts-expect-error
        fontInput.value = fontSize;
    }
    fontInput.addEventListener("change", (event) => {
        // @ts-expect-error
        changeFontSize(event.target.value);
    });

    const resetButton = menu.querySelector("input[type='reset']");
    resetButton.addEventListener("click", (e) => {
        changeMarqueeSpeed(100);
        changeFontSize(100);
    });

    // @ts-expect-error
    const settingButton = <button type="button" id="settingsButton" className="panelOpener" identifier="settings"></button>;
    document.getElementById("screenContents").append(settingButton);
}