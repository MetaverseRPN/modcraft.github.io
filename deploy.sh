#!/bin/sh -x
browserify index.coffee -t coffeeify > bundle.js
git add -A
git commit -am "Regenerate bundle.js using deploy.sh"
git push origin gh-pages
