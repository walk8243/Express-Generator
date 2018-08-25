#!/bin/sh

[ ! -d ".git" ] && git init

npm init --yes > /dev/null

npm i express
express -v ejs -f > /dev/null
npm i
npm i config js-yaml

cp -r `dirname $0`/config `pwd`/

mv public/stylesheets/ public/css/
mv public/javascripts/ public/js/

sed -i -e "s/stylesheets/css/g" views/index.ejs

npm i node-sass uglify-js
cp -r `dirname $0`/module `pwd`/
cp -r `dirname $0`/views `pwd`/
cp `dirname $0`/watch.js `pwd`/
cp `dirname $0`/bin/www `pwd`/bin/
cp `dirname $0`/gitignore_template `pwd`/.gitignore

mkdir sass
mv public/css/style.css sass/style.scss

touch `pwd`/public/css/empty
touch `pwd`/public/js/empty
touch `pwd`/public/images/empty
cp `dirname $0`/favicon.ico `pwd`/public/favicon.ico

npm set init.author.name "walk8243"
npm set init.author.url "https://qiita.com/walk8243"
npm set init.license "MIT"
npm init --yes > /dev/null

git add .
git commit -m "walk8243-eac"
