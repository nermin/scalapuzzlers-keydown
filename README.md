scalapuzzlers-keydown
=====================
sudo gem install keydown 

git clone git@github.com:nermin/scalapuzzlers-keydown.git

cd replhtml

sbt -Dkeydown.root=$PWD/../talks/scaldays run

open http://localhost:8080
