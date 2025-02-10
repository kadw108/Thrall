/*
Adds row of candles at bottom.
*/

import { h } from "dom-chef";

export function createCandles() {
    const candles = document.querySelectorAll(".candleContainer");
    if (candles.length > 0) {
        candles.forEach((c) => c.classList.remove("out"));
        return;
    }

    const candle1 = 
    <div className="candleContainer">
        <div className="candle">
            <div className="flame">
                <div className="shadows"></div>
                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
            </div>
            <div className="wick"></div>
            <div className="wax"></div>
        </div>
    </div>;
    candle1.style.left = "43.5%";
    candle1.style.bottom = "60px";

    const candle2 = 
    <div className="candleContainer">
        <div className="candle">
            <div className="flame">
                <div className="shadows"></div>
                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
            </div>
            <div className="wick"></div>
            <div className="wax"></div>
        </div>
    </div>;
    candle2.style.left = "50%";
    candle2.style.bottom = "40px";
    candle2.style.transform = "rotate(7deg)";
    (candle2.querySelector(".flame .top") as JSX.Element).style.height = "80%";
    (candle2.querySelector(".flame .top") as JSX.Element).style.top = "20%";

    [candle1, candle2].forEach((c) => {
        c.addEventListener("mouseover", () => {
            c.classList.add("out");
        });
    });

    const passagesFake = document.querySelector("#screenContents") as HTMLElement;
    if (passagesFake.offsetHeight > 450) {
        // @ts-expect-error
        if (window.visited("end1") > 0 || window.visited("end2") > 0) {
            passagesFake.append(candle1);
        }
        else {
            passagesFake.append(candle1, candle2);
        }
    }
}

export function removeCandles() {
    document.querySelectorAll(".candleContainer").forEach((c) => c.remove());
}