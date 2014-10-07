#!/bin/sh -x
browserify index.coffee -t coffeeify -o bundle1.js
git add -A
git commit -am "Regenerate bundle.js using deploy.sh"
git push origin gh-pages | nbryant@joshuaschool.org:zsedcf1234
