rm -f export/index.html
cd script_files
../node_modules/.bin/esbuild index.js --minify --bundle --outfile=../export/typeScriptMain.js --global-name=mainScript
cd ..

# make it globally accessible
# from https://stackoverflow.com/questions/64806255/how-to-expose-a-class-to-the-global-scope-with-esbuild
echo "window.mainScript = mainScript;" >> export/typeScriptMain.js

/home/account/Documents/prog/games/if/tweego-2.1.1/tweego -l -o export/index.html src

# insert contents of addToHead.html into head of export/index.html, before line containing "<title>"
# from https://unix.stackexchange.com/a/32912
sed -n -i -e '/<title>/r addToHead.html' -e 1x -e '2,${x;p}' -e '${x;p}' export/index.html

# minify resulting html file with https://www.npmjs.com/package/html-minifier
html-minifier --remove-comments --minify-css true --case-sensitive --sort-attributes --sort-class-name export/index.html > temp.html
mv temp.html export/index.html

echo "Build done (for real)."