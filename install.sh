#!/bin/sh

expect -c "
spawn npm init
expect \"package name:\"
send \"\n\"
expect \"version:\"
send \"\n\"
expect \"description:\"
send \"\n\"
expect \"entry point:\"
send \"\n\"
expect \"test command:\"
send \"\n\"
expect \"git repository:\"
send \"\n\"
expect \"keywords:\"
send \"\n\"
expect \"author:\"
send \"\n\"
expect \"license:\"
send \"\n\"
expect \"Is this OK?\"
send \"\n\"
expect \"$\"
exit 0
"

npm i express
express -v ejs -f
npm i

mv public/stylesheets/ public/css/
mv public/javascripts/ public/js/

sed -i -e "s/stylesheets/css/g" views/index.ejs
