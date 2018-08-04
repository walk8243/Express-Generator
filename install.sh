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
cp `dirname $0`/gitignore_template `pwd`/.gitignore

npm set init.author.name "walk8243"
npm set init.author.url "https://qiita.com/walk8243"
npm set init.license "MIT"
npm init --yes > /dev/null
