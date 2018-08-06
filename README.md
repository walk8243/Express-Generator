# Express-Generator
ExpressアプリケーションをSHで簡単セットアップ

## Started
```.sh
git clone https://github.com/walk8243/Express-Generator.git && \
cd Express-Generator && \
if [ `alias | grep walk8243-eac | grep -c ^` -gt 0 ]; then
  echo "既に`walk8243-eac`はエイリアス登録されています。"
else
  echo >> ~/.bash_aliases && \
  echo "# Express-Generatorのエイリアス登録" >> ~/.bash_aliases && \
  echo alias walk8243-eac=\'`pwd`/install.sh\' >> ~/.bash_aliases && \
  source ~/.bashrc && \
  alias walk8243-eac
fi
```
