#!/bin/sh

npm init --yes > /dev/null

npm i express
express -v ejs -f > /dev/null
npm i

mv public/stylesheets/ public/css/
mv public/javascripts/ public/js/

sed -i -e "s/stylesheets/css/g" views/index.ejs

npm i node-sass uglify-js
cp -r `dirname $0`/module `pwd`/
cp `dirname $0`/watch.js `pwd`/
cp `dirname $0`/bin/www `pwd`/bin/

git ignore node,sass

npm set init.author "walk8243 (https://qiita.com/walk8243)"
npm set init.license "MIT"
npm init --yes > /dev/null
