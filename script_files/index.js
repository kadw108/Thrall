import { addWrapperHtml } from "./addWrapperHtml";
import { addReplaceLink } from "./addReplaceLink";
import { addMenuPanels, openMenuPanel, closePanel } from "./addMenuPanels";
import { addTagsToStory, getPassageTags, preload } from "./utility";
import { musicManager } from "./music";
import { addCycles } from "./cycle";
import { createMarquee, createMouseoverMarquee } from "./createMarquee";
import { createCandles, removeCandles } from "./candles"

function globalScript() {
  addWrapperHtml();
  addReplaceLink();

  addMenuPanels();
  addCycles();

  addTagsToStory(window.passage.name);
  if (window.passage.name == "start1") {
    createCandles();
  }
  else {
    removeCandles();
  }

  musicManager.playSoundtrack(getPassageTags());
}

export {
  addWrapperHtml,
  addReplaceLink,
  addMenuPanels,
  openMenuPanel,
  closePanel,
  globalScript,
  createMarquee,
  createMouseoverMarquee,

  preload,
  // musicManager,
};
