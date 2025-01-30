// Adds wrapper HTML to snippet. Mimics Sugarcube's StoryInterface passage functionality.

/*
STRUCTURE BEFORE:

<tw-story class="story"> (added automatically by Snowman)
    <tw-passage class="passage"> (added automatically by Snowman; has actual contents of passage)
        [PASSAGE CONTENTS]
    </tw-passage>
</tw-story>

tw-story and tw-passage are necessary; Snowman won't work without them.

*/

import { h } from "dom-chef";
import { createSettings } from "./addSettings";

export function addWrapperHtml() {
    if (document.getElementById("contents") === null) {
        const iffSnippet = document.querySelector("tw-passage");
        if (iffSnippet === null) {
            console.error("tw-passage is null");
            return;
        }
        iffSnippet.remove();

        const contents = (
            <div id="contents" className="styled-scrollbars">
                <div id="bg" className="fullscreenBg"></div>
                <div id="passagesFake">
                    <div id="screenCover" className="fullscreenBg"></div>
                    <div className="marquee-wrapper"><div className="marquee marquee-animation"><p></p><p aria-hidden="true"></p></div></div>
                    <div id="screenContents" className="absoluteAlign">
                        {iffSnippet}
                    </div>
                    <div className="marquee-wrapper" style={{"position": "absolute", "bottom": "0"}}><div className="marquee marquee-animation"><p></p><p aria-hidden="true"></p></div></div>
                </div>
            </div>
        ); 

        document.querySelector("tw-story")?.appendChild(contents);

        createSettings();
    }
}
