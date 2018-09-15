#!/bin/sh

# gitのセットアップ
[ ! -d ".git" ] && git init

# npmのセットアップ
npm init --yes > /dev/null

# Expressジェネレータの起動
npm i express
express -v ejs -f > /dev/null

# npmモジュールのインストール
npm i config js-yaml node-sass uglify-js
npm i mocha sinon supertest --save-dev

# テンプレートファイルのコピー
cp -r `dirname $0`/module `pwd`/
cp -r `dirname $0`/views `pwd`/
cp `dirname $0`/watch.js `pwd`/
cp `dirname $0`/bin/www `pwd`/bin/
cp -r `dirname $0`/config `pwd`/
cp `dirname $0`/gitignore_template `pwd`/.gitignore
cp `dirname $0`/favicon.ico `pwd`/public/favicon.ico

# public内のフォルダ名の変更
mv public/stylesheets/ public/css/
mv public/javascripts/ public/js/
sed -i -e "s/stylesheets/css/g" views/index.ejs

# ファイルを作成
mkdir sass
mv public/css/style.css sass/style.scss
touch `pwd`/public/css/empty
touch `pwd`/public/js/empty
touch `pwd`/public/images/empty

# パッケージ情報を更新
npm set init.author.name "walk8243"
npm set init.author.url "https://qiita.com/walk8243"
npm set init.license "MIT"
npm init --yes > /dev/null
npm i

# 初期コミット
git add .
git commit -m "walk8243-eac"
