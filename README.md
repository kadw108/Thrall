Needed but not included in the repository due to being build outputs:

* export/index.html
* export/typeScriptMain.js
* export/assets

`index.html` and `typeScriptMain.js` are generated with `build.sh`. The files in `src` are the actual source code of the final project in `export/index.html`. The files in `script_files` get compiled by `build` into `export/typeScriptMain.js`, which is imported into the final project by a line in `addToHead.html`.

The visual and audio files in `assets` aren't included in the repo since they'd make it unnecessarily large, but they come with the downloaded version of the game you can get on Itch.
