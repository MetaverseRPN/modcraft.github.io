#!/bin/sh -x
browserify index.js -o bundle2.js
git add -A
git commit -am "Regenerate bundle.js using deploy.sh"
git push origin gh-pages
